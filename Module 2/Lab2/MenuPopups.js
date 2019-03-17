var popuptext = "";
var popdiv = document.createElement("div");
popdiv.id = "menumessage";
popdiv.textContent = "default text for testing";
popdiv.style.color = "orange";
popdiv.style.border = "1px solid white";
popdiv.style.borderRadius = "10px";
popdiv.style.backgroundColor = "black";
popdiv.style.position = "absolute";
popdiv.style.padding = "10px";
popdiv.style.display = "none";
// more JS here to style the div
document.body.appendChild(popdiv);

var tabs = document.querySelectorAll("#topNav a");

// var topnav = document.getElementById("topNav");
// var tabs = topnav.getElementsByTagName("a");

for (var index = 0; index < tabs.length; index++) {
    var tab = tabs[index];
    tab.onmouseover=function() {ShowPopup(this)}
    tab.onmouseleave=function() {HidePopup()}
}

function ShowPopup(tab) {
    var popdiv = document.getElementById("menumessage");
    popdiv.style.left = tab.offsetLeft + "px";
    popdiv.style.top = (tab.offsetTop + 30) + "px";
    popdiv.style.transformOrigin = "0 0";
    popdiv.style.transform = "rotate(15deg)";
    //    popdiv.style.left="30px";
    //    popdiv.style.top="100px";

    switch(tab.textContent) {
        case "Home":
            popuptext = "Return To the Homepage.";
            break;
        case "Toys":
            popuptext = "See our latest toys, including boats, planes and cars!";
            break;
        case "Sports":
            popuptext = "See our new line of sporting goods!";
            break;
        default:
            popuptext="";
            break;
    }   
    if(popuptext != "")
    {
        popdiv.innerHTML = popuptext;
        popdiv.style.display = "block";
    }
}

function HidePopup() {
    var popdiv = document.getElementById("menumessage");
    popdiv.style.display = "none";
}