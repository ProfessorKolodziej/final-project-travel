import img1 from '../img/wt/quiz1.png';
import img2 from '../img/wt/quiz2.png';
import img3 from '../img/wt/quiz3.png';
import img4 from '../img/wt/quiz4.png';
import imgResult1 from '../img/result/img1.jpg';
import imgResult2 from '../img/result/img2.jpg';
import imgResult4 from '../img/result/img4.jpg';

const imgArr = [
	img1,
	img2,
	img3,
	img4,
];
const imgList = [ // eslint-disable-line no-unused-vars
	imgResult1,
	imgResult2,
	imgResult4,
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
	if (quiz_mark !== null) {
		quiz_mark.innerHTML = imgName[MAX];
	}
	if (quiz_banner !== null) {
		quiz_banner.src = imgArr[MAX];
	}
	if (res_img !== null) {
		res_img.onclick = function () {
			window.location.href = `page${Number(MAX) + 1}.html`;
		};
	}
};
