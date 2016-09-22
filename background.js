function runAction() {
    chrome.tabs.executeScript({
        file: "action.js"
    });
}

chrome.browserAction.onClicked.addListener(function (tab) {
    runAction();
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == "refreshcss") {
        runAction();
    }
});