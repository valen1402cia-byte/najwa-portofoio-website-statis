// Fungsi untuk scroll ke tengah antara hero dan about
function scrollToHeroandAbout() {
    const hero = document.querySelector(".hero");
    const about = document.getElementById("about");

    const heroBottom = hero.offsetTop + hero.offsetHeight;
    const aboutTop = about.offsetTop;
    const middlePoint = (heroBottom + aboutTop) / 2;

    window.scrollTo({
        top: middlePoint,
        behavior: "smooth"
    });
}

// Fungsi untuk menampilkan alert
function showAlert() {
    alert("Silakan hubungi saya melalui email atau media sosial!");
}

// Smooth scroll untuk semua link anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efek scroll untuk navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
    }
});

// Animasi untuk skill cards saat muncul di viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Tambahkan animasi untuk project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Tambahkan animasi untuk skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Animasi saat halaman dimuat
window.addEventListener('load', function() {
    document.querySelector('.hero-content').style.animation = 'heroFade 1.2s ease forwards';
});

// Tambahkan efek klik pada semua tombol
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});