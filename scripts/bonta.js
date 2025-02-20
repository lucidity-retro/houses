// Limites des coordonnées
const xMin = -39, xMax = -24;
const yMin = -62, yMax = -48;
	
// Liste des coordonnées des Zaapis (à adapter selon les vrais Zaapis de Bonta)
const zaapis = [
    
];

const casparticuliergauche = [
    [-35, -58]
];

const leftcells = [
    [-24, -61],
    [-24, -60],
    [-24, -59],
    [-24, -58],
    [-24, -57],
    [-24, -56],
    [-24, -55],
    [-24, -54],
    [-24, -53],
    [-24, -52],
    [-24, -51],
    [-24, -50],
    [-24, -49],
    [-24, -50]
];

const rightcells = [
    [-39, -57],
    [-39, -56],
    [-39, -55],
    [-39, -54],
    [-39, -53],
    [-39, -52],
    [-39, -51],
    [-39, -50],
    [-36, -59],
    [-36, -60],
    [-36, -61]
];

const topleftcells = [

];

const toprightcells = [
    [-35, -49]    
];

const topcells = [
    [-36, -49],
    [-38, -49],
    [-37, -49],
    [-25, -48],
    [-26, -48],
    [-27, -48],
    [-28, -48],
    [-29, -48],
    [-30, -48],
    [-31, -48],
    [-32, -48],
    [-33, -48],
    [-34, -48]
];

const bottomrightcells = [
    [-38, -58],
    [-32, -61]
];

const bottomleftcells = [
    [-33, -61]
];

const bottomcells = [
    [-25, -62],
    [-26, -62],
    [-27, -62],
    [-28, -62],
    [-29, -62],
    [-30, -62],
    [-31, -62],
    [-34, -62],
    [-35, -62],
    [-37, -59]
];

const bottomleftrightcells = [
    [-36, -58]
];

const walls = [
    [-38, -59],
    [-38, -60],
    [-38, -61],
    [-37, -60],
    [-37, -61],
    [-35, -48],
    [-36, -48],
    [-37, -48],
    [-38, -48],
    [-39, -62],
    [-39, -61],
    [-39, -60],
    [-39, -59],
    [-39, -58],
    [-39, -49],
    [-39, -48],
    [-24, -48],
    [-24, -62],
    [-32, -62],
    [-33, -62],
    [-36, -62],
    [-37, -62],
    [-38, -62]
];

const leftwalls = [
    [-34, -53],
    [-34, -52],
    [-37, -51]
];

const rightwalls = [
    
];

const topwalls = [
    [-34, -60],
    [-30, -60],
    [-38, -51]
];

const bottomwalls = [
];

// Déclaration des maps divers
const divers = {
    zaap: [
        [-32, -58]
    ],
    taverne: [
        [-32, -51],
        [-27, -56],
        [-26, -58],
        [-32, -60]
    ],
    banque: [
        [-29, -58]
    ],
    arene: [
        [-27, -60]
    ]
};

// Déclaration des maps ateliers
const ateliers = {
    abijoutier: [
        [-33, -59]
    ],
    acordonnier: [
        [-30, -57]
    ],
    atailleur: [
        [-31, -55]
    ],
    aforgeron: [
        [-26, -55]
    ],
    asculpteur: [
        [-30, -59]
    ],
    aalchimiste: [
        [-32, -55]
    ],
    abricoleur: [
        [-27, -59]
    ],
    aboucher: [
        [-32, -50]
    ],
    aboulanger: [
        [-27, -50]
    ],
    apoissonnier: [
        [-35, -54]
    ],
    amineur: [
        [-28, -57]
    ]
};

// Déclaration des maps hdv
const hdv = {
    hbijoutier: [
        [-33, -60]
    ],
    hcordonnier: [
        [-29, -57]
    ],
    htailleur: [
        [-30, -56]
    ],
    hforgeron: [
        [-28, -55]
    ],
    hsculpteur: [
        [-29, -60]
    ],
    halchimiste: [
        [-33, -55]
    ],
    hboucher: [
        [-30, -50]
    ],
    hboulanger: [
        [-26, -52]
    ],
    hpoissonnier: [
        [-35, -55]
    ],
    hmineur: [
        [-28, -58]
    ],
    hpaysan: [
        [-29, -54]
    ],
    hrunes: [
        [-38, -55]
    ],
    hanimaux: [
        [-36, -55]
    ],
    hdocuments: [
        [-36, -56]
    ],
    hressources: [
        [-32, -57]
    ]
};

const houses = [[-35, -60], [-34, -60], [-33, -60], [-31, -61], [-30, -61], [-30, -60], [-29, -61], [-28, -61], [-28, -60], [-27, -58], [-27, -59], [-28, -59], [-30, -59], [-30, -58], [-31, -59], [-33, -59], [-34, -59], [-35, -58], [-35, -59], [-37, -56], [-37, -57], [-36, -57], [-36, -56], [-31, -57], [-30, -57], [-30, -56], [-28, -56], [-27, -56], [-26, -57], [-26, -56], [-25, -56], [-26, -55], [-26, -54], [-27, -54], [-27, -55], [-28, -55], [-28, -54], [-29, -54], [-30, -55], [-31, -55], [-31, -54], [-36, -54], [-36, -55], [-37, -55], [-38, -55], [-37, -53], [-35, -53], [-34, -53], [-34, -52], [-33, -52], [-33, -53], [-32, -53], [-32, -52], [-31, -52], [-31, -53], [-30, -52], [-29, -52], [-29, -53], [-28, -53], [-28, -52], [-27, -52], [-27, -53], [-26, -53], [-26, -52], [-26, -51], [-26, -50], [-27, -50], [-27, -51], [-28, -51], [-29, -50], [-30, -51], [-31, -51], [-31, -50], [-32, -50], [-32, -51], [-34, -51], [-37, -51], [-28, -49], [-26, -49]];
    
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
    
    // Vérifier si c'est une cellule walls
    if (leftwalls.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('leftwalls'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule walls
    if (rightwalls.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('rightwalls'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule walls
    if (topwalls.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('topwalls'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule walls
    if (bottomwalls.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('bottomwalls'); // Appliquer la classe spécifique
    }

    // Vérifier si c'est une cellule top-left
    if (topleftcells.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('white-top-left'); // Appliquer la classe spécifique
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

    if (houses.some(house => house[0] === x && house[1] === y)) {
        cell.classList.add('green'); // Appliquer la couleur verte pour les maisons
    }
        
    // Vérifier si la cellule correspond à un mur ou à une ligne/colonne spéciale
    if (walls.some(wall => wall[0] === x && wall[1] === y)) {
        cell.classList.add('walls'); // Appliquer la classe "black" si c'est un mur
    }
                
    // Ajouter les coordonnées (sauf si c'est une case noire ou une case topright)
    if (!cell.classList.contains('walls') && !cell.classList.contains('white-top-right') 
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

// Bouton pour retirer les classes 'ateliers'
const abutton = document.getElementById('ateliers-icones');
let isVisibleAteliers = true; // État pour savoir si les icônes doivent être affichées ou masquées

abutton.addEventListener('click', () => {
    // Parcourir chaque catégorie dans divers
    Object.keys(ateliers).forEach(category => {
        // Parcourir les coordonnées de la catégorie actuelle
        ateliers[category].forEach(coord => {
            const x = coord[0];
            const y = coord[1];

            // Sélectionner la cellule correspondante
            const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

            // Vérifier si la cellule existe
            if (cell) {
                // Basculer l'état : ajouter ou retirer la classe de la catégorie
                if (isVisibleAteliers) {
                    cell.classList.add(category); // Ajouter la classe
                } else {
                    cell.classList.remove(category); // Retirer la classe
                }
            }
        });
    });

    // Basculer l'état
    isVisibleAteliers = !isVisibleAteliers;

});

// Bouton pour retirer les classes 'hdv'
const hbutton = document.getElementById('hdv-icones');
let isVisibleHdv = true; // État pour savoir si les icônes doivent être affichées ou masquées

hbutton.addEventListener('click', () => {
    // Parcourir chaque catégorie dans divers
    Object.keys(hdv).forEach(category => {
        // Parcourir les coordonnées de la catégorie actuelle
        hdv[category].forEach(coord => {
            const x = coord[0];
            const y = coord[1];

            // Sélectionner la cellule correspondante
            const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);

            // Vérifier si la cellule existe
            if (cell) {
                // Basculer l'état : ajouter ou retirer la classe de la catégorie
                if (isVisibleHdv) {
                    cell.classList.add(category); // Ajouter la classe
                } else {
                    cell.classList.remove(category); // Retirer la classe
                }
            }
        });
    });

    // Basculer l'état
    isVisibleHdv = !isVisibleHdv;

});