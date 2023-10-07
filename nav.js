'use strict';

const openNav = document.querySelector('.open_nav');
const overlayA = document.querySelectorAll('.return5');

openNav.addEventListener('click', function(){
    this.classList.toggle('active5');
    document.querySelector('.returnaim').classList.toggle('active5');
    document.body.classList.toggle('lock-scroll');
    overlayA.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = '';
      }else{
        link.style.animation = `navLinksFade 1s ease forwards ${index / 7 + 0.3}s`;
      }     
    });
});

overlayA.forEach( 
  function(curr){
    curr.addEventListener('click', function(){
        overlayA.forEach((link) =>{
          link.style.animation = '';
        });
        openNav.classList.remove('active5');
        this.classList.remove('active5');
        document.querySelector('.returnaim').classList.remove('active5');
        document.body.classList.remove('lock-scroll');

    });

  }

);


var lastScrollTop = 0;
      const navbar = document.getElementById('control2');
      window.addEventListener('scroll', () => {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var mouseY = event.clientY
        // for(mouseY )
        if(scrollTop > lastScrollTop && mouseY != 0){ //add && here to make condition
          navbar.style.top = '-8vh';
          mouseY = 0;
        }else{
          navbar.style.top = '0';
        }
        lastScrollTop = scrollTop;
      });


