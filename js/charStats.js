var health = 75;
var mana = 50;
var charlvl = 1;
var exp = 0;
var levelThreshold = 25;
var skillPoints = 0;
var attack = 5;
var armor = 0;
var INT = 5;
var STR = 5;
var DEX = 5;
var CFT = 5;
var gold = 0;
var Archery = 0;
var Swords = 0;
var Axes = 0;
var Hammers = 0;

var lvl = document.getElementById("charlvlNav");
lvl.innerHTML = "Level: " + charlvl;
var progress = document.getElementById("charLvlProgressNav");
progress.innerHTML = exp + "/" + levelThreshold;
var charProgress = document.getElementById("charLvlProgress");
charProgress.innerHTML =  exp + "/" + levelThreshold;
var charLevel = document.getElementById("charLvl");
charLevel.innerHTML = charlvl;
var armorR = document.getElementById('charArmor');
armorR.innerHTML = armor;
var charSword = document.getElementById('charSword');
charSword.innerHTML = Swords;
var Gold = document.getElementById('gold');
Gold.innerHTML = "Gold: " + gold;
