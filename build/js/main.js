"use strict";var filterBlock=document.querySelector(".filter__dropdown"),showBtn=document.querySelector(".inputfield__show"),showArrow=showBtn.querySelector(".inputfield__arrow"),showText=showBtn.querySelector(".show__text");filterBlock.style.height="0px",filterBlock.style.overflow="hidden",filterBlock.style.transition="height 1s",showBtn.addEventListener("click",function(){showBtn.hasAttribute("show")?(showBtn.removeAttribute("show"),showText.innerHTML="Розгорнути розширений пошук",filterBlock.style.height="0px",showArrow.style.transform="rotate(0deg)"):(showBtn.setAttribute("show",""),showText.innerHTML="Згорнути розширений пошук",filterBlock.style.height="auto",showArrow.style.transform="rotate(180deg)")});