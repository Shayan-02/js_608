const range = document.querySelector("input");
const section = document.querySelector(".wrapper");

function setBrightness(event) {
  const brightness = event.target.value;

  section.style.filter = `brightness(${brightness}%)`;
}

range.addEventListener("change", setBrightness);
