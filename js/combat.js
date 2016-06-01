var attackRNG = function(max, min){
  return Math.floor(Math.random() * (max - min + 1)) + min;
} ;
var nextEnemy = document.getElementById('nextEnemy');
var enemyImg = document.getElementById("enemyImg");
var enemies = [{name: "Skull King",lvl: 5, health: 30,MaxHealth: 30,attack: attackRNG(10, 5),reward: gold += 5,img: "./images/enemies/Icon.1_37.png"}];
var enemyHealthBar = document.getElementById("enemyHealthBar");
var enemyName = document.getElementById("enemyName");
var enemyLvl = document.getElementById("enemyLvl");
var currentEnemy = "";
$("#nextEnemy").click(function(){
  for(x=0;x<enemies.length;x++){
    currentEnemy = enemies[x];

    enemyHealthBar.style.width = (currentEnemy.health/currentEnemy.MaxHealth) * 100 + "%";
    enemyName.innerHTML = currentEnemy.name;
    enemyLvl.innerHTML = currentEnemy.lvl;
    enemyImg.src = currentEnemy.img;
  }
  nextEnemy.style.display = "none";
});

$("#unarmedA").click(function(){
  if(currentEnemy.health > 0){
    currentEnemy.health -= attack;
    enemyHealthBar.style.width = (currentEnemy.health/currentEnemy.MaxHealth) * 100 + "%";
    $("#logs").append($("<li>").text("you hit " + currentEnemy.name + " for " + attack + " damage."));
  }
else{
  currentEnemy = "";
  enemyName.innerHTML = "";
  enemyLvl.innerHTML = "";
  enemyImg.src = "";
    nextEnemy.style.display = "block";
    exp += 5;
  expBar.style.width = (exp / levelThreshold) * 100 + "%";
  progress.innerHTML = exp + "/" + levelThreshold;
  lvl.innerHTML = "Level: " + charlvl;
    $("#logs").append($("<li>").text("you have slayen the " + currentEnemy.name + " +5 exp"));
  }
});
