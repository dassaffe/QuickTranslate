chrome.contextMenus.create({
    "title": "Übersetzen",
    "contexts": ["selection"],
    "onclick" : clickHandler
});

function clickHandler(e) {

     var translateUrl = "https://glosbe.com/gapi/translate?from=eng&dest=deu&format=json&phrase=" + encodeURI(e.selectionText.toLowerCase()) + "&pretty=true";
    $.getJSON(translateUrl, callback);
}

function callback(data) {
    var translation = data.tuc[0].phrase.text;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {translation: translation}, function(response) {});
    });
}