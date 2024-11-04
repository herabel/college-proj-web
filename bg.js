/* 
初めに言があった。言は神と共にあった。言は神であった。 2この言は、初めに神と共にあった。
3万物は言によって成った。成ったもので、言によらずに成ったものは何一つなかった。
4言の内に命があった。命は人間を照らす光であった。 5光は暗闇の中で輝いている。暗闇は光を理解し
Это начало Евангелия от Иоанна в Новом Завете библии на японском
*/
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
