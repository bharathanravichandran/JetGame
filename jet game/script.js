let board = document.getElementById("board");
let block1 = document.getElementById("square1");
let block2 = document.getElementById("square2");
let block3 = document.getElementById("square3");
let car = document.getElementById("hero");
let bullet = document.getElementById("gun");

document.addEventListener("keydown", (event)=>{
    var left= parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    if(event.key === "ArrowLeft"){
        if(left>0){
            car.style.left = left - 50 + "px";
            gun.style.left = left - 50 + "px";
        }
    }
    if(event.key === "ArrowRight"){
        if(left<450){
            car.style.left = left + 50 + "px";
            gun.style.left = left + 50 + "px";
        }
    }
    if(event.key === "ArrowUp"){
        gun.style.key.anim
    }
})

function gameOver1() {
  let blockLeft = parseInt(
    window.getComputedStyle(block1).getPropertyValue("left")
  );
  let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
  let blockTop = parseInt(
    window.getComputedStyle(block1).getPropertyValue("top")
  );
  if (blockLeft === carLeft && blockTop > 400) {
    alert("Game Over !");
    clearInterval(interval1); // stop the timer when Game over!
    location.reload();
  }
}
function gameOver2() {
    let blockLeft = parseInt(
      window.getComputedStyle(block2).getPropertyValue("left")
    );
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    let blockTop = parseInt(
      window.getComputedStyle(block2).getPropertyValue("top")
    );
    if (blockLeft === carLeft && blockTop > 400) {
      alert("Game Over !");
      clearInterval(interval2); // stop the timer when Game over!
      location.reload();
    }
  }
  function gameOver3() {
    let blockLeft = parseInt(
      window.getComputedStyle(block3).getPropertyValue("left")
    );
    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
    let blockTop = parseInt(
      window.getComputedStyle(block3).getPropertyValue("top")
    );
    if (blockLeft === carLeft && blockTop > 400) {
      alert("Game Over !");
      clearInterval(interval3); // stop the timer when Game over!
      location.reload();
    }
  }

const interval1 = setInterval(gameOver1, 1);
const interval2 = setInterval(gameOver2, 1);
const interval3 = setInterval(gameOver3, 1);

block1.addEventListener("animationiteration", () => {
  var random = Math.floor(Math.random() * 10);
  left = random * 50;
  block1.style.left = left + "px";   
});

block2.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 10);
    left = random * 50;
    top=50;
    block2.style.top=top+"px";
    block2.style.left = left + "px";   
  });
  
block3.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 10);
    left = random *50;
    block3.style.left = left + "px";   
  });

function moveLeft() {
  if (car.style.left === "0px") return;
  let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
  carLeft -= 50;
  car.style.left = carLeft + "px";
  gun.style.left = carLeft + "px";
}
function moveRight() {
  if (car.style.left === "450px") return;
  let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue("left"));
  carLeft += 50;
  car.style.left = carLeft + "px";
  gun.style.left = carLeft + "px";
}
