let hiddenInput = document.getElementById('moviesPlayed');
let listP = document.getElementById('played');
let listO = document.getElementById('others');
let listPlayedId, listPlayed, listOthersId, listOthers, lp, lo;
let arrPlayed, arrOthers;

function updateLists() {
	lp = document.querySelectorAll('#played > li');
	lo = document.querySelectorAll('#others > li');
	arrPlayed = [];
	listPlayedId = [];
	listPlayed = [];
	lp.forEach((x) => {
		listPlayedId.push(x.getAttribute('data-id'));
		listPlayed.push(x.textContent);
		arrPlayed.push(x);
	});
	listOthersId = [];
	listOthers = [];
	arrOthers = [];
	lo.forEach((x) => {
		listOthersId.push(x.getAttribute('data-id'));
		listOthers.push(x.textContent);
		arrOthers.push(x);
	});
}

function checkMoviesAdded() {
	updateLists();
	listPlayedId = listPlayedId.join(',');
	hiddenInput.value = listPlayedId;
}

function addEvents() {
	lp.forEach((x) => {
		x.onclick = () => {
			removePlayed(x);
		};
	});

	lo.forEach((x) => {
		x.onclick = () => {
			addPlayed(x);
		};
	});
}

function removePlayed(movie) {
	arrOthers.push(arrPlayed[arrPlayed.indexOf(movie)]);
	arrPlayed.splice(arrPlayed.indexOf(movie), 1);
	renderLists();
}

function addPlayed(movie) {
	arrPlayed.push(arrOthers[arrOthers.indexOf(movie)]);
	arrOthers.splice(arrOthers.indexOf(movie), 1);
	renderLists();
}

function renderLists() {
	listP.innerHTML = '';
	listO.innerHTML = '';
	arrPlayed.forEach((x) => {
		let list = document.createElement('li');
		list.setAttribute('data-id', x.getAttribute('data-id'));
		list.textContent = x.textContent;
		listP.append(list);
	});

	arrOthers.forEach((x) => {
		let list = document.createElement('li');
		list.setAttribute('data-id', x.getAttribute('data-id'));
		list.textContent = x.textContent;
		listO.append(list);
	});

	checkMoviesAdded();
	addEvents();
}

checkMoviesAdded();
addEvents();
