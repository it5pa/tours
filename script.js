const flipCard = document.querySelector(".flip-card-inner")
const flipCardBack = document.querySelector(".flip-card-back")

flipCard.addEventListener ('click', () => {
    // flipCardBack.style.zIndex = "0";
    // flipCard.style.zIndex = "100";
    if(!flipCard.classList.contains('flipped'))
    {
    flipCard.classList.add('flipped')
    } else {
        flipCard.classList.remove('flipped')
      };
});


