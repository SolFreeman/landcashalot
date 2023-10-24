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
