class PixelPainter {
  constructor() {
    //DOM elements, grid container, color picker and UI buttons
    this.gridContainer = document.querySelector(".grid-container");
    this.currentColor = "black";
    this.colorPicker = document.querySelector("#paint-color");
    this.resizeButton = document.querySelector("#resize");
    this.clearButton = document.querySelector("#clear");

    this.rainbowButton = document.querySelector("#rainbow");
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
}

const painter = new PixelPainter();
painter.createGrid(); //overload this to change the grid size
