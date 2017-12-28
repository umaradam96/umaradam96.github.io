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
    modal.innerHTML += '<section class="modal-content">' +
      '<section class="modal-header">' +
      '<span class="close' + (i + 1) + '">&times;</span>' +
      '<h2>' + json[i].title + '</h2>' +
      '</section>' +
      '<section class="modal-body">' +
      '<table>' +
      '<tr>' +
      '<th>Fun Fact: </th>' +
      '<td>' + json[i].fact + '</td>' +
      '</tr>' +
      '</table>' +
      '</section>' +
      '<section class="modal-footer">' +
      '<h3>' + json[i].footer + '</h3>' +
      '</section></section>';
  }
}

createModals();
