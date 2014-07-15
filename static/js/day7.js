//get a reference to the node
var h1 = document.getElementById("myHdr");

//log the node
//console.log(h1);

//hasAttribute function
//var hasClass = h1.hasAttribute("class");
//console.log("The h1 tag has a class attribute: ", hasClass);

//setAttribute function
//h1.setAttribute("rel", "something");

//removeAttribute function
//h1.removeAttribute("rel");

//create an element
//var a = document.createElement("a");
//a.textContent = "I'm a link to google";
//a.setAttribute("href", "http://www.google.com");
//a.href = "http://www.yahoo.com";
//a.style.backgroundColor = "red";
//a.setAttribute("style", "background-color: red; color: white;");
//document.body.appendChild(a);
//
////setTimeout
//setTimeout(function () {
//    "use strict";
//    document.body.removeChild(a);
//}, 3000);

//query selector
//var a = document.querySelector("ul li a");
//console.log(a);

//query selector all
//var anchors = document.querySelectorAll("ul li a");
//
////NodeList, and .item(idx)
//console.log(anchors);
//console.log(anchors.item(2));
//console.log(anchors.item(10));
//
////loop the NodeList
//for (var i = 0; i < anchors.length; i++) {
//    var anchor = anchors.item(i);
//    console.log(anchor.href);
//}

//shows that we can move things around in the dom
//h1.appendChild(anchors.item(1));

//button event handler
//var button = document.getElementById("alert");
//button.addEventListener("click", function () {
//    alert(this.getAttribute("rel"));
//});