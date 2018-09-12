export class Trainer {
      _id: string  // MongoDB ID
      trainerID: string;
      name: string;
      pokemon: string;
      avatar: string;
      server: string;
      guild: string;

      constructor(trainer_id: string, name: string, pokemon: string,
                  avatar: string, server: string, guild: string){

                  this.trainerID = trainer_id;
                  this.name = name;
                  this.pokemon = pokemon;
                  this.avatar = avatar;
                  this.server = server;
                  this.guild = guild;
      }

}
