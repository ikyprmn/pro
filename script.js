document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah form untuk refresh halaman

            // Ambil data dari form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Di sini Anda bisa menambahkan logika untuk mengirim data,
            // misalnya ke backend atau menampilkan pesan sukses.
            console.log(`Pesan baru dari ${name} (${email}): ${message}`);
            
            alert('Pesan Anda telah terkirim! Terima kasih.');

            // Reset form setelah dikirim
            contactForm.reset();
        });
    }

    // Smooth scroll untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});