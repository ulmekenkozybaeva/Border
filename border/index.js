const range1 = document.getElementById("range1");
const range2 = document.getElementById("range2");
const range3 = document.getElementById("range3");
const range4 = document.getElementById("range4");
const shape = document.getElementById("shape");

range1.addEventListener("input", updateShape);
range2.addEventListener("input", updateShape);
range3.addEventListener("input", updateShape);
range4.addEventListener("input", updateShape);

function updateShape() {
  shape.innerHTML = `
  <div id="shape"
  style = "
  width: 200px;
  height: 200px;
  border: 2px solid black;
  border-radius: 0;
  transition: all 0.2s ease-in-out; 
  border-top-left-radius: ${range1.value}px;
  border-top-right-radius: ${range2.value}px;
  border-bottom-right-radius: ${range3.value}px;
  border-bottom-left-radius: ${range4.value}px;"></div>`
}