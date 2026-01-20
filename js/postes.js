/* ===================================== */
/* GESTION DES POSTES – CONFIG + VISU     */
/* ===================================== */

/* ========================= */
/* PARTIE CONFIGURATION      */
/* ========================= */

const btnValider = document.getElementById("validerPostes");

if (btnValider) {
    btnValider.addEventListener("click", () => {
        const nbPostes = document.getElementById("nbPostes").value;

        // Stockage du nombre de postes
        localStorage.setItem("nbPostes", nbPostes);

        alert("Nombre de postes enregistré : " + nbPostes);
    });
}

/* ========================= */
/* PARTIE VISUALISATION      */
/* ========================= */

const container = document.getElementById("postes-container");

if (container) {
    // Récupération du nombre de postes
    const nbPostes = localStorage.getItem("nbPostes") || 1;

    for (let i = 1; i <= nbPostes; i++) {

        // Génération HTML d'un poste
        container.insertAdjacentHTML("beforeend", `
            <article class="poste">
                <h2>Poste ${i}</h2>

                <div class="etape-container">
                    <span class="label">Étape en cours :</span>
                    <button class="etape-btn prev">◀</button>
                    <span class="etape-numero">0</span>
                    <button class="etape-btn next">▶</button>
                </div>

                <p><strong>Temps étape :</strong> 120 s</p>
                <p><strong>Stock utilisé :</strong> 45 %</p>

                <a class="button" href="../poste/index.html">
                    Voir le poste
                </a>
            </article>
        `);
    }

    /* ========================= */
    /* GESTION DES ÉTAPES        */
    /* ========================= */

    const postes = document.querySelectorAll(".poste");

    postes.forEach(poste => {
        const etapeSpan = poste.querySelector(".etape-numero");
        const prevBtn = poste.querySelector(".prev");
        const nextBtn = poste.querySelector(".next");

        let etape = parseInt(etapeSpan.textContent);

        prevBtn.addEventListener("click", () => {
            if (etape > 0) {
                etape--;
                etapeSpan.textContent = etape;
            }
        });

        nextBtn.addEventListener("click", () => {
            etape++;
            etapeSpan.textContent = etape;
        });
    });
}
