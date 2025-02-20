// Limites des coordonnées
const xMin = -2, xMax = 6;
const yMin = 2, yMax = 9;
	
// Liste des coordonnées des Zaapis (à adapter selon les vrais Zaapis de Bonta)
const zaapis = [
];
    
const casparticuliergauche = [
    [-2, 7]
];

const casparticulierdroite = [
];

const casparticulierhaut = [
];

const casparticulierbas = [
];

const casparticulierbasgauche = [
];

const leftcells = [
    [6, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [6, 7],
    [6, 8],
];

const rightcells = [
    [-2, 3],
    [-2, 4],
    [-2, 5]
];

const topleftcells = [
];

const toprightcells = [
    [-1, 8]
];

const topcells = [
    [-2, 8],
    [0, 9],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
];

const bottomrightcells = [
    [1, 3],
    [-2, 6]
];

const bottomleftcells = [
    [0, 3]
];

const bottomcells = [
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [-1, 2]
];

const bottomleftrightcells = [
];

const hide = [
    [-2, 2],
    [0, 2],
    [1, 2],
    [6, 2],
    [-2, 9],
    [-1, 9],
    [6, 9]
];

const walls = [
];

// Déclaration des maps divers
const divers = {
    zaap: [
        [5, 7]
    ]
};

const houses = [[0, 5], [2, 5], [3, 5], [4, 5], [5, 4], [0, 7], [2, 8]];
    
// Conteneur de la grille
const grid = document.querySelector('.grid');
    
// Configurer dynamiquement les colonnes de la grille
const columnCount = xMax - xMin + 1;
    grid.style.gridTemplateColumns = `repeat(${columnCount}, 50px)`; // 30px de largeur par colonne
    
// Générer les cellules
for (let y = yMin; y <= yMax; y++) {
    for (let x = xMin; x <= xMax; x++) {
        const cell = document.createElement('div');
        cell.className = 'cell';

        cell.setAttribute('data-x', x);
        cell.setAttribute('data-y', y);
    
    // Vérifier si c'est une cellule top-left
    if (topleftcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-top-left'); // Appliquer la classe spécifique
    }

    // Vérifier si la cellule doit être cachée
    if (hide.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('hide', 'white-hide'); // Ajouter les deux classes
    }

    // Vérifier si c'est une cellule top-right
    if (toprightcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-top-right'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule avec bordure en haut
    if (topcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-top'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (bottomleftcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-bottom-left'); // Appliquer la classe spécifique
    }
    
    // Vérifier si c'est une cellule top-left
    if (bottomrightcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-bottom-right'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (bottomcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-bottom'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (leftcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-left'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (rightcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-right'); // Appliquer la classe spécifique
    }

    if (bottomleftrightcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-bottom-left-right'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (casparticuliergauche.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('cas-particulier-gauche'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (casparticulierhaut.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('cas-particulier-haut'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (casparticulierdroite.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('cas-particulier-droite'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (casparticulierbas.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('cas-particulier-bas'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (casparticulierbasgauche.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('cas-particulier-bas-gauche'); // Appliquer la classe spécifique
    }

    if (houses.some(house => house[0] === x && house[1] === y)) {
        cell.classList.add('green'); // Appliquer la couleur verte pour les maisons
    }
        
    // Vérifier si la cellule correspond à un mur ou à une ligne/colonne spéciale
    if (walls.some(wall => wall[0] === x && wall[1] === y)) {
        cell.classList.add('black'); // Appliquer la classe "black" si c'est un mur
    }
                
    // Ajouter les coordonnées (sauf si c'est une case noire ou une case topright)
    if (!cell.classList.contains('walls') && !cell.classList.contains('white-top-right')
        && !cell.classList.contains('hide')
        && !cell.classList.contains('white-top')
        && !cell.classList.contains('white-bottom')
        && !cell.classList.contains('white-left')
        && !cell.classList.contains('white-right')
        && !cell.classList.contains('white-bottom-right')
        && !cell.classList.contains('white-bottom-left')
        && !cell.classList.contains('white-top-left')
        && !cell.classList.contains('white-top-right')
        && !cell.classList.contains('white-bottom-left-right')) {
        cell.innerHTML = `<span>[${x},${y}]</span>`;
    }
    
    // Vérifier si la cellule correspond à un Zaapi et ajouter le point rouge
    if (zaapis.some(zaapi => zaapi[0] === x && zaapi[1] === y)) {
        const redDot = document.createElement('div');
        redDot.className = 'red-dot';
        cell.appendChild(redDot); // Ajouter le point rouge sur le rectangle
    }
    
    grid.appendChild(cell);
    }
}

// Bouton pour retirer les classes 'divers'
const dbutton = document.getElementById('divers-icones');
let isVisibleDivers = true; // État pour savoir si les icônes doivent être affichées ou masquées

dbutton.addEventListener('click', () => {
    // Parcourir chaque catégorie dans divers
    Object.keys(divers).forEach(category => {
        // Parcourir les coordonnées de la catégorie actuelle
        divers[category].forEach(coord => {
            const x = coord[0];
            const y = coord[1];

            // Sélectionner la cellule correspondante
            const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

            // Vérifier si la cellule existe
            if (cell) {
                // Basculer l'état : ajouter ou retirer la classe de la catégorie
                if (isVisibleDivers) {
                    cell.classList.add(category); // Ajouter la classe
                } else {
                    cell.classList.remove(category); // Retirer la classe
                }
            }
        });
    });

    // Basculer l'état
    isVisibleDivers = !isVisibleDivers;

});