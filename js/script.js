document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const mainElement = document.querySelector('main');
        const offset = 60;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = elementPosition - offset;
        mainElement.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
