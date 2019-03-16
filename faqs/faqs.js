var $ = function(id) {
    return document.getElementById(id);
}

window.onload=function() {
    var h2node;
    var faqs = $("faqs");
    var h2elements = faqs.getElementsByTagName("h2");

    for(var i = 0; i < h2elements.length; i++) {
        h2node=h2elements[i];

        h2node.onclick=function() {
            var h2 = this;

            if (h2.getAttribute("class")==="plus") { h2.setAttribute("class","minus");
            } else {
                h2.setAttribute("class", "plus");   
            }
            if(h2.nextElementSibling.getAttribute ("class") === "closed") {
                h2.nextElementSibling.setAttribute("class", "open");
            }   else { h2.nextElementSibling.setAttribute("class", "closed");
            }3
        }
    }
}