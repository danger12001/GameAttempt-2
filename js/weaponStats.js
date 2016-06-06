var lastingTime = new Time();
lastingTime.setSeconds(5);

var weapons = [
  {Name: "Short Sword", damage : 18,  weaponType: oneHandedWeapon},
  {Name: "Axe", damage: 16, weaponType: oneHandedWeapon},
  {Name: "Dagger", damage: 14,  weaponType: oneHandedWeapon},
  {Name: "Broken glass bottle", damage: 12,  weaponType: oneHandedWeapon},
  {Name: "Long Sword", damage: 22,  weaponType: twoHandedWeapon},
  {Name: "Great Orc Axe", damage: 25,  weaponType: twoHandedWeapon},
  {Name: "BlackSmith Axe", damage: 24,  weaponType: twoHandedWeapon},
  {Name: "Broken Long Sword", damage: 14,  weaponType: twoHandedWeapon},
  {Name: "Human Great Axe", damage: 25, weaponType: twoHandedWeapon},
  {Name: "Woodsmans Axe", damage: 14, weaponType: twoHandedWeapon},
  {Name: "Stone Spear", damage:12, weaponType: oneHandedWeapon},
  {Name: "Forest Childs Bow and Arrow", damage: 18, weaponType: twoHandedWeapon},
  {Name: "Pitch Fork", damage: 10, weaponType: twoHandedWeapon},
  {Name: "Iron Mace", damage: 15, weaponType: oneHandedWeapon},
  {Name: "Orc Enchanted Short Sword", damage: 35, weaponType: oneHandedWeapon},
  {Name: "Butchers Meat Cleaver", damage: 8, weaponType: oneHandedWeapon},
  {Name: "Ninja Star", damage: 8, weaponType: oneHandedWeapon},
  {Name: "Human Great Long Swrod", damage: 22, weaponType: twoHandedWeapon},
  {Name: "Human Great Hammer", damage: 20, weaponType: twoHandedWeapon},
  {Name: "Forest Child Spear", damage: 18, weaponType: oneHandedWeapon},
  {Name: "Orc Short Sword", damage: 15, weaponType: oneHandedWeapon},
  {Name: "Forest Child Bow and Double Arrow", damage : 22, weaponType: twoHandedWeapon},
  {Name: "Magika Stick", damage: 26, weaponType: oneHandedWeapon},
  {Name: "Orc Short Sword with serated edge", damage: 15, weaponType: oneHandedWeapon},
  {Name: "Soldiers Custom Sword", damage: 20, weaponType: twoHandedWeapon},
  {Name: "Throwing Knives", damage: 9, weaponType:oneHandedWeapon},
  {Name: "Bow and Arrow of Mass Destruction", damage: 28, weaponType: twoHandedWeapon},
  {Name: "Custom Dagger", damage: 14, weaponType:oneHandedWeapon },
  {Name: "Rambo Knife", damage: 16, weaponType: oneHandedWeapon},
  {Name: "Flaming Sword", damage: 20, weaponType: oneHandedWeapon}
];

var armor=[
  {Name: "Sheid", Armor: 10 , armorType: oneHandedArmor},
  {Name: "Full Face Knight Helmet", Armor: 5},
  {Name: "Full Face DarkKnight Helmet", Armor: 7},
  {Name: "Leather Boot", Armor: 3},
  {Name: "Broken Sheild", Armor: 2},
  {Name: "Broken Full Face DarkKnight Helmet", Armor: 4},
  {Name: "Leather boot with Iron shin guard", Armor: 5},
  {Name: "Iron Gloves", Armor: 3},
  {Name: "Leather Gloves", Armor: 3},
  {Name: "Orc Helmet", Armor: 6},
  {Name: "Iron Boots", Armor: 5},
  {Name: "Wizard Hat", Armor: 3},
  {Name: "Top Hat", Armor: 0},
  {Name: "Human Soldier Helmet", Armor: 6},
  {Name: "Orc Helmet", Armor:7},
  {Name: "Iron Shoulder Pads", Armor: 8},
  {Name: "Iron Chest Plate with Thigh Guards", Armor: 7}

];

var wearables=[
  {Name: "Amulate of Magika", strength: 20},
  {Name: "Ring of death", strength: 15},
  {Name: "Ring of Health", strength: 10},
  {Name: "Stunning Ring", strength: 10}
];

var magicAbilities= [
{Name: "Lighting Bolt", damage: 12, lastingTime: lastingTime},
{Name: "Flaming ball of Doom", damage: 10, lastingTime:lastingTime},
{Name: "Pulse Rings", damage: 11, lastingTime: lastingTime},
{Name: "Devils Tail Whip", damage: 12, lastingTime:lastingTime},
{Name: "Serated Blade", damage: 10, lastingTime: lastingTime},
{Name: "Scorpian Sting", damage: 12, lastingTime: lastingTime},
{Name: "Power of The Eclipse", damage:11, lastingTime: lastingTime},
{Name: "Power of the Ocean", damage: 9, lastingTime: lastingTime},
{Name: "Power of Snow", damage: 8, lastingTime: lastingTime}
];



for(var i =n0 ;i < weapons.length; i++){
  if(weapons[i].weaponType === oneHandedWeapon){
    //Character can equip a sheild
  }
  else if(weapons[i].weaponType === twoHandedWeapon){
    //character cant equip a sheild
  }
}
