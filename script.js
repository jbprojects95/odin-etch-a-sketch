const makeDivs = (numValue) => {
  const container = document.querySelector(".grid-container");
  for (let d = 0; d < numValue * numValue; d++) {
    let cells = document.createElement("div");
    const boxSize = 500 / numValue;
    cells.classList.add("cells");
    cells.style.width = boxSize + "px";
    cells.style.height = boxSize + "px";
    container.appendChild(cells);
  }

  const hoverEffect = () => {
    const hover = document.querySelectorAll(".cells");
    hover.forEach((div) => {
      div.addEventListener("mouseover", function () {
        if (document.getElementById("black").checked) {
          div.classList.add("bg-black");
          div.classList.remove("bg-red", "bg-blue");
          div.style.backgroundColor = "";
        } else if (document.getElementById("red").checked) {
          div.classList.add("bg-red");
          div.classList.remove("bg-black", "bg-blue");
          div.style.backgroundColor = "";
        } else if (document.getElementById("blue").checked) {
          div.classList.add("bg-blue");
          div.classList.remove("bg-black", "bg-red");
          div.style.backgroundColor = "";
        } else if (document.getElementById("random").checked) {
          div.style.backgroundColor = randomColour();
        }
      });
    });
  };
  hoverEffect();
};

makeDivs(16);

const randomColour = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColour = `rgb(${x}, ${y}, ${z})`;
  return bgColour;
};

const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".range-value");
slider.addEventListener("change", () => {
  const container = document.querySelector(".grid-container");
  sliderValue.textContent = slider.value;
  if (container.hasChildNodes()) {
    container.innerHTML = "";
  }
  makeDivs(slider.value);
});

let clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  const gridDivs = document.querySelectorAll(".cells");
  gridDivs.forEach((div) => {
    div.classList.add("bg-clear");
    div.classList.remove("bg-red", "bg-blue", "bg-black");
    div.style.backgroundColor = "";
    div.addEventListener("mouseover", () => {
      div.classList.remove("bg-clear");
      div.classList.add(
        document.getElementsByTagName('input[type="radio"]').checked
      );
    });
  });
});

let eraseBtn = document.querySelector(".erase");

eraseBtn.addEventListener("click", () => {
  const hoverErase = document.querySelectorAll(".cells");
  hoverErase.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.classList.add("bg-clear");
    });
  });
});

drawBtn = document.querySelector(".draw");

drawBtn.addEventListener("click", () => {
  const gridDivs = document.querySelectorAll(".cells");
  gridDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.remove("bg-clear");
      hoverEffect();
    });
  });
});
