export class Pokemon {
  _id: string; // MongoDB ID
  name: string;
  pokedex: number;
  grade: string;
  type: string;
  type2: string;
  picture: string;
  family: string;
  ss: number;
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

  contructor(id: string, name: string, pokedex: number,
             grade: string, type: string, type2: string,
             picture: string, ss: number, evolution: string){

               this._id = id;
               this.name = name;
               this.pokedex = pokedex;
               this.grade = grade;
               this.type = type;
               this.type2 = type2;
               this.picture = picture;
               this.ss = ss;
               this.evolution = evolution;
            }
}
