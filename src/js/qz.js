var imgArr = [
    './img/wt/quiz1.png',
    './img/wt/quiz2.png',
    './img/wt/quiz3.png',
    './img/wt/quiz4.png',
]
var quiz = document.querySelector(".quiz");
var pageArr = [
    ['SEASIDE','WARM','ECONOMIC','FRIENDS','FAMILY',0],
    ['NATURE','COOL','LUXURY','FRIENDS','FAMILY',0],
    ['CITY','COOL','FRIENDS','LOVERS',0],
    ['SEASIDE','WARM','LUXURY','LOVERS',0],
    ['NATURE','WARM','ECONOMIC','FRIENDS',0],
]

var className = ''
var text = 0;
var btn1 = document.querySelectorAll('.btn1');
var btn2 = document.querySelectorAll('.btn2');
var btn3 = document.querySelectorAll('.btn3');
var btn4 = document.querySelectorAll('.btn4');


var wt_box1 = document.querySelector(".wt_box1");
var wt_box2 = document.querySelector(".wt_box2");
var wt_box3 = document.querySelector(".wt_box3");
var wt_box4 = document.querySelector(".wt_box4");

var ele = document.querySelectorAll(".ele");


// this.getAttribute('class').split(' ')[2];
for(let i = 0; i < btn1.length; i++){
    btn1[i].onclick = function (ev) {
        className = this.getAttribute('class').split(' ')[2];
        for(let j = 0; j < pageArr.length; j++){
            if(pageArr[j].indexOf(className) != -1){
                pageArr[j][pageArr[j].length-1]++
            }
        }
        text++;
        wt_box1.style.display = 'none';
        wt_box2.style.display = 'block';
        wt_box3.style.display = 'none';
        wt_box4.style.display = 'none';
        ele[0].classList.remove("eleActive")
        ele[1].classList.add("eleActive")
        quiz.src = imgArr[1]
    }
}

for(let i = 0; i < btn2.length; i++){
    btn2[i].onclick = function (ev) {
        className = this.getAttribute('class').split(' ')[2];
        for(let j = 0; j < pageArr.length; j++){
            if(pageArr[j].indexOf(className) != -1){
                pageArr[j][pageArr[j].length-1]++
            }
        }
            wt_box1.style.display = 'none';
            wt_box2.style.display = 'none';
            wt_box3.style.display = 'block';
            wt_box4.style.display = 'none';
            ele[1].classList.remove("eleActive")
            ele[2].classList.add("eleActive")
            quiz.src = imgArr[2]
    }
}

for(let i = 0; i < btn3.length; i++){
    btn3[i].onclick = function (ev) {
        className = this.getAttribute('class').split(' ')[2];
        for(let j = 0; j < pageArr.length; j++){
            if(pageArr[j].indexOf(className) != -1){
                pageArr[j][pageArr[j].length-1]++
            }
        }
            wt_box1.style.display = 'none';
            wt_box2.style.display = 'none';
            wt_box3.style.display = 'none';
            wt_box4.style.display = 'block';
            ele[2].classList.remove("eleActive")
            ele[3].classList.add("eleActive")
            quiz.src = imgArr[3]
    }
}
for(let i = 0; i < btn4.length; i++){
    btn4[i].onclick = function (ev) {
        className = this.getAttribute('class').split(' ')[2];
        for(let j = 0; j < pageArr.length; j++){
            if(pageArr[j].indexOf(className) != -1){
                pageArr[j][pageArr[j].length-1]++
            }
        }
        console.log(pageArr);
        var numTextArr = []
        for(let s = 0; s < pageArr.length; s++){
            numTextArr.push(pageArr[s][pageArr[s].length-1])
        }
        console.log(numTextArr);
        let MaxText = Math.max(...numTextArr)
        localStorage.setItem('Max',numTextArr.indexOf(MaxText))
        window.location.href = 'result.html'
    }
}