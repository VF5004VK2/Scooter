let FAQsLab = [...document.querySelectorAll('.FAQsLabs')]
let FAQsLabParagraph = [...document.querySelectorAll('.FAQsLabParagraph')]
for (let i = 0; i <= FAQsLab.length; i++) {
    FAQsLab[i].addEventListener('click',function(){
        FAQsLabParagraph[i].classList.toggle("active")
    })
}
