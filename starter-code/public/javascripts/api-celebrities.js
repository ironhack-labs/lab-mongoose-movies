document.addEventListener(
	'DOMContentLoaded',
	() => {
		function getAllCelbritiesAndLoadInPage() {
			let list = document.getElementById('container__listCelebrities');
			axios
				.get('http://localhost:3000/api/v1/celebrities')
				.then((response) => {
					list.innerHTML = '';
					let celebrities = response.data.reverse();
					celebrities.forEach((celebrity) => {
						let newCelebrityDiv = document.createElement('div');
						newCelebrityDiv.innerHTML = `
            <h4> Name : ${celebrity.name} </h4>
            <h6> Occupation: ${celebrity.occupation} </h6>
            <p> Catch Phrase: ${celebrity.catchPhrase} </p>
            `;
						list.appendChild(newCelebrityDiv);
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}

		setTimeout(getAllCelbritiesAndLoadInPage, 1000);

		document.getElementById('container__celebrity__button').onclick = () => {
			const celebrity = {
				name: document.getElementById('container__celebrity__nameinput').value,
				occupation: document.getElementById(
					'container__celebrity__occupationinput',
				).value,
				catchPhrase: document.getElementById(
					'container__celebrity__catchphraseinput',
				).value,
			};

			axios
				.post('http://localhost:3000/api/v1/celebrities', celebrity)
				.then(() => {
					getAllCelbritiesAndLoadInPage();
					document.getElementById('container__celebrity__nameinput').value = '';
					document.getElementById(
						'container__celebrity__occupationinput',
					).value = '';
					document.getElementById(
						'container__celebrity__catchphraseinput',
					).value = '';
				})
				.catch((err) => {
					console.log(err);
				});
		};
	},
	false,
);
