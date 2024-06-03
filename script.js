function makeDivs(numDivs) {
  const container = document.querySelector(".grid-container");
  for (let d = 0; d < numDivs * numDivs; d++) {
    let cells = document.createElement("div");
    const boxSize = 450 / numDivs;
    cells.classList.add("cells");
    cells.style.width = boxSize + "px";
    cells.style.height = boxSize + "px";
    container.appendChild(cells);
  }
}

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
    div.classList.remove("colour-change");
  });
});

let eraseBtn = document.querySelector(".erase");

eraseBtn.addEventListener("click", () => {
  const hoverErase = document.querySelectorAll(".cells");
  hoverErase.forEach((div) => {
    div.addEventListener("mouseover", function () {
      div.classList.remove("colour-change");
    });
  });
});
