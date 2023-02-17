const header = document.querySelector('header');
const section = document.querySelector('section');
const requestURL = './superheroes.json';
const request = new XMLHttpRequest();
request.open('GET',requestURL);