import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as u,i as m}from"./assets/vendor-77e16229.js";const f="/goit-js-hw-10/assets/alert-icon-c43156cd.svg",t={timeInput:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),dayBlock:document.querySelector("[data-days]"),hoursBlock:document.querySelector("[data-hours]"),minutesBlock:document.querySelector("[data-minutes]"),secondsBlock:document.querySelector("[data-seconds]")};let r,a;const h={message:"Please choose a date in the future",position:"topRight",backgroundColor:"#B51B1B",messageColor:"#fff",messageSize:"16",imageWidth:302,close:"../img/close-icon.svg",closeOnEscape:!0,closeOnClick:!0,progressBarColor:"#b51b1b",iconUrl:f,iconColor:"#FAFAFB"};t.timeInput.disabled=!1;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<Date.now()?m.show(h):(t.startBtn.disabled=!1,t.startBtn.classList.add("right-date"))}};u(t.timeInput,p);t.startBtn.addEventListener("click",()=>{t.startBtn.classList.remove("right-date"),t.timeInput.disabled=!0,t.startBtn.disabled=!0,a=setInterval(()=>{const e=Date.now(),n=r-e,s=g(n),o=B(s);t.dayBlock.textContent=o.days,t.hoursBlock.textContent=o.hours,t.minutesBlock.textContent=o.minutes,t.secondsBlock.textContent=o.seconds},1e3),setTimeout(()=>{clearInterval(a),t.timeInput.disabled=!1},r-Date.now())});function g(e){const c=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),d=Math.floor(e%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:l,seconds:d}}function B({days:e,hours:n,minutes:s,seconds:o}){return e=e.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),s=s.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),{days:e,hours:n,minutes:s,seconds:o}}
//# sourceMappingURL=commonHelpers.js.map
