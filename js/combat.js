var attackRNG = function(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
} ;
var enemyRNG = function(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
} ;
var nextEnemy = document.getElementById('nextEnemy');
var enemyImg = document.getElementById("enemyImg");
var enemies = [{name: "Skull King",lvl: 5, health: 30,MaxHealth: 30,attack: attackRNG(10, 5),reward: gold += 5,img: "./images/enemies/Icon.1_37.png",status: 0},{name: "Skeleton",lvl: 6, health: 40,MaxHealth: 40,attack: attackRNG(10, 5),reward: gold += 7,img: "./images/enemies/Icon.1_57.png",status: 0}];
var enemyHealthBar = document.getElementById("enemyHealthBar");
var enemyName = document.getElementById("enemyName");
var enemyLvl = document.getElementById("enemyLvl");
var currentEnemy = "";
$("#nextEnemy").click(function(){
    var x = enemyRNG(enemies.length - 1, 0);
    console.log(x);
    currentEnemy = enemies[x];
    currentEnemy.status = 1;
    enemyHealthBar.style.width = (currentEnemy.health/currentEnemy.MaxHealth) * 100 + "%";
    enemyName.innerHTML = currentEnemy.name;
    enemyLvl.innerHTML = currentEnemy.lvl;
    enemyImg.src = currentEnemy.img;
  nextEnemy.style.display = "none";
});

$("#unarmedA").click(function(){
if(currentEnemy.status == 1 && currentEnemy.health >= 1){
  currentEnemy.health -= attack;
  health -= currentEnemy.attack;
  healthBar.style.width = (health/maxHealth) * 100 + "%";
  enemyHealthBar.style.width = (currentEnemy.health/currentEnemy.MaxHealth) * 100 + "%";
  $("#logs").append($("<li>").text("you hit " + currentEnemy.name + " for " + attack + " damage."));
    $("#logs").append($("<li>").text(currentEnemy.name + " hit you with " + currentEnemy.attack + " damage."));
}
else if(currentEnemy.health <= 0) {
  $("#logs").append($("<li>").text("you have slayen the " + currentEnemy.name + " +5 exp"));
  currentEnemy.status = 0;
  currentEnemy.health = currentEnemy.MaxHealth;
  currentEnemy = "";
  enemyName.innerHTML = "";
  enemyLvl.innerHTML = "";
  enemyImg.src = "";
    nextEnemy.style.display = "block";
    exp += 5;
    if(exp >= levelThreshold){
      exp = 0;
      levelThreshold += 25;
      skillPoints += 1;
      charlvl += 1;
      lvl.innerHTML = "Level: " + charlvl;
      charLevel.innerHTML = charlvl;
      expBar.style.width = (exp / levelThreshold) * 100 + "%";
    }
  expBar.style.width = (exp / levelThreshold) * 100 + "%";
  progress.innerHTML = exp + "/" + levelThreshold;
  lvl.innerHTML = "Level: " + charlvl;
  }
});
