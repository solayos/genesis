<?php
/* 
PROJECT TEMPLATE SITE 
    
BASE DE ESTRUTURA PARA SITES
*/
?>
<!DOCTYPE html>
<html lang="pt-BR" dir="ltr">
<head>
    <meta charset="UTF-8" />
    <title>Base Site</title>
    <meta name="description" content="Modelo de site e estrutura responsiva e Social Friendly.">
    <?php include 'includes/header/header.php';  ?>

</head>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <?php include 'includes/content/navbar.php';  ?>
        
    <section id="intro" class="section bgWhite">
        <div class="container">
            <div class="row">
                <article class="col-lg-12">
                    <h1>Base Site</h1>
                    <p>Texto de teste para ver como a fonte fica.</p>
                    <p>Orientação: <span id="my-orientation"></span></p>
                    <a class="btn btn-default page-scroll fa fa-chevron-down fa-2x" href="#estrutura"></a>
                    <a class="btn btn-default fa fa-star-o fa-2x" href="javascript:addBookmark();" title="Adicionar aos favoritos" id="addBookmark"></a>
                </article>
            </div>
        </div>
    </section>
    <section id="estrutura" class="section">
        <div class="container">
            <div class="row">
                <article class="col-lg-12">
                    <h2>Estrutura padrão para sites</h2>
                    <h3>Estrutura principal</h3>
                    <ul class="lista-estrutura lista">
                        <li><strong data-trigger="hover" data-toggle="popover" title="includes" data-content="Módulos do projeto utilizados em mais de um local.">includes</strong>
                            <ul>
                                <li><span data-trigger="hover" data-toggle="popover" title="content" data-content="Módulos que compoem o corpo do projeto.">content</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Navbar" data-content="Menu de navegação principal do projeto.">navbar.php</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Banners" data-content="Banners e sliders do projeto.">banners.php</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Crosslinks" data-content="Crosslinks e asides do projeto.">crosslinks.php</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Floaters" data-content="Floaters e popups de avisos do projeto.">floaters.php</span></li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="footer" data-content="Módulos que compoem o rodapé do projeto.">footer</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="footer.php" data-content="Principal arquivo do rodapé do site.">footer.php</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Google Adwords" data-content="Arquivo com remarketing do Google Adwords.">google-adwords.php</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Scripts" data-content="Scripts do projeto.">scripts.php</span></li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="header" data-content="Módulos que compoem o cabeçalho do projeto.">header</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="header.php" data-content="Principal arquivo do cabeçalho do projeto. Onde os demais módulos são chamados.">header.php</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Google Analytics" data-content="Arquivo com tracking do Google Analytics.">google-analytics.php</span></li>
                                        <li>
                                            <span data-trigger="hover" data-toggle="popover" title="modules" data-content="Módulos complementares e/ou não essenciais.">modules</span>
                                            <ul>
                                                <li><span data-trigger="hover" data-toggle="popover" title="Android" data-content="Metatags e arquivos exlusivos ao Android.">android.php</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="iOS" data-content="Metatags e arquivos exlusivos ao iOS.">apple.php</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="Facebook" data-content="Metatags e arquivos exlusivos ao Facebook.">facebook.php</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="Google+ e Indexação" data-content="Metatags e arquivos exlusivos ao Google+ e controle de indexação.">google.php</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="Twitter" data-content="Metatags e arquivos exlusivos ao Twitter.">twitter.php</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="Viewport" data-content="Metatags e arquivos exlusivos ao comportamento das Viewports.">viewport.php</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="Windows (Phone)" data-content="Metatags e arquivos exlusivos ao Windows (Phone).">windows-phone.php</span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><strong data-trigger="hover" data-toggle="popover" title="resources" data-content="Recursos essenciais do projeto. Scripts, estilos, imagens, estruturas de dados e personalização que sobrescreve ou complemeta plugins. Pode também ser chamado de 'assets' ou 'reference'">resources</strong>
                            <ul>
                                <li><span data-trigger="hover" data-toggle="popover" title="css" data-content="Folhas de estilo do site. Pode ser divido por temas, estrutura e áreas do projeto.">css</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Style.css" data-content="Principal folha de estilo do projeto.">style.css</span></li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="data" data-content="Estruturas de dados, XML, JSON, etc.">data</span>
                                    <ul>
                                        <li>estrutura.json</li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="fonts" data-content="Fontes (tipografias) utilizadas no projeto.">fonts</span></li>
                                <li><span data-trigger="hover" data-toggle="popover" title="images" data-content="Imagens utilizadas no projeto.">images</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="favicon" data-content="Imagem que fica no navegador, identificando o projeto na barra de favoritos.">favicon.ico</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Startup Image" data-content="Imagem utilizada pelo iOS como splash screen ao abrir o web app.">splash.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (180x180)" data-content="Imagem utilizada pelo iPhone 6 Plus para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo.">apple-touch-icon-iphone-6-plus-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (152x152)" data-content="Imagem utilizada pelo iPad Retina com iOS7 ou superior para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo.">apple-touch-icon-ipad-retina-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (144x144) - Obsoleto" data-content="Imagem utilizada pelo iPad Retina com iOS6 ou inferior para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo." class="depreceated-item">apple-touch-icon-ipad-retina-old-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (120x120)" data-content="Imagem utilizada pelo iPhone Retina com iOS7 ou superior para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo.">apple-touch-icon-iphone-retina-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (114x114) - Obsoleto" data-content="Imagem utilizada pelo iPhone Retina com iOS6 ou inferior para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo." class="depreceated-item">apple-touch-icon-iphone-retina-old-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (76x76)" data-content="Imagem utilizada pelo iPad com iOS7 ou superior para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo.">apple-touch-icon-ipad-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (72x72) - Obsoleto" data-content="Imagem utilizada pelo iPad com iOS6 ou inferior para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo." class="depreceated-item">apple-touch-icon-ipad-old-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Apple Touch Icon (57x57)" data-content="Imagem utilizada pelo iPhone com iOS6 ou inferior para criar ícone de web app. 'Precomposed' evita efeitos nos ícones em iOS antigo.">apple-touch-icon-iphone-precomposed.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Android Touch Icon (48x48)" data-content="Imagem utilizada pelo Android para criar ícone de web app em MDPI.">android-touch-icon-mdpi.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Android Touch Icon (72x72)" data-content="Imagem utilizada pelo Android para criar ícone de web app em HDPI.">android-touch-icon-hdpi.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Android Touch Icon (96x96)" data-content="Imagem utilizada pelo Android para criar ícone de web app em XHDPI.">android-touch-icon-xhdpi.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Android Touch Icon (144x144)" data-content="Imagem utilizada pelo Android para criar ícone de web app em XXHDPI.">android-touch-icon-xxhdpi.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Android Touch Icon (192x192)" data-content="Imagem utilizada pelo Android para criar ícone de web app em XXXHDPI.">android-touch-icon-xxxhdpi.png</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="MS Application - Tile Image (144x144)" data-content="Imagem utilizada pelo Windows (Phone) 8 para criar tile na start screen.">windows-tile.png</span></li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="js (javascript)" data-content="Código javascript utilizado no projeto.">js</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Script.js" data-content="Principais códigos utilizados no projeto.">script.js</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><strong data-trigger="hover" data-toggle="popover" title="vendors" data-content="Recursos de terceiros que fazem parte do projeto. Plugins, Frameworks, Bibliotecas de Código, etc.">vendors</strong>
                            <ul>
                                <li><span data-trigger="hover" data-toggle="popover" title="Bootstrap" data-content="Framework para desenvolvimento de sites responsivos.">bootstrap</span>
                                    <ul>
                                        <li>css
                                            <ul>
                                                <li>bootstrap.min.css</li>
                                            </ul>
                                        </li>
                                        <li>fonts
                                            <ul>
                                                <li>glyphicons-halflings-regular.eot</li>
                                                <li>glyphicons-halflings-regular.svg</li>
                                                <li>glyphicons-halflings-regular.ttf</li>
                                                <li>glyphicons-halflings-regular.woff</li>
                                                <li>glyphicons-halflings-regular.woff2</li>
                                            </ul>
                                        </li>
                                        <li>js
                                            <ul>
                                                <li>bootstrap.min.js</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="HTML5 Shiv" data-content="Polyfill para funcionalidades de HTML5 (lte IE8).">html5</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="HTML5 Shiv" data-content="Polyfill para tags HTML5.">html5shiv.min.js</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="HTML5 Shiv" data-content="Polyfill para media queries.">respond.min.js</span></li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="HTML5 Shiv" data-content="Polyfill para REM (relativo ao tamanho da fonte do elemento root - body).">rem.min.js</span></li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="jQuery" data-content="Biblioteca de javascript">jquery</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="jQuery Validate" data-content="Validações de formulários com a biblioteca jQuery.">validate</span>
                                            <ul>
                                                <li><span data-trigger="hover" data-toggle="popover" title="jQuery Masked Input" data-content="Máscaras para inputs de texto, ex.: telefone, CPF, CPNJ.">jquery.maskedinput.min.js</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="jQuery Validate" data-content="Métodos principais de validação.">jquery.validate.min.js</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="jQuery Validate" data-content="Métodos adicionais.">jquery.validate.methods.min.js</span></li>
                                                <li><span data-trigger="hover" data-toggle="popover" title="jQuery Validate" data-content="Tradução das mensagens de erro.">jquery.validate.pt-br.js</span></li>
                                            </ul>
                                        </li>
                                        <li><span data-trigger="hover" data-toggle="popover" title="jQuery" data-content="Sem o número de versão para facilitar atualização. Esse deve estar dentro do arquivo js.">jquery.min.js</span></li>
                                    </ul>
                                </li>
                                <li><span data-trigger="hover" data-toggle="popover" title="js" data-content="Conteúdos que não tem biblioteca com dependências.">js</span>
                                    <ul>
                                        <li><span data-trigger="hover" data-toggle="popover" title="Progress Polyfill" data-content="Polyfill para a tag progress em navegadores legados (lte IE9).">progress-polyfill.min.js</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><strong data-trigger="hover" data-toggle="popover" title="Pacotes ZIP" data-content="Pacotes do projeto enviados ao cliente (recomenda-se utilizar brances e tags de versionamento).">zip</strong></li>
                        <li><strong>index.html</strong></li>
                    </ul>
                    <h3>Estrutura alternativa</h3>
                    <p>deploy || bin || web || deliverables</p>
                    <a class="btn btn-default page-scroll fa fa-chevron-down fa-2x" href="#pessoas"></a>
                </article>
            </div>
        </div>
    </section>
    <section id="pessoas" class="section bgWhite">
        <div class="container">
            <div class="row">
                <article class="col-lg-12">
                    <h2>Pessoas Chatas</h2>
                    <ul class="json-import lista-pessoas lista"></ul>
                    <!--<a class="btn btn-default page-scroll fa fa-chevron-down fa-2x" href="#mapa"></a>-->
                </article>
            </div>
        </div>
    </section>
    <section id="mapa" class="section">
        <div class="container">
            <div class="row">
                <article class="col-lg-12">
                    <!--<div class="embed-container" id="map-canvas"></div>-->
                </article>
            </div>
        </div>
    </section>

    <?php include 'includes/footer/scripts.php';  ?>

    <?php include 'includes/footer/google-adwords.php';  ?>

</body>
</html>