document.addEventListener('DOMContentLoaded', () => {
    const terms = document.querySelectorAll('.term');
    
    terms.forEach(term => {
        const background = term.getAttribute('data-background');
        const filter = term.getAttribute('data-filter');

        term.addEventListener('mouseenter', function() {
            document.body.style.background = background;
            document.querySelector(".editor img").style.filter = filter;
        });
    
        term.addEventListener('mouseleave', function() {
            document.body.style.background = "#333e47";
            document.querySelector(".editor img").style.filter = "none";
        });
    });
});
