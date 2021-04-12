var item1 = {
	name: "Букет с гортензией",
	price: 2500,
	src: "photo1.jpg"
};

var item2 = {
	name: "Букет с пионовидными и кустовыми розами",
	price: 3500,
	src: "photo2.jpg"
};

var item3 = {
	name: "Букет с розой кахала",
	price: 2000,
	src: "photo3.jpg"
};

var itemsArr = [item1, item2, item3];

var sum = 0;

function init() {
	var catalog = document.querySelector(".catalog");
	var i, item;
	for (i=0; i<itemsArr.length; i++) {
		item = document.createElement("div");
		item.className = "div_item";
		item.appendChild(document.createTextNode(itemsArr[i].name));

		itemImg = document.createElement("img");
		itemImg.src = itemsArr[i].src;
		itemImg.className = "item_img";

		item.appendChild(itemImg);
		item.appendChild(document.createTextNode(itemsArr[i].price + "P"));

		itemBtn = document.createElement("button");
		itemBtn.className = "item_btn";
		itemBtn.textContent = "Купить";
		itemBtn.id = "btn_" + i;
		itemBtn.onclick = addItem;
		item.appendChild(itemBtn);

		catalog.appendChild(item);
	}
}

function addItem(event) {
	var selectedItem = itemsArr[event.target.id.split("_")[1]];
	var selectedItems = document.querySelector(".selected_items");
	itemName = document.createElement("span");
	itemName.appendChild(document.createTextNode(selectedItem.name));
	itemPrice = document.createElement("span");
	itemPrice.appendChild(document.createTextNode(selectedItem.price + "P"));

	sum += selectedItem.price;
	document.querySelector(".sum").textContent = "Сумма заказа: " + sum + "P";
}

window.onload = init;