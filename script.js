class PixelPainter {
  constructor() {
    //DOM elements, grid container, color picker and UI buttons
    this.gridContainer = document.querySelector(".grid-container");
    this.currentColor = "black";
    this.colorPicker = document.querySelector("#paint-color");
    this.resizeButton = document.querySelector("#resize");
    this.clearButton = document.querySelector("#clear");
    this.rainbowButton = document.querySelector("#rainbow");

    this.setupEventListeners();
  }

  // methods

  createGrid(cellCount = 45) {
    const containerSize = this.gridContainer.clientHeight;
    const cellSize = containerSize / cellCount;
    for (let i = 0; i < cellCount; i++) {
      for (let j = 0; j < cellCount; j++) {
        const grid = document.createElement("div");
        grid.classList.add("cell");
        grid.style.width = `${cellSize}px`;
        grid.style.height = `${cellSize}px`;
        this.gridContainer.appendChild(grid);
      }
    }
  }

  resizeGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.remove();
    });
    const cellCount = prompt("Enter the number of cells per side (Max 80):");

    if (cellCount > 80) {
      this.createGrid(80);
    } else if (cellCount < 1) {
      this.createGrid(2);
    } else {
      this.createGrid(cellCount);
    }
    this.drawPixel(this.currentColor);
  }
  drawPixel(color = "black") {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("mouseover", (e) => {
        if (e.buttons === 1) {
          return;
        }
        cell.style.backgroundColor = color;
      });

      cell.addEventListener("click", () => {
        cell.style.backgroundColor = color;
      });
    });
  }
  setupEventListeners() {
    this.resizeButton.addEventListener("click", () => {
      this.resizeGrid();
      this.rainbowButton.classList.remove("rainbow-btn");
      this.rainbowButton.classList.add("control-button");
    });
  }
}

const painter = new PixelPainter();
painter.createGrid(); //overload this to change the grid size
painter.drawPixel();
