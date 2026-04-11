/**
 * ORIZZONTE SUD - CORE JAVASCRIPT
 * Versione: 2.2 (Final Stress-Test Passed)
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. GESTIONE MENU MOBILE E TENDINE
    // ==========================================
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (menuBtn && navMenu) {
        // Apri/Chiudi menu principale su mobile
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Gestione corretta delle tendine su mobile
        dropdowns.forEach(dropdown => {
            const toggleLink = dropdown.querySelector('a:first-child');
            toggleLink.addEventListener('click', function(e) {
                if (this.getAttribute('href') === '#') {
                    e.preventDefault(); 
                }
                if (window.innerWidth <= 1024) {
                    dropdown.classList.toggle('active');
                }
            });
        });

        // FIX: Chiudi il menu mobile se si clicca su un link semplice (es. HOME o ancore interne)
        const simpleLinks = navMenu.querySelectorAll('a:not(.dropdown > a)');
        simpleLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    navMenu.classList.remove('active');
                    // Chiude anche eventuali tendine rimaste aperte
                    dropdowns.forEach(d => d.classList.remove('active'));
                }
            });
        });
    }

    // ==========================================
    // 2. GESTIONE CAROSELLO DINAMICO
    // ==========================================
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].style.opacity = '0';
            if(dots[currentSlide]) dots[currentSlide].style.backgroundColor = 'rgba(255,255,255,0.7)';
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides[currentSlide].style.opacity = '1';
            if(dots[currentSlide]) dots[currentSlide].style.backgroundColor = '#98002E';
        }, 4000);
    }

    // ==========================================
    // 3. TRACCIAMENTO PROVENIENZA FORM
    // ==========================================
    const sourceInput = document.getElementById('form-source');
    if (sourceInput) {
        sourceInput.value = document.referrer || "Accesso Diretto";
    }

    // ==========================================
    // 4. INIEZIONE ICONE SOCIAL NEL FOOTER
    // ==========================================
    const firstFooterColumn = document.querySelector('footer > div > div:first-child');
    if (firstFooterColumn) {
        const socialHTML = `
        <div style="display: flex; gap: 20px; margin-top: 25px;">
            <a href="https://www.facebook.com/profile.php?id=100063918580729" target="_blank" aria-label="Seguici su Facebook" style="color: #00205B; font-size: 1.8rem; transition: color 0.3s;" onmouseover="this.style.color='#98002E'" onmouseout="this.style.color='#00205B'"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/orizzontesud/" target="_blank" aria-label="Seguici su Instagram" style="color: #00205B; font-size: 1.8rem; transition: color 0.3s;" onmouseover="this.style.color='#98002E'" onmouseout="this.style.color='#00205B'"><i class="fab fa-instagram"></i></a>
        </div>`;
        firstFooterColumn.insertAdjacentHTML('beforeend', socialHTML);
    }

    // ==========================================
    // 5. INIEZIONE MODALE "GARANZIA ORIZZONTE"
    // ==========================================
    const modalHTML = `
    <dialog id="methodModal" style="padding: 0; border: none; border-radius: 15px; max-width: 600px; width: 90%; box-shadow: 0 20px 50px rgba(0,0,0,0.3); background: transparent;">
        <div style="background: white; padding: 40px; border-radius: 15px; position: relative; text-align: center;">
            <button onclick="document.getElementById('methodModal').close()" style="position: absolute; top: 15px; right: 20px; font-size: 2rem; cursor: pointer; color: #ccc; background: none; border: none; line-height: 1;">&times;</button>
            <h2 style="color: #00205B; margin-bottom: 15px; font-family: 'Montserrat', sans-serif;">La Garanzia Orizzonte Sud</h2>
            <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">Dal 1983 non vendiamo macchinari a scatola chiusa. Il nostro metodo prevede:</p>
            <ul style="list-style: none; padding: 0; margin-bottom: 30px; color: #444; text-align: left; display: inline-block;">
                <li style="margin-bottom: 15px;"><i class="fas fa-check-circle" style="color: #98002E; margin-right: 10px; font-size: 1.2rem;"></i> Analisi gratuita del tuo ambiente.</li>
                <li style="margin-bottom: 15px;"><i class="fas fa-check-circle" style="color: #98002E; margin-right: 10px; font-size: 1.2rem;"></i> Dimostrazione pratica sul campo.</li>
                <li style="margin-bottom: 15px;"><i class="fas fa-check-circle" style="color: #98002E; margin-right: 10px; font-size: 1.2rem;"></i> Assistenza tecnica continuativa.</li>
            </ul>
            <br>
            <a href="contatti.html" style="text-decoration: none; display: inline-block; padding: 15px 30px; border-radius: 5px; font-weight: bold; background-color: #98002E; color: white; transition: background 0.3s;">Richiedi Consulenza</a>
        </div>
    </dialog>
    <style>
        dialog::backdrop { background: rgba(0, 32, 91, 0.8); backdrop-filter: blur(5px); }
    </style>`;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const methodModal = document.getElementById('methodModal');
    methodModal.addEventListener('click', (e) => {
        const dialogDimensions = methodModal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            methodModal.close();
        }
    });

    // ==========================================
    // 6. INVIO FORM IN BACKGROUND (AJAX)
    // ==========================================
    const forms = document.querySelectorAll('form[action^="https://formsubmit.co"]');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = "Invio in corso...";
            btn.disabled = true;
            btn.style.opacity = "0.7";

            const actionUrl = form.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
            const formData = new FormData(form);

            fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    form.reset();
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.opacity = "1";

                    const successModal = document.createElement('div');
                    successModal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,32,91,0.9); z-index:10001; display:flex; justify-content:center; align-items:center; backdrop-filter: blur(5px); opacity: 0; transition: opacity 0.3s ease;";
                    
                    successModal.innerHTML = `
                        <div style="background:white; padding:40px; border-radius:15px; max-width:500px; width:90%; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.3); transform: translateY(20px); transition: transform 0.3s ease;">
                            <div style="width: 80px; height: 80px; background-color: #2ecc71; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);">
                                <i class="fas fa-check" style="color: white; font-size: 2.5rem;"></i>
                            </div>
                            <h2 style="color:#00205B; margin-bottom:15px; font-family: 'Montserrat', sans-serif; font-size: 1.8rem;">Richiesta Inviata!</h2>
                            <p style="color:#555; line-height:1.6; margin-bottom:25px; font-size: 1.1rem;">Grazie per averci contattato. Un nostro esperto analizzerà la tua richiesta e ti risponderà al più presto.</p>
                            <button id="closeSuccessModal" style="background-color: #98002E; color: white; padding: 15px 35px; border: none; border-radius: 5px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: background 0.3s; box-shadow: 0 4px 10px rgba(152,0,46,0.2);">Chiudi e continua</button>
                        </div>
                    `;
                    
                    document.body.appendChild(successModal);

                    setTimeout(() => {
                        successModal.style.opacity = "1";
                        successModal.querySelector('div').style.transform = "translateY(0)";
                    }, 10);

                    document.getElementById('closeSuccessModal').addEventListener('click', () => {
                        successModal.style.opacity = "0";
                        setTimeout(() => successModal.remove(), 300);
                    });

                } else {
                    alert("Si è verificato un errore con il server. Riprova più tardi.");
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

}); 

function toggleMethodModal() {
    const modal = document.getElementById('methodModal');
    if (modal) {
        modal.showModal(); 
    }
}