var larguraJanela = $(window).width(),
    alturaJanela = $(window).innerHeight(),
    urlSite = window.location.href,
    ie = versaoIE();

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

/* EXECUTADO AO CARREGAR */
window.onload = function initialLoad(){  
	updateOrientation();
}

/* EXECUTADO AO REDIMENSIONAR JANELA */
$(window).on('resize', function(event){
	if (window.RT) clearTimeout(window.RT);
	window.RT = setTimeout(function() {
	    // code here
	}, 100);

});

/* EXECUTADO NO SCROLL DA JANELA */
$(window).scroll(function() {
    var heightScroll = $(window).scrollTop();

    //diminui tamanho do navbar
    /*if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }*/

    var scrollPage = $(window).scrollTop();
    var widthJanela = $('body').innerWidth();

    /*if (widthJanela > 1280) {
        if (scrollPage > 0) {
            $('.navbar-header').css('padding', '10px');
            $('.navbar-brand').css('padding', '0'); // logo
            $('.navbar-brand > img').css('width', '90px'); // logo
        } else {
            $('.navbar-header').css('padding', '0');
            $('.navbar-brand').css('padding', '32px 17px 23px 17px'); // logo
            $('.navbar-brand > img').css('width', 'auto'); // logo
        }
    }*/
});

/* EXECUTADO AO GIRAR DISPOSITIVO */
$(window).on('orientationchange', function (event) {
    updateOrientation();
});

/* EXECUTADO QUANDO DOCUMENTO ESTA PRONTO -- o mesmo que document.ready */
$(function () {
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    console.log('IE ' + ie);
    console.log(meuNavegador());

    $('[data-toggle="popover"]').popover({ delay: { 'show': 200, 'hide': 200} });

    /* BASE URL VIA DEVICE PIXEL RATIO - ANDROID */
    //var baseUrl = 'file:///android_asset/www/img-js-diff/ratiores/'+getDensityDirectoryName()+'/'
    //document.write('<base href="' + baseUrl + '">');
});

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

/* ADICIONA EVENTOS ATE jQuery 1.7, RECOMENDADO METODO ON */
var bind = function (el, event, fn) {
    if (el.addEventListener) {
        el.addEventListener(event, fn, false);
    } else {
        el.attachEvent('on' + event, fn);
    }
};

/* VERIFICA SE É DISPOSITIVO MÓVEL */
function isGadget() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
}

/* VERIFICA SE É ANDROID */
function isAndroid() {
    return /android/i.test(navigator.userAgent.toLowerCase());
}

/* VERIFICA NAVEGADOR -- 
    *-- STRINGS
    Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0) //IE 10
    Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko ) //IE 11
    Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0 //IE 12
*/
function meuNavegador(){
    //var deviceAgent = navigator.userAgent.toLowerCase();
    var ua = window.navigator.userAgent;
    var versao = window.navigator.appVersion;
    var navegador, nameOffset, verOffset, ix;

    var versaoCompleta = '' + parseFloat(versao);
    var versaoPrincipal = parseInt(versao, 10);

    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset=ua.indexOf("Opera"))!=-1) {
        navegador = "Opera";
        versaoCompleta = ua.substring(verOffset + 6);
        if ((verOffset = ua.indexOf("Version")) != -1)
            versaoCompleta = ua.substring(verOffset + 8);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset=ua.indexOf("Chrome"))!=-1) {
        navegador = "Chrome";
        versaoCompleta = ua.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset=ua.indexOf("Safari"))!=-1) {
        navegador = "Safari";
        versaoCompleta = ua.substring(verOffset + 7);
        if ((verOffset = ua.indexOf("Version")) != -1)
            versaoCompleta = ua.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset=ua.indexOf("Firefox"))!=-1) {
        navegador = "Firefox";
        versaoCompleta = ua.substring(verOffset + 8);
    }
    // In IE, the true version is after "MSIE" in userAgent
    else{
        navegador = "IE";
        versaoCompleta = (versaoIE()).toString();
    }

    // trim the versaoCompleta string at semicolon/space if present
    if ((ix = versaoCompleta.indexOf(";")) != -1)
        versaoCompleta = versaoCompleta.substring(0, ix);
    if ((ix = versaoCompleta.indexOf(" ")) != -1)
        versaoCompleta = versaoCompleta.substring(0, ix);

    versaoPrincipal = parseInt('' + versaoCompleta, 10);
    if (isNaN(versaoPrincipal)) {
        versaoCompleta = '' + parseFloat(versao);
        versaoPrincipal = parseInt(versao, 10);
    }

    return ('Navegador: ' + navegador + ' - Versão: ' + versaoCompleta);
}

/* VERIFICA VERSAO DO IE */
function versaoIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

/* ORIENTACAO DA PAGINA */
var myOrientation = 'vertical';
function updateOrientation(){
	switch(window.orientation){  
		case 0:  			
			myOrientation = "vertical";  
		    break;  
		case -90:			
			myOrientation = "horizontal";  
		    break;  
		case 90:
			myOrientation = "horizontal";  
		    break;  
		case 180:			
			myOrientation = "vertical";  
		    break;  
	}

	$('body').attr('data-orientation', myOrientation);
    $('#my-orientation').html(myOrientation);
} 

/* ESTRUTURAS DE DADOS */
$.ajax({
    url: "./resources/data/estrutura.json",
    dataType: "json",
    success: function(data) {
        $.each(data.employees,function(i,emp){
            $('.json-import').append('<li>'+emp.firstName+' '+emp.lastName+'</li>');
        });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log('ERROR', textStatus, errorThrown);
    }
});

/* MUDA DIRETORIO DAS IMAGENS E CONTEUDO 
    *-- Baseado no Device Pixel Ratio
 */
function getDensityDirectoryName() {
    if(!window.devicePixelRatio) return 'mdpi';
    
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

/* FUNCOES DE COMPARTILHAMENTO */
// Compartilhar Facebook
function compFacebook() {
    var linkFacebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    montaLink(linkFacebook);
}

// Compartilhar Twitter
function compTwitter() {
    var linkTwitter = 'https://twitter.com/intent/tweet?original_referer=';
    montaLink(linkTwitter);
}

// Compartilha o link
function montaLink(linkPadrao) {
    //caminho da pagina atual
    var localAtual = window.location;

    //codifica como URLEncode o link da pagina atual
    var linkCodificadoURL = encodeURIComponent(localAtual);

    //monta o link que sera compartilhado
    var linkFinal = linkPadrao + linkCodificadoURL;

    //abre uma janela/aba com o Facebook Share
    window.open(linkFinal);

    /*substitui a pagina atual pela de compartilhamento
    window.location.replace(linkFinal);
    */
}

/* ADICIONAR AOS FAVORITOS */
function addBookmark() {
	// url do site
	var url = window.location;
	// titulo da pagina
	var title = (document.getElementsByTagName('title').value = document.title);
    
    if (ie) {
		window.external.AddFavorite(url, title); // IE 7+
    }
    else {
        alert('Pressione as teclas CTRL + D para adicionar aos favoritos.'); // Chrome, Safari, Firefox 8+, Opera 15+
	}

    $('#addBookmark').removeClass('fa-star-o').addClass('fa-star');
}

/* @begin Plugin de Paginacao Slide */
var isHome = true,
    isMobile = false,
    position = 0,
    isScrolling = true,
    alturaContainerSlide = $('.containerSlide').innerHeight();

/* PAGINACAO DOS SLIDES */
function animaSlideHome() {
    enterTop();

    /* ANIMA SLIDE AO FAZER SCROLL */
    if (ie === 8) {
        window.attachEvent('onmousewheel', handleMouseWheel);
    }
    else {
        window.addEventListener('DOMMouseScroll', handleMouseWheel, false);
        window.addEventListener('mousewheel', handleMouseWheel, false);
    }

    function handleMouseWheel(event) {
        if (isGadget()) return;

        if (event.detail > 0 || event.wheelDelta < 0) {
            desceSobe('desce');
        } else if (event.detail < 0 || event.wheelDelta > 0) {
            desceSobe('sobe');
        }
    }

    document.onkeydown = checkKey;

    /* ANIMA SLIDE AO CLICAR NAS SETAS SOBE/DESCE */
    function checkKey(e) {
        e = e || window.event;
        if (isGadget() === true) return;

        if (e.keyCode == '38') {
            desceSobe('sobe');
            preventDefault(e);
        }
        else if (e.keyCode == '40') {
            desceSobe('desce');
            preventDefault(e);
        }
    }
}

function enterTop() {
    isScrolling = true;

    setTimeout(function () {
        isHome = false;
        isScrolling = false;
    }, 1000);
}

function closeTop() {
    isScrolling = true;

    setTimeout(function () {
        isHome = true;
        isScrolling = false;
    }, 1000);
}

/* FAZ SCROLL NO SLIDE */
function scrollContainer() {
    var topo = 0;
    $(".containerSlide").addClass("scroll");
    newPosition = String(position) + "%";

    $(".slidePage").each(function () {
        topo = $(this).css('top');
    });

    $(".slidePage").css({ 'top': (topo - 20) + '%' });

    isScrolling = true;
    $(".containerSlide").css("top", newPosition);

    setTimeout(function () {
        $(".containerSlide").removeClass("scroll");
    }, 1000);

    setTimeout(function () {
        isScrolling = false;
    }, 1400);
}

/* DESCE E SOBE DOS SLIDES */
function desceSobe(direcao) {
    if(direcao==='sobe'){
        if (position < 0 && isScrolling == false && isHome == false) {
            position = position + 100;
            scrollContainer();
        }
        if (position == 0 && isScrolling == false && isHome == false) {
            closeTop();
        }
    }
    
    if(direcao==='desce'){
        if (position > -300 && isScrolling == false && isHome == false) {
            position = position - 100;
            scrollContainer();
        }
        if (position == 0 && isScrolling == false && isHome == true) {
            enterTop();
        }
    }
}
/* @end Plugin de Paginacao Slide */