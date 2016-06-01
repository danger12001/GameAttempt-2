var view = document.getElementById("characterSelect");
var battle = document.getElementById("battle");
var character = document.getElementById("character");
var nameInput = document.getElementById("characterName");
var race = document.getElementById("race");
var charName = document.getElementById("charName");
var charRace = document.getElementById("charRace");

  $("#submit").click(function(){
    if(nameInput.value !== "" && race.value !== ""){
  charName.innerHTML = nameInput.value;

  if(race.value == 1){
    charRace.innerHTML = "Human";
    INT += 7;
    CFT += 5;
  }
  else if(race.value == 2){
    charRace.innerHTML = "Orc";
    health += 10;
    INT -= 2;
  }
  else if(race.value == 3){
    charRace.innerHTML = "Elf";
    Archery += 10;
      INT += 1;
      CFT += 1;
  }
  else if(race.value == 4){
    charRace.innerHTML = "Forest Child";
    INT += 20;
  }
view.style.display = "none";
battle.style.display = "block";
charLevel.innerHTML = charlvl;
}

// else if (race.value === "" && nameInput.value !== ""){
//   alert("You need to choose a race!");
// }
});
