function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }

    return '';
}

function attachSound(link) {
    link.onclick = function () {
        let url = chrome.runtime.getURL('bath-flush3.wav');

        let a = new Audio(url)
        a.play()
    }

}

if (getMeta('Generator') == "Drupal 8 (https://www.drupal.org)") {

    //get link in the dropdown menu
    var link1 = document.getElementsByClassName("toolbar-icon-admin-toolbar-tools-flush");
    attachSound(link1[0]);

    //get link at the top RIT added
    if (document.getElementsByClassName("toolbar-icon-system-admin-config toolbar-item")[0].innerHTML == "Flush CSS/JS") {
        var link2 = document.getElementsByClassName("toolbar-icon-system-admin-config toolbar-item");
        attachSound(link2[0]);
    }

}
