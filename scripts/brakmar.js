// Limites des coordonnées
const xMin = -32, xMax = -18;
const yMin = 29, yMax = 42;
	
// Liste des coordonnées des Zaapis (à adapter selon les vrais Zaapis de Bonta)
const zaapis = [
    
];

const casparticulier = [
    
];

const leftcells = [
    [-19, 36],
    [-19, 35],
    [-19, 34],
    [-19, 37],
    [-19, 38],
    [-19, 39],
    [-19, 33],
    [-20, 31]
   
];

const rightcells = [
    [-31, 31],
    [-31, 32],
    [-32, 35],
    [-32, 36],
    [-32, 37],
    [-32, 38]
];

const topleftcells = [
    [-21, 41],
    [-20, 40]
];

const toprightcells = [
    [-27, 41],
    [-30, 33],
    [-29, 40],
    [-31, 39]
];

const topcells = [
    [-26, 42],
    [-25, 42],
    [-24, 42],
    [-23, 42],
    [-22, 42],
    [-28, 41],
    [-30, 40]
];

const bottomrightcells = [
    [-30, 30],
    [-30, 34]
];

const bottomleftcells = [
    [-20, 32],
    [-28, 30]
];

const bottomcells = [
    [-27, 30],
    [-26, 30],
    [-25, 30],
    [-24, 30],
    [-23, 30],
    [-22, 30],
    [-21, 30],
    [-34, 30],
    [-35, 30],
    [-37, 30],
    [-31, 34],
    [-29, 29]
];

const bottomleftrightcells = [
    
];

const hide = [
    [-18, 29],
    [-18, 30],
    [-18, 31],
    [-18, 32],
    [-18, 33],
    [-18, 34],
    [-18, 35],
    [-18, 36],
    [-18, 37],
    [-18, 38],
    [-18, 39],
    [-18, 40],
    [-18, 41],
    [-18, 42],
    [-19, 29],
    [-19, 30],
    [-19, 31],
    [-19, 32],
    [-19, 40],
    [-19, 41],
    [-19, 42],
    [-20, 29],
    [-20, 30],
    [-20, 41],
    [-20, 42],
    [-21, 29],
    [-21, 42],
    [-22, 29],
    [-23, 29],
    [-24, 29],
    [-25, 29],
    [-26, 29],
    [-27, 29],
    [-27, 42],
    [-28, 29],
    [-28, 42],
    [-29, 41],
    [-29, 42],
    [-30, 29],
    [-30, 41],
    [-30, 42],
    [-31, 29],
    [-31, 30],
    [-31, 33],
    [-31, 41],
    [-31, 42],
    [-32, 29],
    [-32, 30],
    [-32, 31],
    [-32, 32],
    [-32, 33],
    [-32, 34],
    [-32, 40],
    [-32, 41],
    [-32, 42],
    [-32, 39],
    [-31, 40]
];

const leftwalls = [
    [-25, 31],
    [-21, 32],
    [-22, 33]
];

const rightwalls = [
    [-29, 32]
];

const topwalls = [
    [-24, 35],
    [-23, 35],
    [-29, 36]
];

const bottomwalls = [
];

// Déclaration des maps divers
const divers = {
    zaap: [
        [-25, 40]
    ],
    taverne: [
        [-22, 31],
        [-28, 40]
    ],
    banque: [
        [-23, 40]
    ]
};

// Déclaration des maps ateliers
const ateliers = {
    abijoutier: [
        [-27, 39]
    ],
    acordonnier: [
        [-23, 36]
    ],
    atailleur: [
        [-24, 35]
    ],
    aforgeron: [
        [-21, 34]
    ],
    asculpteur: [
        [-21, 39]
    ],
    aalchimiste: [
        [-26, 37]
    ],
    abricoleur: [
        [-28, 35]
    ],
    aboucher: [
        [-29, 32]
    ],
    aboulanger: [
        [-22, 32]
    ],
    apoissonnier: [
        [-24, 40]
    ],
    amineur: [
        [-20, 33]
    ]
};

// Déclaration des maps hdv
const hdv = {
    hbijoutier: [
        [-26, 38]
    ],
    hcordonnier: [
        [-24, 36]
    ],
    htailleur: [
        [-23, 35]
    ],
    hforgeron: [
        [-21, 35]
    ],
    hsculpteur: [
        [-22, 40]
    ],
    halchimiste: [
        [-26, 36]
    ],
    hboucher: [
        [-27, 32]
    ],
    hboulanger: [
        [-24, 31]
    ],
    hpoissonnier: [
        [-27, 37]
    ],
    hmineur: [
        [-20, 34]
    ],
    hpaysan: [
        [-25, 31]
    ],
    hrunes: [
        [-29, 38]
    ],
    hanimaux: [
        [-31, 37]
    ],
    hdocuments: [
        [-31, 38]
    ],
    hressources: [
        [-25, 33]
    ]
};

const houses = [[-29, 30], [-29, 31], [-28, 31], [-27, 31], [-25, 31], [-24, 32], [-25, 32], [-28, 32], [-29, 32], [-29, 33], [-27, 33], [-25, 33], [-24, 33], [-23, 33], [-22, 33], [-20, 34], [-21, 34], [-22, 34], [-23, 34], [-24, 34], [-25, 34], [-27, 34], [-28, 35], [-25, 35], [-24, 35], [-23, 35], [-21, 35], [-20, 35], [-22, 36], [-25, 36], [-26, 36], [-28, 36], [-30, 36], [-31, 37], [-28, 37], [-27, 37], [-24, 37], [-21, 37], [-20, 38], [-21, 38], [-22, 38], [-25, 38], [-27, 38], [-28, 38], [-29, 38], [-31, 38], [-27, 39], [-26, 39], [-25, 39], [-21, 39], [-20, 39], [-21, 40], [-23, 40], [-24, 40], [-25, 40], [-26, 40], [-26, 41], [-23, 41], [-22, 41]]; 
    
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
    if (casparticulier.some(coord => coord[0] === x && coord[1] === y)) {
        cell.classList.add('cas-particulier'); // Appliquer la classe spécifique
    }

    if (houses.some(house => house[0] === x && house[1] === y)) {
        cell.classList.add('green'); // Appliquer la couleur verte pour les maisons
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