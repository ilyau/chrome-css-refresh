function reloadCSS() {
    var queryString = '?reload=' + new Date().getTime();
    var links = document.getElementsByTagName("link"); 
    for (var i = 0; i < links.length;i++) { 
        var link = links[i]; 
        if (link.rel === "stylesheet") {
            link.href = link.href.replace(/\?.*|$/, queryString);
        }
    }
}

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: reloadCSS.toString() + ';reloadCSS();'
    });
});