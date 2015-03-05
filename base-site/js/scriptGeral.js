/* GOOGLE FONTS PT Sans */
(function() {
    var link_element = document.createElement("link"),
        s = document.getElementsByTagName("script")[0];
    if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
        link_element.href = "http:";
    }
    link_element.href += "//fonts.googleapis.com/css?family=PT+Sans:400italic,400,700italic,700";
    link_element.rel = "stylesheet";
    link_element.type = "text/css";
    s.parentNode.insertBefore(link_element, s);
})();

/* GOOGLE FONTS Open Sans */
(function() {
    var link_element = document.createElement("link"),
        s = document.getElementsByTagName("script")[0];
    if (window.location.protocol !== "http:" && window.location.protocol !== "https:") {
        link_element.href = "http:";
    }
    link_element.href += "//fonts.googleapis.com/css?family=Open+Sans:300italic,300,400italic,400,600italic,600,700italic,700,800italic,800";
    link_element.rel = "stylesheet";
    link_element.type = "text/css";
    s.parentNode.insertBefore(link_element, s);
})();

$(function () {

});
