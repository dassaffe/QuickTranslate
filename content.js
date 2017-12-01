chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(request, sender, sendResponse) {

    // determine selection position
    var selection = window.getSelection();
    oRange = selection.getRangeAt(0);
    oRect = oRange.getBoundingClientRect();
    showTranslation(oRect, request)
    // alert("Trottel, das Wort steht für " + request.translation)
}

function showTranslation(rect, request) {

    var div = document.createElement('div');   	// make box
    div.classList.add("tooltip");
    div.style.position = 'absolute';            // fixed positioning = easy mode
    div.style.top = rect.top-50 + 'px';       	// set coordinates
    div.style.opacity = 0;
    div.style.maxWidth = "300px";

    var arrow = document.createElement('div');
    var inner = document.createElement('div');

    arrow.classList.add("arrow");
    inner.classList.add("inner");

    div.appendChild(arrow)
    div.appendChild(inner)

    div.style.left = rect.left-(rect.width / 2) + 'px';

    // text setup
    var text = document.createTextNode("(Trottel, das Wort steht für) "+request.translation);
    var requiredLength = text.width;

    div.style.width = requiredLength+ 'px';
    document.body.appendChild(div);            // finally append

    inner.appendChild(text);

    div.style.opacity = 1;
}