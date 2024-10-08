document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = this.getAttribute('href') === '#' ? document.body : document.querySelector(this.getAttribute('href'));

            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
