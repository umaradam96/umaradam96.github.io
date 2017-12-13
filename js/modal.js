let modalJSON = `
[
	{
		"title": "Safari",
		"fact": "The Luangwa River is the most intact major river system in Africa and is the life-blood of this 9059 km2 Park",
		"footer": "Visit the Gallery page"
	},
	{
		"title": "Animals",
		"fact": "The guides will ensure you have every opportunity to see all that the valley has to offer of its wildlife, birds and varying vegetation and habitats.",
		"footer": "Visit the Gallery page"
	},
	{
		"title": "Birds",
		"fact": "The ever-present sounds of the birds in the Valley takes some getting used to.",
		"footer": "Visit the Gallery page"
	}
]`;

let firstModal = document.getElementById('myModal1');
let secondModal = document.getElementById('myModal2');
let thirdModal = document.getElementById('myModal3');

function createModals() {
	let json = JSON.parse(modalJSON);

	let modals = [firstModal, secondModal, thirdModal];

	for (let i = 0; i < modals.length; i++) {
		let modal = modals[i];
		modal.innerHTML += '<section class="modal-content">'
		+ '<section class="modal-header">'
		+ '<span class="close' + (i + 1) + '">&times;</span>'
		+ '<h2>' + json[i].title + '</h2>'
		+ '</section>'
		+ '<section class="modal-body">'
		+ '<table>'
		+ '<tr>'
		+ '<th>Fun Fact: </th>'
		+ '<td>' + json[i].fact + '</td>'
		+ '</tr>'
		+ '</table>'
		+ '</section>'
		+ '<section class="modal-footer">'
		+ '<h3>' + json[i].footer + '</h3>'
		+ '</section></section>';
	}
}

createModals();

// Get the modal
let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName('close1')[0];
let span2 = document.getElementsByClassName('close2')[0];
let span3 = document.getElementsByClassName('close3')[0];

// When the user clicks the button, open the modal
img1.addEventListener('click', function() {
	modal1.style.display = 'block';
});

img2.addEventListener('click', function() {
	modal2.style.display = 'block';
});

img3.addEventListener('click', function() {
	modal3.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal

span1.addEventListener('click', function() {
	modal1.style.display = 'none';
});

span2.addEventListener('click', function() {
	modal2.style.display = 'none';
});

span3.addEventListener('click', function() {
	modal3.style.display = 'none';
});
