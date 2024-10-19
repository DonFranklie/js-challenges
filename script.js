const whatDoYouMean = document.querySelector(".what-do-you-mean");

const amSurprised = document.querySelector(".am-surprised");

amSurprised.style.cursor = "pointer";

amSurprised.addEventListener('click', () => {
whatDoYouMean.style.display = "block";
whatDoYouMean.classList.add("animation");

});