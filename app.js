document.addEventListener('DOMContentLoaded', () => {

	const headingTitle = document.getElementsByTagName('h1')[0];
	const headingInput = document.getElementById('first-form');
	const headingButton = document. getElementById('heading-name');
	const ol = document.querySelector('ol');
	const appendButton = document.querySelector('#appendListItem');
	const lastInput = document.querySelector('#second-form');
	const firstCheckbox = document.getElementById('checkbox2');
	let checkboxes = document.querySelectorAll('#checkbox');




	headingButton.addEventListener('click', (e) => {
		e.preventDefault();
		let inputValue = headingInput.value;
		headingTitle.innerHTML = inputValue;
		headingTitle.value = '';
		stringLength(headingInput);
					if (inputValue === '') {
				alert('Please write a title for your list!');
				let inputValue = headingInput.value;
				headingTitle.innerHTML = 'This is your Daily to-do List!';
			}
	});

	headingInput.addEventListener('keypress', (e) => {
		if (e.keyCode === 13 || e.which === 13) {
				e.preventDefault();
				let inputValue = headingInput.value;
				headingTitle.innerHTML = inputValue;
				headingTitle.value = '';
			if (inputValue === '') {
					alert('Please write a title for your list!');
					let inputValue = headingInput.value;
					headingTitle.innerHTML = 'This is your Daily to-do List!';
				}
			}
	});

		function createElement(elementName, property, value) {
			const element = document.createElement(elementName);
			element[property] = value;
			return element;
		}

		function appendTo(parentElement, childElement) {
			childElement.parentNode = parentElement;
			const append = parentElement.appendChild(childElement);
			return append;
		}

		function addClassAndId(elementName, idValue, classNameValue) {
			let element = elementName;
			element.setAttribute('id', idValue);
			element.className = classNameValue;
			return element;
		}



	function createNewListItem(text) {
		const outerDiv = createElement('div', 'id', 'list-item');
		const firstDiv = createElement('div', 'className', 'item-title');
		const secondDiv = createElement('div', 'className', 'buttons');
		appendTo(ol, outerDiv);
		appendTo(outerDiv, firstDiv);
		appendTo(outerDiv, secondDiv);
		const li = createElement('li', 'textContent', text);
		const input = createElement('input', 'type', 'checkbox');
		addClassAndId(input, 'checkbox', 'checkbox');
		appendTo(firstDiv, li);
		appendTo(firstDiv, input);
		const upButton = createElement('button', 'textContent', 'Up');
		const downButton = createElement('button', 'textContent', 'Down');
		const removeButton = createElement('button', 'textContent', 'Remove Item');
		const editButton = createElement('button', 'textContent', 'Edit');
		addClassAndId(upButton, '', 'btn btn-success');
		addClassAndId(downButton, '', 'btn btn-warning');
		addClassAndId(removeButton, 'remove-button', 'btn btn-danger');
		addClassAndId(editButton, 'last-button', 'btn btn-info');
		appendTo(secondDiv, upButton);
		appendTo(secondDiv, downButton);
		appendTo(secondDiv, removeButton);
		appendTo(secondDiv, editButton);
		return outerDiv;
	};

	appendButton.addEventListener('click', (e) => {
		if (lastInput.value !== '' || lastInput.value !== ' ') {}
			e.preventDefault();
			const text = lastInput.value;
			lastInput.value = '';
			const newListItem = createNewListItem(text);
	});

	lastInput.addEventListener('keypress', (e) => {
		if (e.keyCode === 13 && lastInput.value != '') {
			e.preventDefault();
			const text = lastInput.value;
			lastInput.value = '';
			const newListItem = createNewListItem(text);
		}
	});

	


		firstCheckbox.addEventListener('change', (e) => {
			const isChecked = e.target.checked;
			const lis = ol.children;
			if (isChecked === true) {
					for (let i = lis.length - 1; i >= 0; i--) {
						let li = lis[i];
						if (li.className === 'selected') {
							li.style.display = '';
							li.style.borderColor = '#59f442';
						} else {
							li.style.display = 'none';
						}
					}
			} else {
				for (let i = lis.length - 1; i >= 0; i--) {
				lis[i].style.display = '';
				}
			}
		}); 


});













/*//Function Declaration

function divide1(a, b) {
  return a / b; 
}

//Function Expression

const divide2 = function(a, b) {
  return a / b;
}

//Arrow Function Expression

const divide3 = (a, b) => {
  return a / b;
}

//Arrow Function Expression - concise

const divide4 = (a, b) => a / b;

*/
