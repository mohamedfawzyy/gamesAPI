import {UI} from './UI.js'
import {showGames} from './games.js';
import { details } from './details.js';
 let result=[];
 let cards;
 let detailsdata;
let Xmark;
let mainContainer=document.querySelector("#main_container");
mainContainer.innerHTML=showGames.createMainPage();
let links=document.querySelectorAll(".nav-link");
export let row=document.querySelector(".row");
 for (const link of links) {
	link.addEventListener("click",function(e){
		e.preventDefault();
		links.forEach(element => {
			element.classList.remove("active");
		});
		e.target.classList.add("active");
		fire(e.target.innerHTML);
	})
 }
 fire();
async function getData(category){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b42216a68fmsh9be94f23ecbceb7p179c7fjsn525c0a6bc203',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	 result = await response.json();
} catch (error) {
	console.error(error);
}
}
async function fire(category='mmorpg'){
    await getData(category);
    UI.displayGames(result);
	cards=document.querySelectorAll('.card');
	setEventsOnCards();
};

function setEventsOnCards(){
	for (const card of cards) {
		card.addEventListener("click",function(){
			let id=this.getAttribute("id_card");
			getDetails(id);
		})
	}
}
async function getDetails(id){
	const url1 = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b42216a68fmsh9be94f23ecbceb7p179c7fjsn525c0a6bc203',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url1, options);
	const result = await response.json();	
	detailsdata= UI.getDetails(result);
	let box=details.createDetails(detailsdata);
	 if(document.querySelector('#details')){
		document.querySelector('#details').remove();
	 }
	 let section=document.createElement('div');
	 section.innerHTML=box;
	 document.querySelector("#main_container").appendChild(section);
	document.getElementById("home").classList.replace('d-block','d-none');
	document.getElementById("details").classList.replace('d-none','d-block');
	Xmark=document.querySelector(".fa-xmark");
	Xmark.addEventListener("click", function(){
		document.getElementById("home").classList.replace('d-none','d-block');
		document.getElementById("details").classList.replace('d-block','d-none');
	})
	document.getElementById("details").classList.replace('d-none', 'd-block');
} catch (error) {
	console.error(error);
}
}


