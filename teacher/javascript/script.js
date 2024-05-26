const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

let isActive = false;
bar.addEventListener("click", () => {
  isActive = !isActive;
  if (isActive) {
    bar.classList.add("active");
    menu.classList.add("active");
  } else {
    bar.classList.remove("active");
    menu.classList.remove("active");
  }
});

//lottie player

for (let i = 1; i < 6; i++) {
  let id = "nnu-card" + i;
  let lottieId = "lottie_player" + i;
  let nnu_card = document.getElementById(id);
  let lottie_player = document.getElementById(lottieId);
  if (nnu_card) {
    nnu_card.addEventListener("mouseover", () => {
      console.log(lottie_player);
      lottie_player.play();
    });

    nnu_card.addEventListener("mouseleave", () => {
      console.log(lottie_player);
      lottie_player.stop();
    });
  }
}
