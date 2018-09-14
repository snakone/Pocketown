import { Pokemon } from './pokemon';

export class Trainer {
      _id: string  // MongoDB ID
      trainerID: string;
      name: string;
      pokemon: string;
      team: Pokemon[];
      avatar: string;
      server: string;
      guild: string;
      online: boolean;

      constructor(trainer_id: string, name: string, pokemon: string,
                   avatar: string, server: string, guild: string, online:boolean = false, team?: Pokemon[],){

                  this.trainerID = trainer_id;
                  this.name = name;
                  this.pokemon = pokemon;
                  this.team = team;
                  this.avatar = avatar;
                  this.server = server;
                  this.guild = guild;
                  this.online = online;
      }

}
