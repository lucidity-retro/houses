// Limites des coordonnées
const xMin = 8, xMax = 21;
const yMin = 22, yMax = 30;
	
// Liste des coordonnées des Zaapis (à adapter selon les vrais Zaapis de Bonta)
const zaapis = [
    
];
    
const casparticuliergauche = [

];

const casparticulierdroite = [
    [13, 24]
];

const casparticulierhaut = [
    [16, 27],
    [20, 22]
];

const casparticulierbas = [
    [15, 25],
    [12, 27],
    [13, 27]
];

const casparticulierbasgauche = [
    
];

const leftcells = [
    [21, 22],
    [21, 23],
    [21, 24],
    [17, 27],
    [17, 28]
];

const rightcells = [
    [11, 29],
    [8, 25],
    [8, 26]
];

const topleftcells = [
    [14, 29],
    [19, 25]
];

const toprightcells = [
    [9, 27]
];

const topcells = [
    [20, 25],
    [16, 26],
    [17, 26],
    [18, 26],
    [15, 29],
    [16, 29],
    [10, 28],
    [11, 28],
    [12, 30],
    [13, 30]
];

const bottomrightcells = [
    [9, 24],
    [11, 23],
    [14, 24],
    [13, 28],
    [18, 23],
    [19, 22]
];

const bottomleftcells = [
    [13, 23],
    [15, 26]
];

const bottomcells = [
    [12, 28],
    [15, 23],
    [16, 23],
    [17, 23],
    [12, 22],
    [10, 23]
];

const bottomleftrightcells = [
    
];

const hide = [
    [8, 22],
    [9, 22],
    [10, 22],
    [11, 22],
    [13, 22],
    [14, 22],
    [15, 22],
    [16, 22],
    [17, 22],
    [18, 22],
    [8, 23],
    [9, 23],
    [14, 23],
    [8, 24],
    [21, 25],
    [19, 26],
    [20, 26],
    [21, 26],
    [8, 27],
    [18, 27],
    [19, 27],
    [20, 27],
    [21, 27],
    [8, 28],
    [9, 28],
    [18, 28],
    [19, 28],
    [20, 28],
    [21, 28],
    [8, 29],
    [9, 29],
    [10, 29],
    [17, 29],
    [18, 29],
    [19, 29],
    [20, 29],
    [21, 29],
    [8, 30],
    [9, 30],
    [10, 30],
    [11, 30],
    [14, 30],
    [15, 30],
    [16, 30],
    [17, 30],
    [18, 30],
    [19, 30],
    [20, 30],
    [21, 30],
];

const walls = [

];
       	
const houses = [[17, 24], [18, 24], [19, 24], [20, 24], [19, 23], [17, 25], [14, 27], [15, 27], [16, 27], [15, 28], [16, 28], [14, 28], [12, 25], [12, 24], [11, 24], [10, 24], [9, 25], [9, 26], [10, 26], [10, 25], [11, 25], [11, 27], [10, 27], [12, 27], [13, 29]];
    
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
                
    // Ajouter les coordonnées (sauf si c'est une case noire)
    if (!cell.classList.contains('black')) {
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