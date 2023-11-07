const buttonEl = document.getElementById("calculate");
const birthdayInputEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateResultAge() {
	const birthdayValue = birthdayInputEl.value;
	if (birthdayValue === "") {
		alert("please enter a valid date");
	} else {
		const age = getAge(birthdayValue);
		console.log(age);
		resultEl.innerHTML = `Your age is ${age} years old`;
	}
}

function getAge(birthdayValue) {
	const currentDate = new Date();
	const birthdayDate = new Date(birthdayValue);
	let age = currentDate.getFullYear() - birthdayDate.getFullYear();
	const month = currentDate.getMonth() - birthdayDate.getMonth();

	if (
		month < 0 ||
		(month === 0 && currentDate.getDate() < birthdayDate.getDate())
	) {
		age--;
	}

	return age;
}

buttonEl.addEventListener("click", calculateResultAge);
