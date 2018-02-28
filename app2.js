document.addEventListener('DOMContentLoaded', () => {
	
	// selection of the input to create new items
	const secondForm = document.getElementById('second-form');
	
	// selection of the addToToDoListButton(1)
	const appendListItem = document.getElementById('appendListItem');

	// select the to do container
	const ol = document.getElementById('list');

	// select the heading h1
	const headingTitle = document.getElementsByClassName('jumbotron')[0];

	// select the first form 
	const firstForm = document.getElementById('first-form');

	// select the first input button
	const headingButton = document.getElementById('heading-name');

	// variable to store the title text 
	let title;

	// variable to which the input is saved
	let task;

	// enumerate list items
	let count = 0;

	// select the filter checkbox 
	const filterCheckbox = document.getElementById('checkbox2');

	// variable to check if the checkbox has been selected by the user or not
	const isChecked = checkbox.checked;


	// select all the remaining checkboxes
	let checkbox = document.querySelectorAll('.checkbox');

	// variable to save the total ammount of checkboxes
	const checkboxes = [];



	//event listener for all other checkboxes
	filterCheckbox.addEventListener('change', () => {
		
	});

	// add event listener to the button that changes the title
	headingButton.addEventListener('click', (e) => {
			title = firstForm.value;
			headingTitle.innerHTML 	= title;
			console.log(title);
			firstForm.value = '';
	});

	// add event listener to submit the form once enter is pressed
	firstForm.addEventListener('keypress', (e) => {
		if (e.keyCode === 13 && (firstForm.value !== '')) {
			title = firstForm.value;
			headingTitle.innerHTML 	= title;
			console.log(title);
			firstForm.value = '';
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

	function createNewListItem(task, count) {
		const outerDiv = createElement('div', 'className', 'list-item');
		outerDiv.id = count;
		const firstDiv = createElement('div', 'className', 'item-title');
		const secondDiv = createElement('div', 'className', 'buttons');
		appendTo(ol, outerDiv);
		appendTo(outerDiv, firstDiv);
		appendTo(outerDiv, secondDiv);
		const li = createElement('li', 'textContent', task);
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

	// add event listener to button
	appendListItem.addEventListener('click', (e) => {
			// e.preventDefault();
			// save input.value to a const
			task = secondForm.value;
			count++;
			createNewListItem(task, count);
			secondForm.value = '';
	});

	// add event listener to the input that loads new list items (on enter)
	secondForm.addEventListener('keypress', (e) => {	
		if (e.keyCode === 13 && (secondForm.value !== '')) {
			task = secondForm.value;
			count++;
			createNewListItem(task, count);
			secondForm.value = '';
		}
	});
});

