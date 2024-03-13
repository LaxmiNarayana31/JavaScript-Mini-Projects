const buttons = document.querySelectorAll(".button");
// console.log(buttons) -> it show node list in console

const resetButton = document.querySelector("#reset-game");

const body = document.querySelector("body");
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (demo) {
    console.log(demo);
    console.log(demo.target);
    switch (demo.target.id) {
      case "Box1":
        body.style.backgroundColor = "aqua";
        break;
      case "Box2":
        body.style.backgroundColor = "bisque";
        break;
      case "Box3":
        body.style.backgroundColor = "yellow";
        break;
      case "Box4":
        body.style.backgroundColor = "chocolate";
        break;
      case "Box5":
        body.style.backgroundColor = "green";
        break;
      case "Box6":
        body.style.backgroundColor = "orange";
        break;
      case "Box7":
        body.style.backgroundColor = "gold";
    }
    resetButton.addEventListener("click", function () {
      body.style.backgroundColor = ""; // It sets the default background color
      // body.style.backgroundColor = "white"; // You can specify any color
    });
  });
});
