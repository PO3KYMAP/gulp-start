const links = document.querySelectorAll("menu__list-link");
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiper = new Swiper(".swiper", {
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	on: {
		autoplayTimeLeft(s, time, progress) {
			progressCircle.style.setProperty("--progress", 1 - progress);
			progressContent.textContent = `${Math.ceil(time / 1000)}s`;
		},
	},
});

// function getActiveHref() {
// 	return window.location.pathname;
	
// }

// document.addEventListener('DOMContentLoaded', function() {
// 	links.forEach((item) => {
// 		console.log(item.attributes);
// 	})
// })
