title = document.querySelector("#title");
window.addEventListener("load", function (e) {
    let index = 0
    Frase = "Password Generator";
    let titleContent = "";
    function animateTitle() {
        titleContent = "";
        index = 0;
        for (let i = 0; i < Frase.length; i += 1) {
            setTimeout(() => {
                titleContent += Frase[index];
                title.textContent = titleContent;
                index += 1;
            }, i * 120);
        }
    }
    animateTitle();
    setInterval(() => {
        setTimeout(animateTitle, 800);
    }, 110 * Frase.length + 800);
});