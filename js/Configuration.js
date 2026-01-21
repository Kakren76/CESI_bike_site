function genererCSVPoste1() {
    // En-têtes du CSV
    let csvContent = "Nom de la pièce;Quantité initiale\n";

    // Récupération des lignes du tableau
    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
        const cols = row.querySelectorAll("td");
        const nomPiece = cols[0].innerText;
        const quantite = cols[1].innerText;

        csvContent += `${nomPiece};${quantite}\n`;
    });

    // Création du fichier CSV
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Téléchargement automatique
    const a = document.createElement("a");
    a.href = url;
    a.download = "Poste1_stock.csv";
    a.click();

    URL.revokeObjectURL(url);
}
