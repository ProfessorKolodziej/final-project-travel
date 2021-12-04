var imgArr = [
    './img/wt/quiz1.png',
    './img/wt/quiz2.png',
    './img/wt/quiz3.png',
    './img/wt/quiz4.png',
    './img/wt/quiz4.png',
]
var imgList = [
    './img/result/img1.jpg',
    './img/result/img2.jpg',
    './img/result/img4.jpg',
]
var imgName = [
    'Los Cabos, Mexico',
    'Niagara Falls, NY',
    'Boston,MA',
    'Miami,FL',
    'Death Valley National Park, CA',
]
var pageArr = [
    ['SEASIDE','WARM','ECONOMIC','FRIENDS','FAMILY'],
    ['NATURE','COOL','LUXURY','FRIENDS','FAMILY'],
    ['CITY','COOL','FRIENDS','LOVERS'],
    ['SEASIDE','WARM','LUXURY','LOVERS'],
    ['NATURE','WARM','ECONOMIC','FRIENDS'],
]
var pageArrNum;

window.onload = function (ev) {
    let MAX = localStorage.getItem('Max')
    var quiz_mark = document.querySelector(".quiz_mark");
    var quiz_banner = document.querySelector(".quiz_banner");
    var res_img = document.querySelector(".res_img");
    quiz_mark.innerHTML = imgName[MAX]
    quiz_banner.src = imgArr[MAX]
    res_img.onclick = function () {
        window.location.href = 'page'+(Number(MAX)+1)+'.html'
    }
}