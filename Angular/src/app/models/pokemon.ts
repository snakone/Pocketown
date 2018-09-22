export class Pokemon {
  _id: string; // MongoDB ID
  name: string;  // Pokemon Name
  pokedex: number;  // Pokedex Number
  grade: string;  // Pokemon Grade - R/S/SR/SSR
  type: string;  // Pokemon Type - Grass/Water/Fire..
  type2: string; // Pokemon Second Type - Grass/Water/Fire..
  picture: string;  // Pokemon Picture
  family: string;  // Pokemon Family - Family of Charizard is Charmander
  legend: string;  // Legendary Pokemon?
  description: string;  // Pokemon Description - Pokedex Description
  attack: string;  // Attack Type of the Pokemon - Physical/Special
  evolution: string;  // Pokemon Evolution - Tiny/Normal/Mega..
  nature: string;  // Pokemon Nature
  nature2: string;  // Pokemon Second Nature
  info: string;  // Pokemon Info from Official Pokedex
  ability: string;  // Pokemon Abilities
  bability: string;  // Pokemon Best Ability
  item: string;  // Pokemon Held Item
  item_picture: string;  // Pokemon Held Item Picture
  item2: string;  // Pokemon Second Held Item
  item2_picture: string;  // Pokemon Second Held Item Picture
  HP: number;   // Pokemon HP Stat
  ATK: number;   // Pokemon ATK Stat
  DEF: number;   // Pokemon DEF Stat
  SATK: number;   // Pokemon S.ATK Stat
  SDEF: number;   // Pokemon S.DEF Stat
  SPD: number;   // Pokemon SPD Stat
  SS: number;   // Pokemon SS Stat
  ef_HP: number;   // Pokemon Effort Points on HP
  ef_ATK: number;   // Pokemon Effort Points on Atk
  ef_DEF: number;   // Pokemon Effort Points on DEF
  ef_SATK: number;   // Pokemon Effort Points on S.ATK
  ef_SDEF: number;   // Pokemon Effort Points on S.DEF
  ef_SPD: number;   // Pokemon Effort Points on SPD
  move1: string;  // Pokemon Move 1
  move2: string;  // Pokemon Move 2
  move3: string;  // Pokemon Move 3
  move4: string;  // Pokemon Move 4
  zmove: string;  // Pokemon Z Move
  good1: string;  // Pokemon Good Against
  good2: string;  // Pokemon Good Against
  good3: string;  // Pokemon Good Against
  bad1: string;  // Pokemon Bad Against
  bad2: string;  // Pokemon Bad Against
  bad3: string;  // Pokemon Bad Against

  ready: string;  // It's Pokemon Ready = Pokemon with all DATA

  contructor(name: string, picture: string,){
               // this._id = id;
                this.name = name;
               // this.pokedex = pokedex;
               // this.grade = grade;
               // this.type = type;
               // this.type2 = type2;
                this.picture = picture;
               // this.SS = SS;
               // this.evolution = evolution;
            }

}

// Pokemon Model
