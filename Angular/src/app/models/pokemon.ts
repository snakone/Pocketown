export class Pokemon {
  _id: string; // MongoDB ID
  name: string;
  pokedex: number;
  grade: string;
  type: string;
  type2: string;
  picture: string;
  ss: number;

  contructor(id: string, name: string, pokedex: number,
             grade: string, type: string, type2: string,
             picture: string, ss: number){

               this._id = id;
               this.name = name;
               this.pokedex = pokedex;
               this.grade = grade;
               this.type = type;
               this.type2 = type2;
               this.picture = picture;
               this.ss = ss;
            }
}
