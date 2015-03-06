var larguraJanela = $(window).width(),
    alturaJanela = $(window).innerHeight(),
    urlSite = window.location.href,
    ie;

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

$(window).bind('resize', function(e){
	if (window.RT) clearTimeout(window.RT);
	window.RT = setTimeout(function() {
	    // code here
	}, 100);

});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(window).on('orientationchange', function (event) {
    updateOrientation();
});

$(function () {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $(window).resize(function () {
        // code here
    });

    var bind = function (el, event, fn) {
        if (el.addEventListener) {
            el.addEventListener(event, fn, false);
        } else {
            el.attachEvent('on' + event, fn);
        }
    };

    $('[data-toggle="popover"]').popover({ delay: { 'show': 200, 'hide': 200} });
    /* BASE URL VIA DEVICE PIXEL RATIO - ANDROID */
    //var baseUrl = 'file:///android_asset/www/img-js-diff/ratiores/'+getDensityDirectoryName()+'/'
    //document.write('<base href="' + baseUrl + '">');
});

/* ORIENTATION */
window.onload = function initialLoad(){  
	updateOrientation();
}

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
	//document.getElementsByTagName('body')[0].className = myOrientation;
	//document.getElementById('my-orientation').innerHTML = myOrientation;
} 


$.ajax({
    url: "resources/data/estrutura.json",
    dataType: "json",
    success: function(data) {
        //console.log(data);
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
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
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

    $(".slidePage").each(
        function () {
            topo = $(this).css('top');
        }
    );

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