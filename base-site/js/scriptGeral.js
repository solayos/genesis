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
    
    /* BASE URL VIA DEVICE PIXEL RATIO - ANDROID */
    var baseUrl = 'file:///android_asset/www/img-js-diff/ratiores/'+getDensityDirectoryName()+'/'
    document.write('<base href="'+baseUrl+'">');
});

/* MUDA DIRETORIO DAS IMAGENS E CONTEUDO 
    *-- Baseado no Device Pixel Ratio
 */
function getDensityDirectoryName() {
    if(!window.devicePixelRatio) {
        return 'mdpi';
    }
    
    if(window.devicePixelRatio > 3) {
        return 'xxxhdpi';
    } else if(window.devicePixelRatio > 2) {
        return 'xxhdpi';
    } else if(window.devicePixelRatio > 1.5) {
        return 'xhdpi';
    } else if(window.devicePixelRatio > 1.0) {
        return 'hdpi';
    }

    return 'mdpi';
}

/* VERIFICA ORIENTACAO */
window.onload = function initialLoad(){  
	updateOrientation();
}
var contentType = 'vertical';

function updateOrientation(){
	switch(window.orientation){  
		case 0:  			
			contentType = "vertical";  
		break;  
	
		case -90:			
			contentType = "horizontal";  
		break;  
	
		case 90:
			contentType = "horizontal";  
		break;  
	
		case 180:			
			contentType = "vertical";  
		break;  
	}	
	document.getElementsByTagName('body')[0].className = contentType;	
} 