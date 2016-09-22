window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

    if (key == 120) {
       	chrome.runtime.sendMessage({greeting: "refreshcss"});
   	}
}