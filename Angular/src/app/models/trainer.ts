import { Pokemon } from './pokemon';

export class Trainer {
      id: string  // MongoDB ID
      name: string;
      pokemon: string;  // Favourite Pokemon
      team: Pokemon[];  // Pokemon Team
      avatar: string;
      server: string;
      guild: string;
      online: boolean; // is the Trainer online?

      constructor(id: string, name: string, pokemon: string,
                   avatar: string, server: string, guild: string, online:boolean = false, team?: Pokemon[],){

                  this.id = id;
                  this.name = name;
                  this.pokemon = pokemon;
                  this.team = team;
                  this.avatar = avatar;
                  this.server = server;
                  this.guild = guild;
                  this.online = online;
      }

}
