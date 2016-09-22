window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

    if (key == 120) {
       	refreshCSS();
   	}
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.event == "refreshcss") {
		refreshCSS();
	}
});

function refreshCSS() {
	var queryString = '?reload=' + new Date().getTime();
	var links = document.getElementsByTagName("link"); 
	for (var i = 0; i < links.length;i++) { 
	    var link = links[i]; 
	    if (link.rel === "stylesheet") {
	        link.href = link.href.replace(/\?.*|$/, queryString);
	    }
	}
}