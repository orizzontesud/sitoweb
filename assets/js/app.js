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
// 5. INVIO FORM IN BACKGROUND (AJAX) CON POP-UP DI SUCCESSO
    const forms = document.querySelectorAll('form[action^="https://formsubmit.co"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Blocca il reindirizzamento alla pagina di FormSubmit

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            // Feedback visivo per l'utente durante l'invio
            btn.innerText = "Invio in corso...";
            btn.disabled = true;
            btn.style.opacity = "0.7";

            // Converte l'URL standard in URL AJAX per FormSubmit
            const actionUrl = form.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
            const formData = new FormData(form);

            fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    // Svuota il form
                    form.reset();
                    
                    // Ripristina il bottone
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.opacity = "1";

                    // CREAZIONE DINAMICA DEL POP-UP DI SUCCESSO
                    const successModal = document.createElement('div');
                    successModal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,32,91,0.9); z-index:10001; display:flex; justify-content:center; align-items:center; backdrop-filter: blur(5px); opacity: 0; transition: opacity 0.3s ease;";
                    
                    successModal.innerHTML = `
                        <div style="background:white; padding:40px; border-radius:15px; max-width:500px; width:90%; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.3); transform: translateY(20px); transition: transform 0.3s ease;">
                            <div style="width: 80px; height: 80px; background-color: #2ecc71; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);">
                                <i class="fas fa-check" style="color: white; font-size: 2.5rem;"></i>
                            </div>
                            <h2 style="color:#00205B; margin-bottom:15px; font-family: 'Montserrat', sans-serif; font-size: 1.8rem;">Richiesta Inviata!</h2>
                            <p style="color:#555; line-height:1.6; margin-bottom:25px; font-size: 1.1rem;">Grazie per averci contattato. Un nostro esperto analizzerà la tua richiesta e ti risponderà al più presto.</p>
                            <button id="closeSuccessModal" style="background-color: #98002E; color: white; padding: 15px 35px; border: none; border-radius: 50px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: background 0.3s; box-shadow: 0 4px 10px rgba(152,0,46,0.2);">Torna alla Home</button>
                        </div>
                    `;
                    
                    document.body.appendChild(successModal);

                    // Animazione di entrata
                    setTimeout(() => {
                        successModal.style.opacity = "1";
                        successModal.querySelector('div').style.transform = "translateY(0)";
                    }, 10);

                    // Gestione del click sul bottone "Torna alla Home"
                    document.getElementById('closeSuccessModal').addEventListener('click', () => {
                        window.location.href = "index.html";
                    });

                    // Reindirizzamento automatico dopo 4.5 secondi (se l'utente non clicca nulla)
                    setTimeout(() => {
                        window.location.href = "index.html";
                    }, 4500);

                } else {
                    alert("Si è verificato un errore con il server di posta. Riprova più tardi.");
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.opacity = "1";
                }
            })
            .catch(error => {
                console.error('Errore:', error);
                alert("Errore di connessione. Verifica la tua rete e riprova.");
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.opacity = "1";
            });
        });
    });
