export class Pokemon {
  _id: string; // MongoDB ID
  name: string;
  pokedex: number;
  grade: string;
  ss: number;

  contructor(id: string, name: string, pokedex: number,
             grade: string, ss: number){
               this._id = id;
               this.name = name;
               this.pokedex = pokedex;
               this.grade = grade;
               this.ss = ss;
            }
}
