/* About Image */
const Abtgmbr = document.getElementById("ImgKlik");
Abtgmbr.onclick = function () {
  this.classList.toggle("active");
};

$(document).ready(function () {

  let bg = document.getElementById("bg");
  let moon = document.getElementById("mo");
  let gunung = document.getElementById("gg");
  let pantai = document.getElementById("pi");
  let txt = document.getElementById("textbanner");
  
  window.addEventListener('scroll',function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 +'px';
    moon.style.left = -value * 0.15 +'px';
    gunung.style.top = -value * 0.15 + 'px';
    pantai.style.top = value * 0.01 +'px';
    txt.style.top = value * 1 +'px';  
  })


  // Ubah Color Menu About
  $('ul.thumb li').click(function (e) {
    e.preventDefault();
    $('ul.thumb li').removeClass('terpilih');
    $(this).addClass('terpilih');
  });

  // Menampilkan paragraf
  $(".iconifyf").click(function () {
    $(".targetDiv").hide();
    $("#div" + $(this).attr("target")).show();
  });


  $(".SkillSs").hover(function (e) {
    $(".targetss").hide();
    $("#ss" + $(this).attr("target")).show();
    // / batas / 
    e.preventDefault();
    $('.SkillSs').removeClass('terpilih');
    $(this).addClass('terpilih');
  });

});


/* Package Sticky */
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
$("figure").mouseleave(function () {
  $(this).removeClass("hover");
});
/* Akhiran Sticky  swiper-button-prev*/
