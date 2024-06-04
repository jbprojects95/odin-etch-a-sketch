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
};

makeDivs(16);

const hover = document.querySelectorAll(".cells");
hover.forEach((div) => {
  div.addEventListener("mouseover", function () {
    div.classList.add("colour-change");
  });
});

let clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  const gridDivs = document.querySelectorAll(".cells");
  gridDivs.forEach((div) => {
    div.style.backgroundColor = "white";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
});

let eraseBtn = document.querySelector(".erase");

eraseBtn.addEventListener("click", () => {
  const hoverErase = document.querySelectorAll(".cells");
  hoverErase.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "white";
    });
  });
});

drawBtn = document.querySelector(".draw");

drawBtn.addEventListener("click", () => {
  const blackHover = document.querySelectorAll(".cells");
  blackHover.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
});
