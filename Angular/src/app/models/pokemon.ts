export class Pokemon {
  _id: string; // MongoDB ID
  name: string;
  pokedex: number;
  grade: string;
  type: string;
  type2: string;
  picture: string;
  family: string;
  legend: string;
  description: string;
  ability: string;
  bability: string;
  item: string;
  item_picture: string;
  item2: string;
  item2_picture: string;
  HP: number;
  ATK: number;
  DEF: number;
  SATK: number;
  SDEF: number;
  SPD: number;
  SS: number;
  ef_HP: number;
  ef_ATK: number;
  ef_DEF: number;
  ef_SATK: number;
  ef_SDEF: number;
  ef_SPD: number;
  evolution: string;
  nature: string;
  nature2: string;
  good1: string;
  good2: string;
  good3: string;
  bad1: string;
  bad2: string;
  bad3: string;
  attack: string;
  info: string;
  move1: string;
  move2: string;
  move3: string;
  move4: string;
  zmove: string;
  ready: string;

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
