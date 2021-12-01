"use strict";

const wrapper = document.querySelector(".wrapper");
const circleAnimate = document.querySelector(".circle-animate");
circleAnimate.remove();
const soundsItems = document.querySelectorAll(".sound-item");
const audio = document.querySelector(".audio");
const loader = document.querySelector(".loader");
loader.remove();

let arrSounds = [
	"Sounds/1.mp3",
	"Sounds/2.mp3",
	"Sounds/3.mp3",
	"Sounds/4.mp3",
	"Sounds/5.mp3",
	"Sounds/6.mp3",
	"Sounds/7.mp3",
	"Sounds/8.mp3",
];

audio.addEventListener("timeupdate", () => {
	let src = audio.src.slice(audio.src.length - 12);
	let index = arrSounds.indexOf(src);
	let elem = soundsItems[index].querySelector(".loader");
	elem.classList.add("loader_disable");
});

wrapper.addEventListener("click", (event) => {
	let target = event.target;

	if (target.matches(".sound-item")) {

		if (!target.classList.contains("has")) {
			let loaderClone = loader.cloneNode(true);
			target.append(loaderClone);
			target.classList.add("has");
		}

		let circle = circleAnimate.cloneNode(true);
		target.append(circle);

		let index = Number(target.dataset.target);
		audio.src = arrSounds[index];
		audio.play();

		setTimeout(() => {
			circle.remove();
		}, 1000);

	}

});

document.addEventListener("keydown", (event) => {
	let code = event.code;

	if (code === "KeyQ") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[0].append(circle);

		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[0];
		audio.play();

	}

	if (code === "KeyW") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[1].append(circle);
		
		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[1];
		audio.play();
	}

	if (code === "KeyE") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[2].append(circle);
		
		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[2];
		audio.play();
	}

	if (code === "KeyR") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[3].append(circle);
		
		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[3];
		audio.play();
	}

	if (code === "KeyT") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[4].append(circle);
		
		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[4];
		audio.play();
	}

	if (code === "KeyY") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[5].append(circle);
		
		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[5];
		audio.play();
	}

	if (code === "KeyU") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[6].append(circle);
		
		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[6];
		audio.play();
	}

	if (code === "KeyI") {

		let circle = circleAnimate.cloneNode(true);
		soundsItems[7].append(circle);
		
		setTimeout(() => {
			circle.remove();
		}, 1000);

		audio.src = arrSounds[7];
		audio.play();
	}

});









