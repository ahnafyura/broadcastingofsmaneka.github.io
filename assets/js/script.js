'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// slide

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// POP UP ------------------------------

const viewBtn = document.querySelector("#share1"),
    popup = document.querySelector(".popup"),
    close = popup.querySelector(".close"),
    field = popup.querySelector(".field"),
    input = field.querySelector("input"),
    copy = field.querySelector(".button");

    viewBtn.onclick = ()=>{
      popup.classList.toggle("show");
    }
    close.onclick = ()=>{
      viewBtn.click();
    }

    copy.onclick = ()=>{
      input.select(); //select input value
      if(document.execCommand("copy")){ //if the selected text copy
        field.classList.add("active");
        copy.innerText = "Copied";
        setTimeout(()=>{
          window.getSelection().removeAllRanges(); //remove selection from document
          field.classList.remove("active");
          copy.innerText = "Copy";
        }, 3000);
      }
    }


// copy link

function copyKlik(number) {
  const link = document.getElementById(`share-link-${number}`)
  link.select()
  document.execCommand('copy')
  window.getSelection().removeAllRanges();
  alert('URL telah disalin!');
}


function shareOnFacebook() {
  var url = document.querySelector('.icon-item__fb').getAttribute('data-url');
  var title = document.querySelector('.icon-item__fb').getAttribute('data-title');
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank');
}

function shareOnTwitter() {
  var url = document.querySelector('.icon-item__twitter').getAttribute('data-url');
  var title = document.querySelector('.icon-item__twitter').getAttribute('data-title');

  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
}

function shareOnWhatsApp() {
  var text = document.querySelector('.icon-item__whatsapp').getAttribute('data-text');
  var url = document.querySelector('.icon-item__whatsapp').getAttribute('data-url');
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%0A%0A${encodeURIComponent(url)}`, '_blank');
  
  // window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(text)}%0A%0A${encodeURIComponent(url)}`, '_blank');
}

function shareOnTelegram() {
  var text = document.querySelector('.icon-item__telegram').getAttribute('data-text');
  var url = document.querySelector('.icon-item__telegram').getAttribute('data-url');
  
  //t.me/share/url untuk membuka aplikasi Telegram
  window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
}

// member.html

// document.getElementById('aboutMeButton').addEventListener('click', function() {
//   window.location.href = 'member.htmnl';
// });