const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.flex-card-container');


IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
	const elm = document.querySelector(`.${ACTIVECLASS}`)
	if(elm) {
		elm.classList.remove(ACTIVECLASS);
	}
}

function addClass($event) {
	removeActiveClass();
	const target = $event.currentTarget;
	target.classList.add(ACTIVECLASS)
}

IMAGES.forEach(image => {
	image.addEventListener('click', addClass);
})

const ACTIVECLASS1 = 'active1';
const IMAGES1 = document.querySelectorAll('.flex-card-container1');


IMAGES1[0].classList.add(ACTIVECLASS1);

function removeActiveClass1() {
	const elm = document.querySelector(`.${ACTIVECLASS1}`)
	if(elm) {
		elm.classList.remove(ACTIVECLASS1);
	}
}

function addClass1($event) {
	removeActiveClass1();
	const target = $event.currentTarget;
	target.classList.add(ACTIVECLASS1)
}

IMAGES1.forEach(image => {
	image.addEventListener('click', addClass1);
})


const ACTIVECLASS2 = 'active2';
const IMAGES2 = document.querySelectorAll('.flex-card-container2');


IMAGES2[0].classList.add(ACTIVECLASS2);

function removeActiveClass2() {
	const elm = document.querySelector(`.${ACTIVECLASS2}`)
	if(elm) {
		elm.classList.remove(ACTIVECLASS2);
	}
}

function addClass2($event) {
	removeActiveClass2();
	const target = $event.currentTarget;
	target.classList.add(ACTIVECLASS2)
}

IMAGES2.forEach(image => {
	image.addEventListener('click', addClass2);
})




