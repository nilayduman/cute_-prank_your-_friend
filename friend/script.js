document.addEventListener("DOMContentLoaded", () => {
     const yesBtn = document.querySelector(".yes-btn");
     const noBtn = document.querySelector(".no-btn");
     const question = document.querySelector(".question");
     const gif = document.querySelector(".gif");
   
     const makeBearHappy = () => {
       question.textContent = "Kastamonu ayısı mutlu!";
       gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNng3NHp6a3hpOW9tNGllcDNsaWI4NWxpM3llMzlsMm9vdXVpZjFmOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AgVa4rSV8cTBpdLYjs/giphy.gif";
     };
   
     const moveNoButton = () => {
       const wrapper = document.querySelector(".wrapper");
       const wrapperRect = wrapper.getBoundingClientRect();
       const noBtnRect = noBtn.getBoundingClientRect();
   
       const maxX = wrapperRect.width - noBtnRect.width;
       const maxY = wrapperRect.height - noBtnRect.height;
   
       const randomX = Math.floor(Math.random() * maxX);
       const randomY = Math.floor(Math.random() * maxY);
   
       noBtn.style.left = `${randomX}px`;
       noBtn.style.top = `${randomY}px`;
     };
   
     yesBtn.addEventListener("click", makeBearHappy);
     noBtn.addEventListener("mouseover", moveNoButton);
   });
   
