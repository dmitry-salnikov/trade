"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}var filterBlock=document.querySelector(".filter__dropdown"),showBtn=document.querySelector(".inputfield__show"),showArrow=showBtn.querySelector(".inputfield__arrow"),showText=showBtn.querySelector(".show__text");filterBlock.style.height="0px",filterBlock.style.overflow="hidden",filterBlock.style.transition="height 1s",showBtn.addEventListener("click",function(){showBtn.hasAttribute("show")?(showBtn.removeAttribute("show"),showText.innerHTML="Розгорнути розширений пошук",filterBlock.style.height="0px",showArrow.style.transform="rotate(180deg)"):(showBtn.setAttribute("show",""),showText.innerHTML="Згорнути розширений пошук",filterBlock.style.height="auto",showArrow.style.transform="rotate(0deg)")});var toTopBtn=document.querySelector(".copyright__up"),topFunction=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};toTopBtn.addEventListener("click",topFunction);var favoriteBtn=[].concat(_toConsumableArray(document.querySelectorAll(".procurement__button")));favoriteBtn.map(function(t){t.addEventListener("click",function(t){t.path.map(function(t){if([].concat(_toConsumableArray(t.classList)).includes("procurement__button")){var e=t.querySelector(".procurement__button--star"),r=t.querySelector(".procurement__button--text");t.hasAttribute("check")?(t.removeAttribute("check"),r.innerHTML="До обраного",e.classList.remove("check-star")):(t.setAttribute("check",""),r.innerHTML="В обраному",e.classList.add("check-star"))}})})});