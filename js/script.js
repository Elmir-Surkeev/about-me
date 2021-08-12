const filterBtn = document.querySelectorAll('.filter-btn'),
      recordsWrap = document.querySelector('.records'),
      recordsNumbers = document.querySelectorAll('.number')
// const skills_wrap = document.querySelector('skills');
// const skills_bars = document.querySelectorAll('skill-progress');

filterBtn.forEach((btn) =>{
   btn.addEventListener(('click'), () =>{
      filterBtn.forEach((button) => button.classList.remove('active'));
      btn.classList.add('active');

      let filterValue = btn.dataset.filter;
      $(".grid").isotope({filter: filterValue});
   });
});
$('.grid').isotope({
   itemSelector: '.grid-item',
   layoutMode: 'fitRows',
   transitionDuration: '0.6s',
});


window.addEventListener("scroll", () => {
   skillsEffect();
   countUp();
 });
 
 function checkScroll(el) {
   let rect = el.getBoundingClientRect();
   if (window.innerHeight >= rect.top + el.offsetHeight) return true;
   return false;
 }
 
 function skillsEffect() {
   if (!checkScroll(skills_wrap)) return;
   skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
 }
 
 function countUp() {
   if (!checkScroll(records_wrap)) return;
   records_numbers.forEach((numb) => {
     const updateCount = () => {
       let currentNum = +numb.innerText;
       let maxNum = +numb.dataset.num;
       let speed = 100;
       const increment = Math.ceil(maxNum / speed);
 
       if (currentNum < maxNum) {
         numb.innerText = currentNum + increment;
         setTimeout(updateCount, 1);
       } else {
         numb.innerText = maxNum;
       }
     };
 
     setTimeout(updateCount, 400);
   });
 }