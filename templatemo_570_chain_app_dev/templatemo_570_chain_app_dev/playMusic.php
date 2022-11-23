<?php
include("./assets/js/src/db.php");
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">

  <title> Mesura </title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!--


-->

  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
  <link rel="stylesheet" href="assets/css/playMusic.css">
  <link rel="stylesheet" href="assets/css/animated.css">
  <link rel="stylesheet" href="assets/css/owl.css">

  <script src="./assets/js/src/main.js" type="module"></script>

</head>

<body>

  <!-- ***** Preloader Start ***** -->
  <div id="js-preloader" class="js-preloader">
    <div class="preloader-inner">
      <span class="dot"></span>
      <div class="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- ***** Preloader End ***** -->

  <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo navbar-brand">
              <img src="assets/images/Logo.png" alt="Mesura Logo" height="50">
              Mesura
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li class="scroll-to-section"><a href="./index.html" class="active">Inicio</a></li>
              <li class="scroll-to-section"><a href="#services">Dashboard</a></li>


              <li class="dukenuke">
                <div class="gradient-button" id="logged-out"><a href="#modal" id="logout">Cerrar sesión <i class="fa fa-sign-out-alt"></i> </a></div>
              </li>
              <li class="dukenuke">
                <div class="gradient-button" id="logged-in"><a id="modal_trigger" href="#modal"><i class="fa fa-sign-in-alt"></i> Iniciar sesión </a></div>
              </li>

            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <div id="modal" class="popupContainer" style="display:none;">
    <div class="popupHeader">
      <span class="header_title">Iniciar sesion</span>
      <span class="modal_close"><i class="fa fa-times"></i></span>
    </div>

    <section class="popupBody">
      <!-- Social Login -->
      <div class="social_login">
        <div class="">
          <button href="#" class="social_box fb w-100" type="button" id="facebook-button">
            <span class="icon"><i class="fab fa-facebook"></i></span>
            <span class="icon_title">Conectar con Facebook</span>

          </button>

          <button href="#" class="social_box google w-100" type="button" id="google-button">
            <span class="icon"><i class="fab fa-google-plus"></i></span>
            <span class="icon_title">Conectar con Google</span>
          </button>
        </div>

        <div class="centeredText">
          <span>O usa tu direcccion de E-mail</span>
        </div>

        <div class="action_btns">
          <div class="one_half"><a href="#" id="login_form" class="btn">Conectarse</a></div>
          <div class="one_half last"><a href="#" id="register_form" class="btn">Registrarse</a></div>
        </div>
      </div>

      <!-- Username & Password Login form -->
      <div class="user_login">
        <form id="signin-form">
          <label>Correo / Nombre de usuario</label>
          <input type="text" />
          <br />

          <label>Contraseña</label>
          <input type="password" />
          <br />

          <div class="checkbox">
            <input id="remember" type="checkbox" />
            <label for="remember">Recordar este dispositivo</label>
          </div>

          <div class="action_btns">
            <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Volver</a>
            </div>
            <div class="one_half last"><a href="#" class="btn btn_red">Conectar</a></div>
          </div>
        </form>

      </div>

      <!-- Register Form -->
      <div class="user_register">
        <form id="signup-form">
          <label>Nombre completo</label>
          <input type="text" />
          <br />

          <label>Direcccion E-mail</label>
          <input type="email" id="signup-email" placeholder="Correo" required />
          <br />

          <label>Contraseña</label>
          <input type="password" id="signup-password" placeholder="Contraseña" required />
          <br />

          <div class="checkbox">
            <input id="send_updates" type="checkbox" />
            <label for="send_updates">Actualizaciones por correo</label>
          </div>

          <div class="action_btns">
            <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Volver</a>
            </div>
            <div class="one_half last"><button id="pruebaButton" type="submit" class="btn btn_red">Registrarse</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>

  <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div>
        <div class="col-lg-12">
          <div>
            <div>
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <div>
                      <div class="pricing-item-regular row">
                        <div class="col-lg-6">
                          <span class="price">$8.000</span>
                          <h4>Premium para Estudiantes</h4>
                          <div class="icon">
                            <img src="assets/images/pricing-table-01.png" alt="">
                          </div>
                          <ul>
                            <li>- Descuento especial para estudiantes universitarios.</li>
                            <li>- Escucha música sin anuncios</li>
                            <li>- Reproduce y descarga tus canciones en cualquier lugar, incluso sin conexión</li>
                            <li>- Prepaga o suscríbete </li>
                          </ul>
                          <div class="border-button">
                            <a href="#">PRUEBA 1 MES GRATIS</a>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <span class="price">$9.000</span>
                          <h4>Premium para Estudiantes</h4>
                          <div class="icon">
                            <img src="assets/images/pricing-table-01.png" alt="">
                          </div>
                          <ul>
                            <li>- Descuento especial para estudiantes universitarios.</li>
                            <li>- Escucha música sin anuncios</li>
                            <li>- Reproduce y descarga tus canciones en cualquier lugar, incluso sin conexión</li>
                            <li>- Prepaga o suscríbete </li>
                          </ul>
                          <div class="border-button">
                            <a href="#">PRUEBA 1 MES GRATIS</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- Scripts -->
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/animation.js"></script>
  <script src="assets/js/imagesloaded.js"></script>
  <script src="assets/js/popup.js"></script>
  <script src="assets/js/custom.js"></script>



</body>

</html>