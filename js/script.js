const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu"),
      navLinks = document.querySelectorAll(".nav_link"); // Menüdeki linkleri seçiyoruz

// Menü toggle işlevi
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show_menu");
    navToggle.classList.toggle("active");
});

// Her bir linke tıklanıldığında menüyü kapatma işlevi
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show_menu");
        navToggle.classList.remove("active");
    });
});
// TYPİNG TEXT

var typed = new Typed(".profession_text", {
        strings: ["Game Developer", "Level Designer", "Web Developer"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
})

// SWİPER

var swiper = new Swiper(".brand_container", {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },

      loop: true,
  });

  // BACK TOP BUTTON 

  const back_btn_top = document.querySelector(".btn-top");

  window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
       back_btn_top.classList.add("active")
    }else{
        back_btn_top.classList.remove("active")
    }
  })