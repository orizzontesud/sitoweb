document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GESTIONE DELLA PAGINA DI PROVENIENZA PER IL FORM CONTATTI
    const sourceInput = document.getElementById('form-source');
    if(sourceInput) {
        sourceInput.value = document.referrer || "Accesso Diretto";
    }

    // 2. FIX GLOBALE PER IL SALTO DEL MENU SU PC
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault(); // Blocca il salto in cima alla pagina
            }
        });
    });

    // 3. INIEZIONE DEL MODALE "GARANZIA ORIZZONTE"
    const modalHTML = `
    <div id="methodModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,32,91,0.8); z-index:10000; justify-content:center; align-items:center; backdrop-filter: blur(5px);">
        <div style="background:white; padding:40px; border-radius:15px; max-width:600px; width:90%; position:relative; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.3);">
            <span onclick="toggleMethodModal()" style="position:absolute; top:15px; right:20px; font-size:2rem; cursor:pointer; color:#ccc;">&times;</span>
            <h2 style="color:#00205B; margin-bottom:15px; font-family: 'Montserrat', sans-serif;">La Garanzia Orizzonte Sud</h2>
            <p style="color:#555; line-height:1.6; margin-bottom:25px;">Dal 1983 non vendiamo macchinari a scatola chiusa. Il nostro metodo prevede:</p>
            <ul style="list-style:none; padding:0; margin-bottom:30px; color:#444; text-align: left; display: inline-block;">
                <li style="margin-bottom:15px;"><i class="fas fa-check-circle" style="color:#98002E; margin-right:10px; font-size: 1.2rem;"></i> Analisi gratuita del tuo ambiente.</li>
                <li style="margin-bottom:15px;"><i class="fas fa-check-circle" style="color:#98002E; margin-right:10px; font-size: 1.2rem;"></i> Dimostrazione pratica sul campo.</li>
                <li style="margin-bottom:15px;"><i class="fas fa-check-circle" style="color:#98002E; margin-right:10px; font-size: 1.2rem;"></i> Assistenza tecnica continuativa.</li>
            </ul>
            <br>
            <a href="contatti.html" class="btn btn-ruby" style="text-decoration:none; display:inline-block; padding: 15px 30px; border-radius: 50px; font-weight: bold; background-color: #98002E; color: white;">Richiedi Consulenza</a>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

// 4. INIEZIONE ICONE SOCIAL NEL FOOTER
    const footerContacts = document.querySelector('footer ul:last-of-type');
    if(footerContacts) {
        const socialHTML = `
        <li style="display: flex; gap: 15px; margin-top: 15px;">
            <a href="https://www.facebook.com/profile.php?id=100063918580729" target="_blank" aria-label="Facebook" style="color: #00205B; font-size: 1.5rem; transition: transform 0.3s;"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/orizzontesud/" target="_blank" aria-label="Instagram" style="color: #00205B; font-size: 1.5rem; transition: transform 0.3s;"><i class="fab fa-instagram"></i></a>
        
        </li>`;
        footerContacts.insertAdjacentHTML('beforeend', socialHTML);
    }
});

// Funzione globale per aprire/chiudere il modale
function toggleMethodModal() {
    const modal = document.getElementById('methodModal');
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "flex";
    } else {
        modal.style.display = "none";
    }
}