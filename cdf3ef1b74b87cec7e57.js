var pageArrNum,imgArr=["./img/wt/quiz1.png","./img/wt/quiz2.png","./img/wt/quiz3.png","./img/wt/quiz4.png","./img/wt/quiz4.png"],imgList=["./img/result/img1.jpg","./img/result/img2.jpg","./img/result/img4.jpg"],imgName=["Los Cabos, Mexico","Niagara Falls, NY","Boston,MA","Miami,FL","Death Valley National Park, CA"],pageArr=[["SEASIDE","WARM","ECONOMIC","FRIENDS","FAMILY"],["NATURE","COOL","LUXURY","FRIENDS","FAMILY"],["CITY","COOL","FRIENDS","LOVERS"],["SEASIDE","WARM","LUXURY","LOVERS"],["NATURE","WARM","ECONOMIC","FRIENDS"]];window.onload=function(i){var e=localStorage.getItem("Max"),g=document.querySelector(".quiz_mark"),r=document.querySelector(".quiz_banner"),m=document.querySelector(".res_img");g.innerHTML=imgName[e],r.src=imgArr[e],m.onclick=function(){window.location.href="page".concat(Number(e)+1,".html")}};