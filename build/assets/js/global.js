function addParams() {
    let urlParams = new URLSearchParams(window.location.search);
    let btagParam = urlParams.get('btag');
    let links = document.querySelectorAll("a");

    links.forEach(function (link) {
        let href = link.getAttribute("href");
        if (href.indexOf('?') === -1) {
            if (btagParam !== null) {
                link.setAttribute("href", href + "?btag=" + btagParam);
            }
        } else {
            if (btagParam !== null) {
                link.setAttribute("href", href.replace('?', '?btag=' + btagParam + '&'));
            }
        }
    });
}

addParams();

let fireContainer = document.getElementById("fire-container");
function createParticles(fireContainer, num, leftSpacing) {
    for (let i = 0; i < num; i += 1) {
        let particle = document.createElement("div");
        particle.style.left = `calc((100% - 5em) * ${i / leftSpacing})`;
        particle.setAttribute("class", "particle");
        particle.style.animationDelay = 4 * Math.random() + "s";
        fireContainer.appendChild(particle);
    }
}

if (fireContainer) {
    createParticles(fireContainer, 60, 60);
}
