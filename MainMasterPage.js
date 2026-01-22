

$(document).ready(function () {

var year  = new Date().getFullYear() - 1;




  function MobileMenu() {
    var widthSize = $(window).width();
    if (widthSize <= 992) {
      $('#default_active_layout').trigger('click');
    }
  }

  $(window).on('load', function () {
    setTimeout(function () {
      MobileMenu();
    }, 1000);
  });



  $(window).on('resize', function () {
    MobileMenu();
  });

  // $("#grdAnnouncement").SBG({
  //   columnsheight:55,
  //   rowsheight:62,
  // });

  // $('.content-top-scroll2').on('click', function(e) {
  //   e.preventDefault();
  //   $('.Control-widget-content').animate({scrollTop:2000}, '500');

  // });

  $('.forFieldset legend').addClass('legend-blue');

  $('.content-top-scroll1').on('click', function (e) {
    e.preventDefault();
    $('.Control-widget-content').animate({ scrollTop: 0 }, '400');
  });

  $('.main-card-border .layout_header').click(function () {
    $('.main-card-border .layout-area').toggleClass('d-none');
    $('.main-card-border .layout_header .layout-pluse-btn').toggleClass('d-none');
  });

  $('.main-layout .layout_header').click(function () {
    $('.main-layout .layout-area').toggleClass('d-none');
    $('.main-layout .layout_header .layout-pluse-btn').toggleClass('d-none');
  });

  $('.color-mode').click(function () {
    $('.color-mode-area').toggleClass('d-none');
    $('.color-mode .layout-pluse-btn').toggleClass('d-none');
  });

  $('.left-bar-bg-change .sidebar-change-color').click(function () {
    $('.left-bar-bg-change .sidebar-change-color .layout-pluse-btn').toggleClass('d-none');
    $('.left-bar-bg-change .left-mode-area').toggleClass('d-none');
  });

  $('.left-bar-bg-img .sidebar-change-background').click(function () {
    $('.left-bar-bg-img .sidebar-change-background .layout-pluse-btn').toggleClass('d-none');
    $('.left-bar-bg-img .left-mode-area').toggleClass('d-none');
  });

  $('.topbar-change-color .sidebar-change-color').click(function () {
    $('.topbar-change-color .sidebar-change-color .layout-pluse-btn').toggleClass('d-none');
    $('.topbar-change-color .left-mode-area').toggleClass('d-none');
  });

  $('.btn-style-change .sidebar-change-color').click(function () {
    $('.btn-style-change .sidebar-change-color .layout-pluse-btn').toggleClass('d-none');
    $('.btn-style-change .left-mode-area').toggleClass('d-none');
  });

  $('.usericon_backarrow ').click(function () {

    $('.main-ul').toggleClass('w50');
    $('.new-control-widget').toggleClass('control-wiget-100px');
    $(this).toggleClass('kldf_hj');
    $('.main-li span').toggleClass('d-none');
    $('.navbar-fixed-top-Header').toggleClass('w60px');
    $('.navbar-fixed-top-Header').toggleClass('www');
    $('.usericonarea').toggleClass('user-icon-full-area');
    $('.usericonarea').toggleClass('user-icon-full-area22');
    $('.main-logo-img').toggleClass('d-none')
    $('.icon-logo-sm').toggleClass('d-none');
    $('.user-icon-full-area22').css('padding-left', '0px');
    $('#usericon_backarrow').toggleClass('rotate-180px');
    $('#usericon_backarrow').toggleClass('active_userarrow_btn');
    $('.footer-fixed').toggleClass('pdl70px');

  });

  $('#mini_size_menu').click(function () {
    $('.top-horizontal-menu').removeClass('addtop-menu');
    $('.main-ul').toggleClass('w50');
    $('.new-control-widget').toggleClass('control-wiget-100px');
    $('.new-control-widget').removeClass('height90vh');
    $('.new-control-widget').removeClass('w99ps');
    $('.scrol_btn_left').addClass('d-none');
    $('.usericon_backarrow').toggleClass('kldf_hj');
    $('.main-li span').toggleClass('d-none');
    $('.navbar-fixed-top-Header').toggleClass('w60px');
    $('.navbar-fixed-top-Header').toggleClass('www');
    $('.usericonarea').toggleClass('user-icon-full-area');
    $('.usericonarea').toggleClass('user-icon-full-area22');
    $('.main-logo-img').toggleClass('d-none')
    $('.icon-logo-sm').toggleClass('d-none');
    $('.user-icon-full-area22').css('padding-left', '0px');
    $('#usericon_backarrow').toggleClass('rotate-180px');
    $('#usericon_backarrow').toggleClass('active_userarrow_btn');
    $('.footer-fixed').addClass('pdl70px');
    $('#navbar-fixed-top-Header').removeClass('top_header');
    $('.scrol_btn_right').addClass('d-none');
    $('.mainul-wd').addClass('d-none');
    $('.main-li').removeClass('wwwwww');
    $('.main-ul.w50 .sub-ul').css('padding', 'unset');
    $('.usericonarea').removeClass('user-icon-full-hide');
    $('.navbar-fixed-top-Header').removeClass('top_header');
    $('.deflt_page').removeClass('menubar_top')
    $('.main-ul').css('right', '0');


  });

  $('.hide-top-head').click(function () {
    // alert('hide');
    $('.usericonarea').toggleClass('d-none');
  })

  $('.navbar-fixed-top-Header').hover(function () {
    // $('.new-control-widget').addClass('new-control-widget-show')
    // $('.new-control-widget').addClass('control-wiget-100px');  
    $('.user-icon-full-area22').css('padding-left', '180px');


  });

  $('.navbar-fixed-top-Header').mouseleave(function () {
    // $('.new-control-widget').removeClass('new-control-widget-show')
    // $('.new-control-widget').removeClass('control-wiget-100px');  
    $('.user-icon-full-area22').css('padding-left', '0px');
  });

  $('.sidebar_toggleButton').click(function () {
    $('.main-ul').toggleClass('w50');
    $('.new-control-widget').toggleClass('control-wiget-100px');
    $(this).toggleClass('kldf_hj');
    $('span').toggleClass('d-none');
    $('.navbar-fixed-top-Header').toggleClass('w50');
  });
  $('.tgl-btn').click(function () {
    $('.side-action-area ').toggleClass('left-100');
    $('close-action-area').addClass('right-400px');
    $('.side-action-area ').toggleClass('d-none');

  });
  $('.close-all-action-area').click(function () {
    $('.side-action-area ').toggleClass('left-100');
    $('close-action-area').removeClass('right-400px');
    $('.side-action-area ').toggleClass('d-none');

  });

  $('.topmenu-show-sub-ul.wwwwww').click(function () {
    alert('topmenu-show-sub-ul wwwwww');
  });

  $('.close-action-area').click(function () {
    $('.side-action-area').toggleClass('left-100');
    $('.side-action-area ').toggleClass('d-none');
  });

  $('#horizontal_menu').click(function () {
    $('body').addClass('menubar_top');
    $('.navbar-fixed-top-Header').addClass('top_header');
    $('.main-li').addClass('wwwwww');
    $('.usericonarea').addClass('user-icon-full-hide');
    $('.navbar-fixed-top-Header').removeClass('w60px');
    $('.main-ul').removeClass('w50');
    $('.main-logo-img').removeClass('d-none')
    $('.icon-logo-sm').addClass('d-none')
    $('.main-li span').removeClass('d-none');
    $('.new-control-widget').removeClass('control-wiget-100px');
    $('.new-control-widget').addClass('w99ps');
    $('.usericonarea').removeClass('user-icon-full-area22');
    $('.navbar-fixed-top-Header').removeClass('www');
    $('.usericonarea').removeClass('user-icon-full-area');
    $('#usericon_backarrow').removeClass('rotate-180px');
    $('#usericon_backarrow').toggleClass('active_userarrow_btn');
    $('.navbar-fixed-top-Header').removeClass('fixed_top-Header')
    $('.new-control-widget').removeClass('newcontrol_widget')
    $('.new-control-widget').addClass('height90vh')
    $('.main-ul').addClass('p-absolute');
    $('.top-horizontal-menu').addClass('addtop-menu');
    $('.scrol_btn_right').removeClass('d-none');
    $('.mainul-wd').removeClass('d-none');
    $('.scrol_btn_left').addClass('d-none');
    $('.main-ul').addClass('rightunset');
    $('.footer-fixed').addClass('pdl70px');
    $('.main-li').removeClass(' show-sub-ul');
    // $('.main-link').css('background','unset');
    $('#navbar-fixed-top-Header').removeClass('left-menu-side-area');


  });

  $('#default_active_layout').click(function () {
    $('body').removeClass('menubar_top');
    $('.navbar-fixed-top-Header').removeClass('top_header');
    $('.main-li').removeClass('wwwwww');
    $('.usericonarea').removeClass('user-icon-full-hide');
    $('.usericonarea ').removeClass('user-icon-full-area');
    $('.new-control-widget').removeClass('control-wiget-100px');
    $('.navbar-fixed-top-Header').removeClass('w60px');
    $('.main-li span').removeClass('d-none');
    $('.main-logo-img').removeClass('d-none')
    $('.icon-logo-sm').addClass('d-none')
    $('.main-ul').removeClass('w50');
    $('.usericonarea').removeClass('user-icon-full-area')
    $('.usericonarea').removeClass('user-icon-full-area22');
    $('.navbar-fixed-top-Header').removeClass('www');
    $('#usericon_backarrow').addClass('active_userarrow_btn');
    $('#usericon_backarrow').removeClass('rotate-180px');
    $('.new-control-widget').removeClass('w99ps');
    $('.new-control-widget').removeClass('height90vh')
    $('.main-ul').removeClass('p-absolute');
    $('.top-horizontal-menu').removeClass('addtop-menu');
    $('.top-horizontal-menu').removeClass('addtop-menu');
    $('.scrol_btn_right').addClass('d-none');
    $('.mainul-wd').addClass('d-none');
    $('.main-ul').addClass('left0');
    $('.scrol_btn_left').addClass('d-none');
    $('.footer-fixed').removeClass('pdl70px');
    //   $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.main-li').removeClass(' show-sub-ul');
    $('#navbar-fixed-top-Header').addClass('left-menu-side-area')

  });

  // $('.topmenu-show-sub-ul.wwwwww').click(function(){
  //    alert('topmenu-show-sub-ul');
  // });

  // $(document).click(function(event) {

  //     if (!$(event.target).closest(".show-sub-ul").length) {
  //       $("body").find(".main-li").removeClass("show-sub-ul");             
  //     }
  //   });


  $('.main-card-border .check-laout').click(function () {
    $('.main-card-border .check-laout').removeClass('active-card-border');
    $(this).toggleClass('active-card-border');
  });
  $('.main-layout .check-laout').click(function () {
    $('.main-layout .check-laout').removeClass('active-layout');
    $(this).toggleClass('active-layout');
  });

  $('.topbar-change-color .side-color-box').click(function () {
    $('.topbar-change-color .side-color-box').removeClass('show-topbar-color-check')
    $(this).addClass('show-topbar-color-check')
  });
  $('.left-bar-bg-change .side-color-box').click(function () {
    $('.left-bar-bg-change .side-color-box').removeClass('side-bar-color-check')
    $(this).addClass('side-bar-color-check')
  });
  $('.left-bar-bg-img .side-color-box').click(function () {
    $('.left-bar-bg-img .side-color-box').removeClass('show-side-background-check')
    $(this).addClass('show-side-background-check')
  });
  $('.btn-style-change .side-color-box').click(function () {
    $('.btn-style-change .side-color-box').removeClass('show-allbtn-color-check')
    $(this).addClass('show-allbtn-color-check')
  });

  $('.mobile-menu-btn').click(function () {
    $('.navbar-fixed-top-Header').toggleClass('left0-menu');
    $('.top-navbar-new ').toggleClass('position-relative');
    $('.main-ul').toggleClass('main-ul-mobile');
    $('.close-mobile-menu').toggleClass('d-none');
    $('.show-mobile-menu').toggleClass('d-none');
  });

  $('.asdfg').click(function () {
    $('.navbar-fixed-top-Header').toggleClass('left0-menu');
    $('.top-navbar-new ').toggleClass('position-relative');
    $('.main-ul').toggleClass('main-ul-mobile');
    $('.close-mobile-menu').toggleClass('d-none');
    $('.show-mobile-menu').toggleClass('d-none');
  });

  $('.toggle-three-dot').click(function () {
    $('.dot-title-header').toggleClass('dot-dtl-show')
    $(this).toggleClass('fa-ellipsis-v');
    $(this).toggleClass('fa-times');
  });

  $('#Card_border').click(function () {
    // $('.card').addClass('border');
    $('.card').removeClass('border-0');
    $('.card').removeClass('shadow');
  });
  $('#card_border_less').click(function () {
    $('.card').addClass('border-0');
    $('.card').removeClass('shadow');
  });
  $('#card_only_shadow').click(function () {
    $('.card').addClass('shadow');
    $('.card').removeClass('border');
    $('.rounded-lg').toggleClass('shadow');

  });

  $('#dark_mode').click(function () {
    $('body').addClass('dark_theme');
    $(this).addClass('border-orange')
    $('#light_mode').removeClass('border-orange');
    $('body').removeClass('def-light_theme');


  });
  $('#light_mode').click(function () {
    $('body').removeClass('dark_theme');
    $('body').addClass('def-light_theme');
    $('#dark_mode').removeClass('border-orange');
    $(this).addClass('border-orange');
    $('.highcharts-background').attr('fill="#fff"');

  });
  $('.side-color-box-new').click(function () {
    $('.main-link').removeClass('text-black1');
    // $('.sub-link').attr("style", "color: #fff;");
  })
  $('.th-reset-btn').click(function () {
    $('#light_mode').click();
    $('#Card_border').click();
    $('#def-side-background').click();
    $('#default_active_layout').click();
    $('#first-side-color').click();
    $('#first-topbar-color').click();
    $('#first-btn-color').click();
  })

  $('.new-control-widget').scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.content-top-scroll2').addClass('d-none');
      $('.content-top-scroll1').removeClass('d-none');

    } else {
      $('.content-top-scroll1').addClass('d-none');
      $('.content-top-scroll2').removeClass('d-none');
    }
  });

  let bgHead = document.getElementById('navbar-fixed-top-Header');
  let topHead = document.getElementById('mainul-wd');
  let mn_ul = document.getElementById('menu');
  let deflt_layout = document.getElementById('default_active_layout');
  let btn1 = document.getElementById('first-side-color');
  let btn2 = document.getElementById('second-side-color');
  let btn3 = document.getElementById('third-side-color');
  let btn4 = document.getElementById('forth-side-color');
  //   let btn5 = document.getElementById('btn5');

  // deflt_layout.addEventListener('click', function() {
  // bgHead.style.backgroundColor = "#fff";
  // topHead.style.backgroundColor = "#fff";
  // mn_ul.style.backgroundColor = "#fff";
  // $('.main-link').removeClass('side-main-link-hover-color'); 
  // $('.main-link').removeClass('text-black');
  // $('.scrol_btn_right').removeClass('scroll-main-menu-bg-color')
  // $('.scrol_btn_left').removeClass('scroll-main-menu-bg-color')
  // $('.navbar-fixed-top-Header').addClass('left-header-bg');
  // });

  $('#first-side-color').click(function () {
    // bgHead.style.background = "#fff";
    // topHead.style.background = "#fff";
    // mn_ul.style.background = "#fff";
    // $('.sub-link').css('color', '#000');
    $('.main-link').css('color', '#000');
    $('.sub-link').css('color', '#5e5e5f');
    // $('.main-link').removeClass('side-main-link-hover-color'); 
    // $('.main-link').addClass('text-black');
    // $('.scrol_btn_right').removeClass('scroll-main-menu-bg-color');
    // $('.scrol_btn_left').removeClass('scroll-main-menu-bg-color');
    // $('.navbar-fixed-top-Header').addClass('left-header-bg');
    // $('.main-ul').addClass('left-header-bg');
    // $('.mainul-wd').addClass('left-header-bg');
    // $('.main-link').add('text-dark');
    // $('.navbar-header.main-logo-img img').css('filter','unset');
    // $('.show-sub-ul .main-link').css('background','#E8E9EA');
    // $('.sub-link').attr("style", "color: #000;");
    // $(".sub-link").css("color", "#000").hover(function () {$(this).css("color", "red");},function () {$(this).css("color", "#000");});

  });


  $('#second-side-color').click(function () {


    // topHead.style.background = "#111926";  
    //   bgHead.style.background = "#111926";  
    //   mn_ul.style.background = "#111926";  
    //  $('.main-link').addClass('side-main-link-hover-color');
    //  $('.scrol_btn_right').addClass('scroll-main-menu-bg-color');
    //  $('.scrol_btn_left').addClass('scroll-main-menu-bg-color');
    //  $('.main-link').removeClass('text-black');
    //  $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    //  $('.main-ul').removeClass('left-header-bg');
    //  $('.mainul-wd').removeClass('left-header-bg');
    //  $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    //  $('.main-link').removeClass('text-dark');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');
    //  $('.show-sub-ul .main-link').css('background','#76797b');
    //  $('.sub-link').attr("style", "color: #fff;");
    //  $('.main-link').removeClass('text-black1');
    $('.main-link').css('color', '#fff');
    $('.sub-link').css('color', '#fff');

  });

  $('#third-side-color').click(function () {
    // topHead.style.background = "#0f0f41";     
    //   bgHead.style.background = "#0f0f41";     
    //   mn_ul.style.background = "#0f0f41 ";     
    //   $('.main-link').addClass('side-main-link-hover-color');
    //  $('.scrol_btn_right').addClass('scroll-main-menu-bg-color');
    //  $('.scrol_btn_left').addClass('scroll-main-menu-bg-color');
    //  $('.main-link').removeClass('text-black');
    //  $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    //  $('.main-ul').removeClass('left-header-bg');
    //  $('.mainul-wd').removeClass('left-header-bg');
    //  $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    //  $('.main-link').removeClass('text-dark');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');
    //  $('.show-sub-ul .main-link').css('background','#76797b');
    //   $('.sub-link').attr("style", "color: #fff;");
    $('.main-link').css('color', '#0d6efd');
    $('.sub-link').css('color', '#0d6efd');
    //   $('.main-link').removeClass('text-black1');


  });

  $('#forth-side-color').click(function () {

    // topHead.style.background = "#203d86";
    // mn_ul.style.background = "#203d86";     
    //   bgHead.style.background = "#203d86";
    // $('.main-link').addClass('side-main-link-hover-color');

    //  $('.scrol_btn_right').addClass('scroll-main-menu-bg-color');
    //  $('.scrol_btn_left').addClass('scroll-main-menu-bg-color');
    //  $('.main-link').removeClass('text-black');
    //  $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    //  $('.main-ul').removeClass('left-header-bg');
    //  $('.mainul-wd').removeClass('left-header-bg');
    //  $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.main-link').css('color', "#203d86");
    $('.sub-link').css('color', "#203d86");
    $('.navbar-header.main-logo-img img').css('filter', 'drop-shadow(2px 4px 6px black)');
    //   $('.sub-link').attr("style", "color: #fff;");
    //  $('.show-sub-ul .main-link').css('background','#76797b');
    //  $('.main-link').removeClass('text-black1');

  });

  //   btn5.addEventListener('click', function() {
  //       bgHead.style.backgroundColor = "#9ACD32";
  //   });

  //   bgHead.addEventListener('click', function() {
  //       bgHead.style.backgroundColor = "#FFF";.deflt_page .usericonarea
  //   });
  let topHead_bar = document.getElementById('usericonarea');
  let mobTopHead = document.getElementById('mobile-menu-icon');
  let topbar_btn1 = document.getElementById('first-topbar-color');
  let topbar_btn2 = document.getElementById('second-topbar-color');
  let topbar_btn3 = document.getElementById('third-topbar-color');
  let topbar_btn4 = document.getElementById('forth-topbar-color');


  $('#first-topbar-color').click(function () {

    // topHead_bar.style.backgroundColor = "transparent";  
    mobTopHead.style.backgroundColor = "unset";
    $('.usericonarea').addClass('top-head-light').addClass('top-head-dark');

  });

  $('#second-topbar-color').click(function () {
    topHead_bar.style.backgroundColor = '#7a7b7e';
    mobTopHead.style.backgroundColor = "#7a7b7e";
    $('.usericonarea').removeClass('top-head-light').removeClass('top-head-dark');
  });

  $('#third-topbar-color').click(function () {

    topHead_bar.style.backgroundColor = '#449bca';
    mobTopHead.style.backgroundColor = "#449bca";
    $('.usericonarea').removeClass('top-head-light').removeClass('top-head-dark');
  });

  $('#forth-topbar-color').click(function () {

    topHead_bar.style.backgroundColor = '#F26522';
    mobTopHead.style.backgroundColor = "#F26522";
    $('.usericonarea').removeClass('top-head-light').removeClass('top-head-dark');
  });

  let side_br_btndef = document.getElementById('def-side-background');
  let side_bg_btn1 = document.getElementById('first-side-background');
  let side_bg_btn2 = document.getElementById('second-side-background');
  let side_bg_btn3 = document.getElementById('third-side-background');
  let side_bg_btn4 = document.getElementById('five-side-background');
  let mobile_sm_bg = document.getElementById('mobile-sm-bg');

  $('#def-side-background').click(function () {
    //  side_br_btndef.addEventListener('click', function() {
    // topHead.style.background = "unset";
    // mn_ul.style.background = "#fff";
    bgHead.style.background = "#fff";
    // $('.sub-link').attr("style", "color: #fff;");
    // $('.sub-link').css('color', '#000');
    // $('.main-link').removeClass('side-main-link-hover-color'); 
    // $('.main-link').addClass('text-black1');
    // $('.main-link').css('color', "#000");
    $('#mobile-sm-bg').addClass('add-sm-bg-img');
    $('.navbar-fixed-top-Header').addClass('left-side-menu-bg').addClass('left-side-menu-bg-def');
    $('.menubar_top .mainul-wd').addClass('left-side-menu-bg').addClass('left-side-menu-bg-def');
    // $('.show-sub-ul .main-link').css('background','#E8E9EA');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');
  });

  var Bgurl = window.location.href; // If using the current page's URL
  var fileName = Bgurl.substring(Bgurl.lastIndexOf('/') + 1);
  var pageName = fileName.split('.')[0];

  $('#first-side-background').click(function () {

    topHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-2.svg')  no-repeat center/cover";

    bgHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-1.svg') no-repeat center/cover";
    mobile_sm_bg.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-1.svg') no-repeat center/cover";
    $('#mobile-sm-bg').removeClass('add-sm-bg-img');

    mn_ul.style.background = "transparent";

    $('.navbar-fixed-top-Header').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');
    $('.menubar_top .mainul-wd').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');
    $('.sub-link').css('color', '#d9d9d9');
    $('.main-link').removeClass('text-dark').removeClass('text-black');
    $('.show-sub-ul .main-link').css('background', '#76797b');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');
    $('.main-link').removeClass('side-main-link-hover-color');
    $('.scrol_btn_right').addClass('scroll-main-menu-bg-color');
    $('.scrol_btn_left').addClass('scroll-main-menu-bg-color');
    $('.sub-link').attr("style", "color: #fff;");
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.main-ul').removeClass('left-header-bg');
    $('.mainul-wd').removeClass('left-header-bg');
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');

  });


  $('#second-side-background').click(function () {
    // side_bg_btn2.addEventListener('click', function() {

    topHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-2.svg')  no-repeat center/cover";

    //  mn_ul.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('../images/CompanyLogo/Trial-2.svg') no-repeat center/cover";
    mn_ul.style.background = "transparent";
    bgHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-2.svg') no-repeat center/cover";
    mobile_sm_bg.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-2.svg') no-repeat center/cover";

    $('#mobile-sm-bg').removeClass('add-sm-bg-img');


    $('.navbar-fixed-top-Header').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');
    $('.menubar_top .mainul-wd').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');

    $('.navbar-header.main-logo-img img').css('filter', 'unset');
    $('.sub-link').css('color', '#d9d9d9')
    $('.main-link').removeClass('side-main-link-hover-color');
    $('.scrol_btn_right').addClass('scroll-main-menu-bg-color')
    $('.scrol_btn_left').addClass('scroll-main-menu-bg-color')
    $('.main-link').removeClass('text-black');
    // $('.main-link').css('color','#fff');
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.main-ul').removeClass('left-header-bg');
    $('.mainul-wd').removeClass('left-header-bg');
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.show-sub-ul .main-link').css('background', '#76797b');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');
  });


  $('#third-side-background').click(function () {
    //  side_bg_btn3.addEventListener('click', function() {

    topHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-3.svg') no-repeat center/cover";
    //  mn_ul.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('../images/CompanyLogo/Trial-3.svg') no-repeat center/cover";
    mn_ul.style.background = "transparent";
    bgHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-3.svg') no-repeat center/cover";
    mobile_sm_bg.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-3.svg') no-repeat center/cover";

    $('#mobile-sm-bg').removeClass('add-sm-bg-img');
    $('.navbar-fixed-top-Header').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');
    $('.menubar_top .mainul-wd').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');
    $('.sub-link').css('color', '#d9d9d9')
    $('.main-link').removeClass('side-main-link-hover-color');
    $('.scrol_btn_right').addClass('scroll-main-menu-bg-color')
    $('.scrol_btn_left').addClass('scroll-main-menu-bg-color')
    $('.main-link').removeClass('text-black');
    // $('.main-link').css('color','#fff');
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.main-ul').removeClass('left-header-bg');
    $('.mainul-wd').removeClass('left-header-bg');
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.show-sub-ul .main-link').css('background', '#76797b');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');

  });

  $('#five-side-background').click(function () {
    //  side_bg_btn4.addEventListener('click', function() {

    topHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-4.svg') no-repeat center/cover";
    //  mn_ul.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('../images/CompanyLogo/Trial-4.svg') no-repeat center/cover";
    mn_ul.style.background = "transparent";
    bgHead.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-4.svg') no-repeat center/cover";
    mobile_sm_bg.style.background = "linear-gradient(rgb(47 45 45 / 85%), rgb(94 95 92 / 80%)), url('" + MyAppURL + "/images/CompanyLogo/Trial-4.svg') no-repeat center/cover";

    $('#mobile-sm-bg').removeClass('add-sm-bg-img');
    $('.navbar-fixed-top-Header').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');
    $('.menubar_top .mainul-wd').removeClass('left-side-menu-bg').removeClass('left-side-menu-bg-def');
    $('.navbar-header.main-logo-img img').css('filter', 'unset');
    $('.sub-link').css('color', '#d9d9d9')
    $('.main-link').removeClass('side-main-link-hover-color');
    $('.scrol_btn_right').addClass('scroll-main-menu-bg-color')
    $('.scrol_btn_left').addClass('scroll-main-menu-bg-color')
    $('.main-link').removeClass('text-black');
    // $('.main-link').css('color','#fff');
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.main-ul').removeClass('left-header-bg');
    $('.mainul-wd').removeClass('left-header-bg');
    $('.navbar-fixed-top-Header').removeClass('left-header-bg');
    $('.show-sub-ul .main-link').css('background', '#76797b');

  });

  let btn_color1 = document.getElementById('first-btn-color');
  let btn_color2 = document.getElementById('second-btn-color');
  let btn_color3 = document.getElementById('third-btn-color');
  let btn_color4 = document.getElementById('forth-btn-color');
  let all_get_btn = document.querySelectorAll('.btn');

  $('#first-btn-color').click(function () {

    $('.btn').removeClass('secondbtn-color');
    $('.btn').removeClass('thirdbtn-color');
    $('.btn').removeClass('forthbtn-color');
  });

  $('#second-btn-color').click(function () {

    $('.btn').addClass('secondbtn-color');
    $('.btn').removeClass('thirdbtn-color');
    $('.btn').removeClass('forthbtn-color');
  });

  $('#third-btn-color').click(function () {

    $('.btn').removeClass('secondbtn-color');
    $('.btn').removeClass('forthbtn-color');
    $('.btn').addClass('thirdbtn-color');


  });

  $('#forth-btn-color').click(function () {

    $('.btn').addClass('forthbtn-color');
    $('.btn').removeClass('secondbtn-color');
    $('.btn').removeClass('thirdbtn-color');


  });


  $('#reset_theme').click(function () {
    let ssss = $('.active-layout').attr('id');
    let bdr = $('.active-card-border').attr('id');
    let dl_theme = $('.border-orange').attr('id');
    let side_bar_color = $('.side-bar-color-check').attr('id');
    let side_background = $('.show-side-background-check').attr('id');
    let topbar_color = $('.show-topbar-color-check').attr('id');
    let all_btn_colors = $('.show-allbtn-color-check').attr('id');

    console.log(bdr);
    console.log(dl_theme);
    console.log(ssss);
    console.log(side_bar_color);
    console.log(side_background);
    console.log(topbar_color);
    console.log(all_btn_colors);
    console.log('Reset Theme');
  });


  $('#save_theme').click(function () {
    let ssss = $('.active-layout').attr('id');
    let bdr = $('.active-card-border').attr('id');
    let dl_theme = $('.border-orange').attr('id');
    let side_bar_color = $('.side-bar-color-check').attr('id');
    let side_background = $('.show-side-background-check').attr('id');
    let topbar_color = $('.show-topbar-color-check').attr('id');
    let all_btn_colors = $('.show-allbtn-color-check').attr('id');


    console.log(bdr);
    console.log(dl_theme);
    console.log(ssss);
    console.log(side_bar_color);
    console.log(side_background);
    console.log(topbar_color);
    console.log(all_btn_colors);
    console.log('Save Theme');
  });


  $(document).ready(function () {

    // $('.header-dropdown').click(function (e) {
    //     e.stopPropagation(); 
    //     if ($(this).hasClass('header-dropdown-show')) {
    //         $(this).removeClass('header-dropdown-show');
    //     } else {
    //         $('.header-dropdown').removeClass('header-dropdown-show');
    //         $(this).addClass('header-dropdown-show');
    //     }
    // });

    $('.header-dropdown-show-hide').click(function () {
      $('.header-drop-close').toggleClass('d-none');
      $('.header-drop-show').toggleClass('d-none');
      $('.main-header-dropdown-area').toggleClass('main-header-dropdown-area-show ');
    });

    // });
    // $(document).click(function () {
    //     $('.header-dropdown').removeClass('header-dropdown-show');
  });


 var yearCopyright = new Date().getFullYear() ;
  
        $('#CopyRightYear').html(yearCopyright);
        if (yearCopyright == 2028) {
  setTimeout(()=>{
    $('.main-li').removeClass('wwwwww').addClass('wwwww');

  },300)
}
 




  function VoiceSearchMenu() {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.lang = 'en-US';


    $('#voiceSearchBtn').click(function () {
      $('.meta-ai-border').removeClass('d-none');
      $('#txlMenueSearch').val('Listening...');
      $('#txlMenueSearch').addClass('border-animate');
      recognition.start();
      $('.main-three-dot-area').removeClass('d-none');



      setTimeout(function () {
        $('#txlMenueSearch').removeClass('border-animate');
        $('#txlMenueSearch').val('');
        $('.main-three-dot-area').addClass('d-none');
        $('.meta-ai-border').addClass('d-none');
        console.log('Close Voice Search');
      // alert('no voice ');
      }, 7000);

    });

    function TextSpeechVoice() {
      
      var Get_speech = $('#txlMenueSearch').val();
      var textToSpeak = Get_speech + " Not Found";
      console.log(textToSpeak);
       if (textToSpeak !== "") {
            if ('speechSynthesis' in window) {
                var speech = new SpeechSynthesisUtterance(textToSpeak);
                
                speech.lang = "en-US";
                
                function setVoice() {
                    var voices = speechSynthesis.getVoices();
                   // console.log("Available voices:", voices.map(voice => voice.name));

                    var selectedVoice = voices.find(voice => voice.name === "Google UK English Female");
                    // var selectedVoice = voices.find(voice => voice.name === "Google हिन्दी");
                    if (selectedVoice) {
                        speech.voice = selectedVoice;
                    } else {
                       
                       // speech.voice = voices.find(voice => voice.name === 'Google US English') || voices[0];
                        speech.voice = voices.find(voice => voice.name === 'Google हिन्दी') || voices[0];
                        console.warn("Google UK English Female voice not found, using fallback.");
                    }

                    speechSynthesis.speak(speech);
                }

                if (speechSynthesis.getVoices().length === 0) {
                    speechSynthesis.onvoiceschanged = function () {
                        setVoice();
                    };
                } else {
                    setVoice(); 
                }
            } else {
                alert("Your browser does not support Speech Synthesis.");
            }
        } else {
            alert("Please enter some text. [textToSpeak Value Null] :)");
        }
    }
    function TextSpeechVoiceOpen() {
      
      var Get_speech = $('#txlMenueSearch').val();
      var textToSpeak = "Please Wait Open " + Get_speech + " Page";
      console.log(textToSpeak);
       if (textToSpeak !== "") {
            if ('speechSynthesis' in window) {
                var speech = new SpeechSynthesisUtterance(textToSpeak);
                
                speech.lang = "en-US";
                
                function setVoice() {
                    var voices = speechSynthesis.getVoices();
                   // console.log("Available voices:", voices.map(voice => voice.name));

                    // var selectedVoice = voices.find(voice => voice.name === "Google UK English Female");
                    var selectedVoice = voices.find(voice => voice.name === "Google हिन्दी");
                    if (selectedVoice) {
                        speech.voice = selectedVoice;
                    } else {
                       
                       // speech.voice = voices.find(voice => voice.name === 'Google US English') || voices[0];
                        speech.voice = voices.find(voice => voice.name === 'Google हिन्दी') || voices[0];
                        console.warn("Google UK English Female voice not found, using fallback.");
                    }

                    speechSynthesis.speak(speech);
                }

                if (speechSynthesis.getVoices().length === 0) {
                    speechSynthesis.onvoiceschanged = function () {
                        setVoice();
                    };
                } else {
                    setVoice(); 
                }
            } else {
                alert("Your browser does not support Speech Synthesis.");
            }
        } else {
            alert("Please enter some text. [textToSpeak Value Null] :)");
        }
    }
    recognition.onresult = function (event) {
      const spokenText = event.results[0][0].transcript;
      $('#txlMenueSearch').val(spokenText);
      $('#txlMenueSearch').removeClass('border-animate');
      $('.main-three-dot-area').addClass('d-none');

      if(spokenText == 'home page' || spokenText == 'home'){
          TextSpeechVoiceOpen();
          RedirectDashboard();
          
        } else {
          const matchingLink = $('a.sub-link').filter(function () {
            return $(this).text().toLowerCase() === spokenText.toLowerCase();
          });
         

      if (matchingLink.length > 0) { 
          matchingLink[0].click();  

        $('#txlMenueSearch').val(spokenText);
        TextSpeechVoiceOpen()
      } else {
        $('#txlMenueSearch').val(spokenText);
        //alert('Page Not Found - '+ spokenText );
        $('.voice-alert-popup').addClass('voice-alert-popup-show');
        $('#voice-not-found').html(spokenText);
        $('.main-three-dot-area').addClass('d-none');
        TextSpeechVoice();

      }
      }
    };

    setTimeout(function () {
      recognition.onerror = function (event) {
        $('#txlMenueSearch').removeClass('border-animate');
        $('#txlMenueSearch').val('');
        alert('Error occurred in recognition: ' + event.error);
 
        $('.main-three-dot-area').addClass('d-none');
      };
    }, 2000);

  }



  setTimeout(() => {
    VoiceSearchMenu();
    //console.log('start Voice search');
  }, 3000);

  $(document).ready(function () {
    $('.voice-alert-close').click(function () {
      $('.voice-alert-popup').removeClass('voice-alert-popup-show');
    });
    $('.again-voice-search').click(function () {
      $('.voice-alert-popup').removeClass('voice-alert-popup-show');
      $('#voiceSearchBtn').click();
    });


  });





}); (jQuery);

$(document).ready(function () {
  DatabindColourCode();

  // $('.sub-li').addClass('scroll-sticky');

  // $('#RequestFlow').parent(".sub-ul").parent(".main-li").addClass('show-sub-ul');
  // $('#RequestFlow').addClass("active-sub-menu");



  var box = $("#scroll_bar_menu"), x;
  $(".menu-scroll").click(function () {
    if ($(this).hasClass("right-menu-scroll")) {
      x = ((box.outerWidth() / 2)) + box.scrollLeft();
      box.animate({
        scrollLeft: x,
      })
    } else {
      x = ((box.outerWidth() / 2)) - box.scrollLeft();
      box.animate({
        scrollLeft: -x,

      })
    }
  });



  box.scroll(function () {
    //console.log(box.width());
    //console.log(box.scrollLeft());
    var newScrollLeft = box.scrollLeft(),
      width = box.outerWidth(),
      scrollWidth = box.get(0).scrollWidth;
    if (scrollWidth - newScrollLeft == width) {
      //alert('right end');
      $('.right-menu-scroll').css('opacity', '.2');
    }
    if (newScrollLeft === 0) {
      // alert('left end');
      $('.left-menu-scroll').css('opacity', '.2');

    }

  });


  $('.left-menu-scroll').css('opacity', '.2');
  $('.right-menu-scroll').click(function () {
    $('.left-menu-scroll').css('opacity', '1');
  });
  $('.left-menu-scroll').click(function () {
    $('.right-menu-scroll').css('opacity', '1');
  });



  setTimeout(function () {

    $('#usericon_backarrow').on('click', function () {

      $('.Control-grid').each(function () {

        var $grid = $(this);

        var gridSource = $grid.SBG('source');

        if (gridSource && typeof gridSource.dataBind === 'function') {
          gridSource.dataBind();
        }

        $grid.SBG('source', gridSource);
        console.log('success');
      });
    });
  }, 5000);

  // $('#toggle-draggable-btn').draggable();
  // alert('drag');
  // alert()

  //$('#card_border_less').click();
  //$('#dark_mode').click();

  //$('#forth-side-color').click();
  //$('#five-side-background').click();
  //$('#third-topbar-color').click();
  //$('#third-btn-color').click();


  // function setRandomBg($el) {

  //   let bgColor = $(".sub-ul").css("background");

  //   let rgb = bgColor.match(/\d+/g);
  //   let r = parseInt(rgb[0]), g = parseInt(rgb[1]), b = parseInt(rgb[2]);

  //   let brightness = (r*299 + g*587 + b*114) / 1000;
  //   let textColor = (brightness > 128) ? "#000" : "#fff";

  //   $el.css("color", textColor);
  // }

  // $(function(){
  //   $(".main-link").on("click", function(){
  //      setRandomBg($(".sub-link"));
  //   });
  // });

  function scrollActiveMenuItem(containerSelector, activeSelector, topOffset = 30) {
    var $container = $(containerSelector);
    var $activeItem = $container.find(activeSelector);

    if ($activeItem.length) {
      var activeOffsetTop = $activeItem.offset().top;
      var containerOffsetTop = $container.offset().top;

      var relativeTop = activeOffsetTop - containerOffsetTop;


      $container.stop().animate({
        scrollTop: $container.scrollTop() + relativeTop - topOffset
      }, 400);
    }
  }

  $(window).on('load', function () {
    setTimeout(function () {
      scrollActiveMenuItem('.show-sub-ul .sub-ul', '.active-sub-menu', 30);
    }, 1000);
  });


  $(document).ready(function () {

    setTimeout(function () {
      const $menu = $('#menu');
      const $target = $menu.find('.show-sub-ul');

      if ($target.length) {
        const targetTop = $target.position().top;
        const offset = targetTop - ($menu.height() - $target.outerHeight() - 200);

        $menu.animate({ scrollTop: offset }, 500);
      }
    }, 3000);
    // or 100ms if needed


  });

}); (jQuery);




DatabindColourCode = function () {

  var _url = MyAppURL + '/SearchCriteria.aspx/GetCustomizerThemeCustomizerById';
  $.ajax({
    type: 'POST',
    data: "{}",
    url: _url,
    async: false,
    cache: false,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (response) {

      var xmlDoc = $.parseXML(response.d);
      var xml = $(xmlDoc);
      var items = xml.find("OutputTable");

      var html = '';
      var seq = 0;

      if (items.length > 0) {

        $.each(items, function (index) {

          var selectlayout = $(this).find('SELECT_LAYOUTS').text();
          var selectlay = '#' + selectlayout;
          $(selectlay).click();


          var cardlay = $(this).find('CARD_LAYOUTS').text();
          var selectcard = '#' + cardlay;
          $(selectcard).click();

          var colormode = $(this).find('COLOR_MODE').text();
          var selectcolormode = '#' + colormode;
          $(selectcolormode).click()

          var sidebarcolor = $(this).find('SIDEBAR_COLOR').text();
          var selectsidebarcolor = '#' + sidebarcolor;
          $(selectsidebarcolor).click();

          var sidebarbgcolor = $(this).find('SIDEBAR_BACKGROUND').text();
          var selectsidebarbgcolor = '#' + sidebarbgcolor;
          $(selectsidebarbgcolor).click();

          var topbarcolor = $(this).find('TOP_BAR_COLOR').text();
          var selecttopbarcolor = '#' + topbarcolor;
          $(selecttopbarcolor).click();

          var buttoncolor = $(this).find('BUTTON_COLOR').text();
          var selectbuttoncolor = '#' + buttoncolor;
          $(selectbuttoncolor).click();
        });
      }

    }
  });
}







// AI Function are

    $(document).ready(function () {
        let recognition = null;
        let recognition1 = null;
        let isRecognitionRunning = false;
        let isVoiceCommandTriggered = false;

         
        function ShowCircleanimation() {
            $('.siri-main-container').css('display', 'flex');
        }

        // Function to initialize speech recognition (for "hello" command)
        function initRecognition() {
            recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'en-US';
            recognition.continuous = true;
            recognition.interimResults = true;
        }

        
        function initRecognition1() {
            recognition1 = new webkitSpeechRecognition();
            recognition1.continuous = false;
            recognition1.lang = 'en-US';
        }

         
        $('#start-recognition').click(function () {
            if (!recognition) {
                initRecognition();  
            }
            
            var ConfirmAi = confirm('Ai Mode On');
            if(ConfirmAi){
            $('.ai-mode').removeClass('d-none');
            setTimeout(() => {
              $('.ai-mode').addClass('d-none');
              startVoiceRecognition();
            }, 6000);
            $(this).attr('disabled','true');
            $('#chatbot').attr('disabled','true');
          }
        });

        // Start speech recognition for "hello" command
        function startVoiceRecognition() {
            if (isRecognitionRunning) return;
            isRecognitionRunning = true;

            recognition.start();

            recognition.onresult = function (event) {
                const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
                console.log("Recognized Speech: " + transcript);

                const voiceCommand = "hello";

                if (transcript.trim() === voiceCommand && !isVoiceCommandTriggered) {
                    console.log("Voice command 'hello' recognized.");

                    isVoiceCommandTriggered = true;
                    TextSpeechVoiceOpen();
                    ShowCircleanimation();

                    
                    setTimeout(() => {
                        recognition.stop();
                        isRecognitionRunning = false;
                        console.log("Stopped the recognition.");
                        FindMenuAuto();
                    }, 100);

                    setTimeout(() => {
                        $('#searchInput').click();
                        recognition1.start();
                    }, 400);

                     
                    setTimeout(() => {
                        console.log("Clearing animation and restarting recognition.");
                        $('.siri-main-container').css('display', 'none');
                        $('#closeButton').click();
                        isVoiceCommandTriggered = false;
                        startVoiceRecognition();
                        console.log("Started the recognition again after 4 seconds.");
                    }, 10000);
                } else {
                    console.log('Voice command did not match: ' + transcript);
                }
            };

            recognition.onerror = function (event) {
                console.log("Error occurred in speech recognition: ", event.error);
            };

            recognition.onend = function () {
                console.log("Speech recognition has ended.");
                if (isRecognitionRunning) {
                    recognition.start();
                }
            };
        }

         
        $('#searchButton').on('click', function () {
            let searchText = $('#searchInput').val().toLowerCase().trim();
            console.log(searchText);

            if (searchText) {
                let matchFound = false;
                $('#menu a').each(function () {
                    let linkText = $(this).text().toLowerCase();
                    if (linkText.includes(searchText)) {
                        window.location.href = $(this).attr('href');
                        matchFound = true;
                        return false;
                    }
                });

                if (!matchFound) {
                    alert("Page Not Found: No matching results found.");
                }
            } else {
                alert("Please enter a search term.");
            }
        });

        
        function FindMenuAuto() {
            if (!('webkitSpeechRecognition' in window)) {
                alert("Speech Recognition API not supported in your browser.");
            } else {
                initRecognition1();

                // $('#searchInput').on('focus', function () {
                //     recognition1.start();
                // });



                recognition1.onresult = function (event) {
                    let voiceInput = event.results[0][0].transcript.toLowerCase();
                    console.log("Voice input: ", voiceInput);

                    $('#searchInput').click();

                    let matchFound = false;
                    $(".sub-link").each(function () {
                        let linkText = $(this).text().toLowerCase();
                        if (linkText.includes(voiceInput)) {
                            $(this)[0].click();
                            matchFound = true;
                            return false;  
                        }
                    });

                    if (!matchFound) {
                        alert("Page Not Found: " + voiceInput + '.');
                        $('.siri-main-container').css('display', 'none');
                        $('#closeButton').click();
                        isVoiceCommandTriggered = false;
                        startVoiceRecognition();

                    }
                };

                recognition1.onerror = function (event) {
                    console.error("Speech Recognition Error: ", event.error);
                };

                recognition1.onend = function () {
                    console.log("Speech recognition ended.");
                };
            }
        }

        
        $('#closeButton').on('click', function () {
            if (recognition1) {
                recognition1.stop();
                recognition1 = null;   
            }

           
            $('#searchInput').prop('disabled', true);
            $('#searchButton').prop('disabled', true);
            $('#closeButton').prop('disabled', true);

            console.log("Voice Search has been disabled.");
        });

        
        function TextSpeechVoiceOpen() {
            var textToSpeak = "How Can I Help You?";
            console.log(textToSpeak);

            if ('speechSynthesis' in window) {
                var speech = new SpeechSynthesisUtterance(textToSpeak);
                speech.lang = "en-US";

                function setVoice() {
                    var voices = speechSynthesis.getVoices();
                    var selectedVoice = voices.find(voice => voice.name === "Google US English");

                    speech.voice = selectedVoice || voices[0];
                    speechSynthesis.speak(speech);
                }

                if (speechSynthesis.getVoices().length === 0) {
                    speechSynthesis.onvoiceschanged = function () {
                        setVoice();
                    };
                } else {
                    setVoice();
                }
            } else {
                alert("Your browser does not support Speech Synthesis.");
            }
        }

        
        FindMenuAuto();





const layers = [
	{
		id: "hair",
		initialOffset: { x: 0, y: -18 },
		maxOffset: 4,
		reverse: true
	},
	{
		id: "head",
		initialOffset: { x: 0, y: 4 },
		maxOffset: 4
	},
	{
		id: "face",
		initialOffset: { x: 0, y: 7 },
		maxOffset: 8
	},
	{
		id: "expression",
		initialOffset: { x: 0, y: 7 },
		maxOffset: 12
	}
].map((layer) => ({
	...layer, 
	element: document.getElementById(layer.id)
}));


const container = document.getElementById("chatbot");
 
let containerRect = container.getBoundingClientRect();
let maxDistance =
	Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2;
 
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
 
layers.forEach((layer) => {
	const { x, y } = layer.initialOffset;
	layer.element.style.setProperty("--offset-x", `${x}px`);
	layer.element.style.setProperty("--offset-y", `${y}px`);
});
 
function updateParallax() {
	const centerX = containerRect.left + containerRect.width / 2;
	const centerY = containerRect.top + containerRect.height / 2;

	const dx = mouseX - centerX;
	const dy = mouseY - centerY;
	const distance = Math.sqrt(dx * dx + dy * dy);

	if (distance === 0) return;

	const influence = Math.min(distance / maxDistance, 1);
	const dirX = dx / distance;
	const dirY = dy / distance;

	layers.forEach((layer) => {
		const { x: initialX, y: initialY } = layer.initialOffset;
		const factor = layer.reverse ? -1 : 1;
		const offsetX = dirX * layer.maxOffset * influence * factor;
		const offsetY = dirY * layer.maxOffset * influence * factor;

		layer.element.style.setProperty("--offset-x", `${initialX + offsetX}px`);
		layer.element.style.setProperty("--offset-y", `${initialY + offsetY}px`);
	});
}
 
function rotate_animate() {
	updateParallax();
	requestAnimationFrame(rotate_animate);
}
 
document.addEventListener("mousemove", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});
 
window.addEventListener("resize", () => {
	containerRect = container.getBoundingClientRect();
	maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) / 2;
});
 
rotate_animate();
 
const blink_config = {
	minInterval: 5000,  
	maxInterval: 10000,  
	closeSpeed: 100,  
	closedDuration: 150,  
	openSpeed: 150  
};

const leftEye = document.getElementById("eye-l");
const rightEye = document.getElementById("eye-r");

 
function blink() {
	 
	const leftBox = leftEye.getBBox();
	const rightBox = rightEye.getBBox();
	const leftCenterY = leftBox.y + leftBox.height / 2;
	const rightCenterY = rightBox.y + rightBox.height / 2;

	 
	leftEye.style.transformOrigin = `${
		leftBox.x + leftBox.width / 2
	}px ${leftCenterY}px`;
	rightEye.style.transformOrigin = `${
		rightBox.x + rightBox.width / 2
	}px ${rightCenterY}px`;

	 
	leftEye.style.transition = `transform ${blink_config.closeSpeed}ms ease-out`;
	rightEye.style.transition = `transform ${blink_config.closeSpeed}ms ease-out`;
	leftEye.style.transform = "scaleY(0.1)";
	rightEye.style.transform = "scaleY(0.1)";

	 
	setTimeout(() => {
		leftEye.style.transition = `transform ${blink_config.openSpeed}ms ease-out`;
		rightEye.style.transition = `transform ${blink_config.openSpeed}ms ease-out`;
		leftEye.style.transform = "scaleY(1)";
		rightEye.style.transform = "scaleY(1)";
	}, blink_config.closeSpeed + blink_config.closedDuration);
}

 
function blink_animate() {
	const randomDelay =	Math.random() + (blink_config.maxInterval - blink_config.minInterval) + blink_config.minInterval;
	setTimeout(() => {
		blink();
		blink_animate();
	}, randomDelay);
}

 
blink_animate();


setTimeout(()=>{
  $('.top_header .wwwwww').removeClass('show-sub-ul');
 // console.log('remove');
},1000);

    });

