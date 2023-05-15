const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

function tbs(items, contents) {
	console.log(items, contents);
	items.forEach(function (element) {
		element.addEventListener("click", open);
	});

	function open(evt) {
		const tabTarget = evt.currentTarget;
		const button = tabTarget.dataset.button;

		items.forEach(function (item) {
			item.classList.remove("tabs__btn-item--active");
		});

		tabTarget.classList.add("tabs__btn-item--active");

		contents.forEach(function (item) {
			item.classList.remove("tabs__content-item--active");
		});

		document
			.querySelector(`#${button}`)
			.classList.add("tabs__content-item--active");
	}
}
tbs(tabItem, tabContent);
