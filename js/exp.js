var expBar = document.getElementById("expBar");
var charLevel = document.getElementById("charLvl");
  progress.innerHTML = exp + "/" + levelThreshold;
  if(exp >= levelThreshold){
    exp = 0;
    levelThreshold += 25;
    skillPoints += 1;
    charlvl += 1;
    lvl.innerHTML = "Level: " + charlvl;
    charLevel.innerHTML = charlvl;
    expBar.style.width = (exp / levelThreshold) * 100 + "%";
  }
