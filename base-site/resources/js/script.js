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
    $('[data-toggle="popover"]').popover({delay: { 'show': 200, 'hide': 1000 }});
    /* BASE URL VIA DEVICE PIXEL RATIO - ANDROID */
    //var baseUrl = 'file:///android_asset/www/img-js-diff/ratiores/'+getDensityDirectoryName()+'/'
    //document.write('<base href="' + baseUrl + '">');
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
	document.getElementById('content-type').innerHTML = contentType;
} 

//FUNCOES DE COMPARTILHAMENTO
/* Compartilhar Facebook */
function compFacebook() {
    var linkFacebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    montaLink(linkFacebook);
}

/* Compartilhar Twitter */
function compTwitter() {
    var linkTwitter = 'https://twitter.com/intent/tweet?original_referer=';
    montaLink(linkTwitter);
}

/* Compartilha o link */
function montaLink(linkPadrao) {
    //caminho da pagina atual
    var localAtual = window.location;

    //codifica como URLEncode o link da pagina atual
    var linkCodificadoURL = encodeURIComponent(localAtual);

    //monta o link que sera compartilhado
    var linkFinal = linkPadrao + linkCodificadoURL;

    //abre uma janela/aba com o Facebook Share
    window.open(linkFinal);

    /*Substitui a pagina atual pela de compartilhamento
    window.location.replace(linkFinal);
    */
}

function addBookmark() {
	// url do site
	var url = window.location;
	// titulo da pagina
	var title = (document.getElementsByTagName('title').value = document.title);

    /*if(window.sidebar) { 
        window.sidebar.addPanel(title, url, ''); // Firefox 2- 
	} else */
    if ($.browser.msie == true) {
		window.external.AddFavorite(url, title); // IE 7+
    }
    else {
        alert('Pressione as teclas CTRL + D para adicionar aos favoritos.'); // Chrome, Safari, Firefox 8+, Opera 15+
	}
}