// function makeDivs(numDivs) {
//   const container = document.querySelector(".grid-container");

//   for (let d = 0; d < numDivs * numDivs; d++) {
//     let cells = document.createElement("div");
//     const boxSize = 450 / numDivs;
//     cells.classList.add("cells");
//     cells.style.width = boxSize + "px";
//     cells.style.height = boxSize + "px";
//     container.appendChild(cells);
//   }
// }

// makeDivs(16);

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
          div.classList.add("colour-change");
        } else if (document.getElementById("red").checked) {
          div.classList.add("bg-red");
        } else if (document.getElementById("blue").checked) {
          div.classList.add("bg-blue");
        }
      });
    });
  };
  hoverEffect();
};

makeDivs(16);

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
    div.classList.remove("bg-red", "bg-blue", "colour-change");
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
    div.classList.remove("bg-red", "bg-blue", "colour-change", "bg-clear");
    div.addEventListener("mouseover", () => {
      div.classList.remove("bg-clear");
      div.classList.add(
        document.getElementsByTagName('input[type="radio"]').checked
      );
    });
  });
});
