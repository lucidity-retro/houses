function toggleTable(tableId) {
    const tableContainer = document.getElementById(tableId);
    
    // On vérifie si la table est actuellement cachée
    if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block";  // Afficher le tableau
    } else {
        tableContainer.style.display = "none";   // Cacher le tableau
    }
}