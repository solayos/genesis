
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- SEO - If mobile URL is different from desktop URL add a canonical link to the desktop page -->
    <!--<link href="http://www.site.com.br/" rel="canonical" />-->
    <!--<base href="http://www.site.com.br/" />--><!-- usada quando o site está em produção, para garantia de urls relativas -->

    <?php require_once 'includes/header/modules/viewport.php';  ?>

    <!-- CSS PLUGINS -->
    <link href="vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />

    <!-- CSS GERAL -->
    <link href="resources/css/style.css" rel="stylesheet" type="text/css" media="all" />

    <?php require_once 'includes/header/modules/favicon.php';  ?>

    <?php require_once 'includes/header/modules/search-index.php';  ?>

    <?php require_once 'includes/header/modules/facebook.php';  ?>

    <?php require_once 'includes/header/modules/twitter.php';  ?>

    <?php require_once 'includes/header/modules/apple.php';  ?>

    <?php require_once 'includes/header/modules/android.php';  ?>

    <?php require_once 'includes/header/modules/windows-phone.php';  ?>
    
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="vendors/html5/html5shiv.min.js"></script>
    <script src="vendors/html5/respond.min.js"></script>
    <![endif]-->

    <?php require_once 'includes/header/google-analytics.php';  ?>