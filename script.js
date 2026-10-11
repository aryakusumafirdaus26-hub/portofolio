// 1. Inisialisasi Efek Ketik Dinamis (Typed.js)
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'UI/UX Enthusiast', 'Tech Explorer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});

// 2. Toggle Menu Navigasi untuk Tampilan Mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 3. Menangani Pengiriman Formulir Kontak
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                alert('Terima kasih! Pesan Anda telah berhasil dikirim ke Gmail.');
                contactForm.reset();
            } else {
                alert('Oops! Terjadi kesalahan saat mengirim pesan.');
            }
        } catch (error) {
            alert('Terjadi kesalahan jaringan.');
        }
    });
}