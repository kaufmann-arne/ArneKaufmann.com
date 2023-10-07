document.querySelectorAll(".bouncing-letters>b").forEach((element) => {
    element.addEventListener("mouseover", (e) => bounce(e.target));
});


function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(
            function () {
                letter.classList.remove("bounce");
            },
            1000
        );
    }
}

function spin(letter) {
    if (!letter.classList.contains("spin")) {
        letter.classList.add("spin");
        setTimeout(
            function () {
                letter.classList.remove("spin");
            },
            1000
        );
    }
}

function opacity(letter) {
    if (!letter.classList.contains("opacity")) {
        letter.classList.add("opacity");
        setTimeout(
            function () {
                letter.classList.remove("opacity");
            },
            1000
        );
    }
}

window.onload = () => {
    
    document.querySelectorAll(".L1").forEach((element) => {
        bounce(element);
    });
    document.querySelector(".l1").style.animation = `opacity 2s`
    document.querySelector(".l1").style.opacity = `100%`

    setTimeout(()=>{
        document.querySelectorAll(".L2").forEach((element) => {
            bounce(element);
        });
    }, 50); 
    setTimeout(()=>{
        document.querySelector(".l2").style.animation = `opacity 2s`
        document.querySelector(".l2").style.opacity = `100%`
    }, 50);

    setTimeout(()=>{
        document.querySelectorAll(".L3").forEach((element) => {
            bounce(element);
        });
    }, 100); 
    setTimeout(()=>{
        document.querySelector(".l3").style.animation = `opacity 2s`
        document.querySelector(".l3").style.opacity = `100%`
    }, 100);

    setTimeout(()=>{
        document.querySelectorAll(".L4").forEach((element) => {
            bounce(element);
        });
    }, 150); 
    setTimeout(()=>{
        document.querySelector(".l4").style.animation = `opacity 2s`
        document.querySelector(".l4").style.opacity = `100%`
    }, 150);

    setTimeout(()=>{
        document.querySelectorAll(".L5").forEach((element) => {
            bounce(element);
        });
    }, 200); 
    setTimeout(()=>{
        document.querySelector(".l5").style.animation = `opacity 2s`
        document.querySelector(".l5").style.opacity = `100%`
    }, 200);

    setTimeout(()=>{
        document.querySelectorAll(".L6").forEach((element) => {
            bounce(element);
        });
    }, 250); 
    setTimeout(()=>{
        document.querySelector(".l6").style.animation = `opacity 2s`
        document.querySelector(".l6").style.opacity = `100%`
    }, 250);

    setTimeout(()=>{
        document.querySelectorAll(".letter").forEach((element) => {
            bounce(element);
        });
    }, 300); 
    setTimeout(()=>{
        document.querySelector(".ll").style.animation = `opacity 2s`
        document.querySelector(".ll").style.opacity = `100%`
    }, 300);

    setTimeout(()=>{
        document.querySelectorAll(".L7").forEach((element) => {
            bounce(element);
        });
    }, 350);
    setTimeout(()=>{
        document.querySelector(".l7").style.animation = `opacity 2s`
        document.querySelector(".l7").style.opacity = `100%`
    }, 350);

    setTimeout(()=>{
        document.querySelectorAll(".L8").forEach((element) => {
            bounce(element);
        });
    }, 400);
    setTimeout(()=>{
        document.querySelector(".l8").style.animation = `opacity 2s`
        document.querySelector(".l8").style.opacity = `100%`
    }, 400);

    setTimeout(()=>{
        document.querySelectorAll(".L9").forEach((element) => {
            bounce(element);
        });
    }, 450); setTimeout(()=>{
        document.querySelector(".l9").style.animation = `opacity 2s`
        document.querySelector(".l9").style.opacity = `100%`
    }, 450);
     
    setTimeout(()=>{
        document.querySelectorAll(".L10").forEach((element) => {
            bounce(element);
        });
    }, 500); setTimeout(()=>{
        document.querySelector(".l10").style.animation = `opacity 2s`
        document.querySelector(".l10").style.opacity = `100%`
    }, 500);
     
    setTimeout(()=>{
        document.querySelectorAll(".L11").forEach((element) => {
            bounce(element);
        });
    }, 550); setTimeout(()=>{
        document.querySelector(".l11").style.animation = `opacity 2s`
        document.querySelector(".l11").style.opacity = `100%`
    }, 550);
     
    setTimeout(()=>{
        document.querySelectorAll(".L12").forEach((element) => {
            bounce(element);
        });
    }, 600); setTimeout(()=>{
        document.querySelector(".l12").style.animation = `opacity 2s`
        document.querySelector(".l12").style.opacity = `100%`
    }, 600);
     
    setTimeout(()=>{
        document.querySelectorAll(".L13").forEach((element) => {
            bounce(element);
        });
    }, 650); setTimeout(()=>{
        document.querySelector(".l13").style.animation = `opacity 2s`
        document.querySelector(".l13").style.opacity = `100%`
    }, 650);
     
    setTimeout(()=>{
        document.querySelectorAll(".L14").forEach((element) => {
            bounce(element);
        });
    }, 700); setTimeout(()=>{
        document.querySelector(".l14").style.animation = `opacity 2s`
        document.querySelector(".l14").style.opacity = `100%`
    }, 700);
     
    setTimeout(()=>{
        document.querySelectorAll(".L15").forEach((element) => {
            bounce(element);
        });
    }, 750); setTimeout(()=>{
        document.querySelector(".l15").style.animation = `opacity 2s`
        document.querySelector(".l15").style.opacity = `100%`
    }, 750);
     
    setTimeout(()=>{
        document.querySelectorAll(".L16").forEach((element) => {
            bounce(element);
        });
    }, 800); setTimeout(()=>{
        document.querySelector(".l16").style.animation = `opacity 2s`
        document.querySelector(".l16").style.opacity = `100%`
    }, 800);
     
    setTimeout(()=>{
        document.querySelectorAll(".L17").forEach((element) => {
            bounce(element);
        });
    }, 850); setTimeout(()=>{
        document.querySelector(".l17").style.animation = `opacity 2s`
        document.querySelector(".l17").style.opacity = `100%`
    }, 850);
     
    setTimeout(()=>{
        document.querySelectorAll(".L18").forEach((element) => {
            bounce(element);
        });
    }, 900); setTimeout(()=>{
        document.querySelector(".l18").style.animation = `opacity 2s`
        document.querySelector(".l18").style.opacity = `100%`
    }, 900);
     
    setTimeout(()=>{
        document.querySelectorAll(".L19").forEach((element) => {
            bounce(element);
        });
    }, 950); setTimeout(()=>{
        document.querySelector(".l19").style.animation = `opacity 2s`
        document.querySelector(".l19").style.opacity = `100%`
    }, 950);
     
    setTimeout(()=>{
        document.querySelectorAll(".L20").forEach((element) => {
            bounce(element);
        });
    }, 1000); setTimeout(()=>{
        document.querySelector(".l20").style.animation = `opacity 2s`
        document.querySelector(".l20").style.opacity = `100%`
    }, 1000);
     
    setTimeout(()=>{
        document.querySelectorAll(".L21").forEach((element) => {
            bounce(element);
        });
    }, 1050); setTimeout(()=>{
        document.querySelector(".l21").style.animation = `opacity 2s`
        document.querySelector(".l21").style.opacity = `100%`
    }, 1050);
     
    setTimeout(()=>{
        document.querySelectorAll(".L22").forEach((element) => {
            bounce(element);
        });
    }, 1100); setTimeout(()=>{
        document.querySelector(".l22").style.animation = `opacity 2s`
        document.querySelector(".l22").style.opacity = `100%`
    }, 1000);
     
    setTimeout(()=>{
        document.querySelectorAll(".L23").forEach((element) => {
            bounce(element);
        });
    }, 1150); setTimeout(()=>{
        document.querySelector(".l23").style.animation = `opacity 2s`
        document.querySelector(".l23").style.opacity = `100%`
    }, 1150);
};








const buttons = document.querySelectorAll('.magnetic-container');
const time = 150;

buttons.forEach((elm) => {
    elm.addEventListener('mousemove', move);
    elm.addEventListener('mouseenter', start);
    elm.addEventListener('mouseleave', end);
});

function getChilds($event) {
    return {
        background: $event.target.querySelector('.magnetic-background'),
        element: $event.target.querySelector('.magnetic-element'),
    };
}

function move($event) {
    const x = $event.layerX - $event.target.clientWidth / 2;
    const y = $event.layerY - $event.target.clientHeight / 2;
    const { background, element } = getChilds($event);

    background.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
    element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
}

function startAnimation($event) {
    const { background, element } = getChilds($event);
    const transition = `all ${time}ms ease`;
    background.style.transition = transition;
    element.style.transition = transition;
}

function endAnimation($event) {
    const { background, element } = getChilds($event);
    setTimeout(() => {
        background.style.transition = '';
        element.style.transition = '';
    }, time);
}

function start($event) {
    startAnimation($event);
    endAnimation($event);
}

function end($event) {
    const { background, element } = getChilds($event);

    startAnimation($event);

    background.style.transform = `translate(0px, 0px)`;
    element.style.transform = `translate(0px,0px)`;

    endAnimation($event);
}


