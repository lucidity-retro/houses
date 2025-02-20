// Limites des coordonnées
const xMin = -58, xMax = -48;
const yMin = 10, yMax = 23;
	
// Liste des coordonnées des Zaapis (à adapter selon les vrais Zaapis de Bonta)
const zaapis = [
    
];

const casparticuliergauche = [
    [-50, 13],
    [-58, 17],
    [-58, 20],
    [-52, 16],
    [-52, 21],
    [-52, 18],
    [-52, 20],
    [-52, 19]
];

const casparticulierdroite = [
    [-54, 12],
    [-54, 13],
    [-54, 14]
];

const casparticulierhaut = [
    [-50, 15],
    [-50, 17]
];

const casparticulierbas = [
    [-53, 15],
    [-55, 15],
    [-56, 15],
    [-57, 15],
    [-51, 15],
    [-49, 15]
];

const leftcells = [
    [-48, 12],
    [-48, 13],
    [-48, 14],
    [-48, 15],
    [-48, 17],
    [-48, 18],
    [-48, 19],
    [-48, 20],
    [-51, 22],
    [-53, 19],
    [-53, 20]
];

const rightcells = [
    [-58, 11],
    [-58, 12],
    [-58, 13],
    [-58, 14],
    [-58, 15],
    [-53, 22],
    [-53, 12],
    [-53, 13]
];

const topleftcells = [
    [-51, 21],
    [-51, 13],
    [-56, 13],
    [-53, 18],
    [-56, 18],
    [-51, 18]
];

const toprightcells = [
    [-58, 18],
    [-55, 13],
    [-50, 14],
    [-55, 18],
    [-50, 18]
];

const topcells = [
    [-58, 21],
    [-57, 21],
    [-56, 21],
    [-55, 21],
    [-54, 21],
    [-52, 23],
    [-50, 21],
    [-49, 21],
    [-50, 16]
];

const bottomrightcells = [
    [-52, 11],
    [-58, 19],
    [-55, 14],
    [-53, 14],
    [-55, 19],
    [-50, 19],
    [-55, 16]
];

const bottomleftcells = [
    [-56, 11],
    [-50, 11],
    [-51, 14],
    [-56, 14],
    [-53, 16],
    [-56, 19],
    [-51, 19],
    [-51, 16]
];

const bottomcells = [
    [-57, 10],
    [-55, 11],
    [-54, 11],
    [-51, 10],
    [-49, 11],
    [-56, 16],
    [-58, 16],
    [-57, 16],
    [-49, 16]
];

const bottomleftrightcells = [
    
];

const hide = [
    [-58, 10],
    [-56, 10],
    [-55, 10],
    [-54, 10],
    [-53, 10],
    [-52, 10],
    [-50, 10],
    [-49, 10],
    [-48, 10],
    [-48, 11],
    [-58, 22],
    [-57, 22],
    [-56, 22],
    [-55, 22],
    [-54, 22],
    [-50, 22],
    [-49, 22],
    [-48, 22],
    [-48, 21],
    [-58, 23],
    [-57, 23],
    [-56, 23],
    [-55, 23],
    [-54, 23],
    [-53, 23],
    [-51, 23],
    [-50, 23],
    [-49, 23],
    [-48, 23],
    [-53, 11],
    [-53, 21],
    [-48, 16]
];

const walls = [

];

// Déclaration des maps divers
const divers = {
    zaap: [
        [-54, 15]
    ]
};

const houses = [[-55, 17], [-56, 17], [-57, 17], [-57, 18], [-54, 20], [-54, 19], [-54, 18], [-51, 17], [-50, 17], [-49, 17], [-49, 18], [-49, 19], [-49, 20], [-50, 20], [-51, 20], [-52, 20], [-52, 21], [-52, 22], [-52, 19], [-52, 18], [-51, 15], [-50, 15], [-49, 13], [-49, 12], [-50, 13], [-51, 12], [-51, 11], [-52, 12], [-52, 13], [-52, 14], [-54, 14], [-54, 12], [-55, 12], [-56, 12], [-57, 12], [-57, 11], [-57, 14], [-57, 15], [-55, 15]];
    
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