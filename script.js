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


function showAlert() {
    alert("Silakan hubungi saya melalui email atau media sosial!");
}
