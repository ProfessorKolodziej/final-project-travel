const imgArr = [
	'./img/wt/quiz1.png',
	'./img/wt/quiz2.png',
	'./img/wt/quiz3.png',
	'./img/wt/quiz4.png',
	'./img/wt/quiz4.png',
];
const imgList = [ // eslint-disable-line no-unused-vars
	'./img/result/img1.jpg',
	'./img/result/img2.jpg',
	'./img/result/img4.jpg',
];
const imgName = [
	'Los Cabos, Mexico',
	'Niagara Falls, NY',
	'Boston,MA',
	'Miami,FL',
	'Death Valley National Park, CA',
];
const pageArr = [ // eslint-disable-line no-unused-vars
	['SEASIDE', 'WARM', 'ECONOMIC', 'FRIENDS', 'FAMILY'],
	['NATURE', 'COOL', 'LUXURY', 'FRIENDS', 'FAMILY'],
	['CITY', 'COOL', 'FRIENDS', 'LOVERS'],
	['SEASIDE', 'WARM', 'LUXURY', 'LOVERS'],
	['NATURE', 'WARM', 'ECONOMIC', 'FRIENDS'],
];
let pageArrNum; // eslint-disable-line no-unused-vars

window.onload = function (ev) { // eslint-disable-line no-unused-vars
	const MAX = localStorage.getItem('Max');
	const quiz_mark = document.querySelector('.quiz_mark');
	const quiz_banner = document.querySelector('.quiz_banner');
	const res_img = document.querySelector('.res_img');
	quiz_mark.innerHTML = imgName[MAX];
	quiz_banner.src = imgArr[MAX];
	res_img.onclick = function () {
		window.location.href = `page${Number(MAX) + 1}.html`;
	};
};
