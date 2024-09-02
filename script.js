document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });

        link.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
        });
    });
});
