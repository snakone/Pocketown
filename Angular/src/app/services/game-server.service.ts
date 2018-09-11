import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameServerService {

  gameServers: string[];

  constructor() {

    this.gameServers = ["S1-Pikachu", "S2-Bulbasaur", "S3-Ivysaur", "S4-Venusaur",
                        "S5-Charmander", "S6-Charmeleon", "S7-Charizard", "S8-Squirtle",
                        "S9-Wartortle", "S10-Blastoise", "S11-Caterpie", "S12-Metapod",
                        "S13-Butterfree", "S14-Weedle", "S15-kakuna", "S16-Beedrill",
                        "S17-Pidgey", "S18-Pidgeotto", "S19-Pidgeot", "S20-Rattata",
                        "S21-Raticate", "S22-Spearow", "S23-Fearow", "S24-Ekans",
                        "S25-Arbok", "S26-Raichu", "S27-Sandshrew", "S28-Sandslash",
                        "S29-Nidoran", "S30-Nidorina", "S31-Nidoqueen", "S32-Nidoran",
                        "S33-Nidorino", "S34-Nidoking", "S35-Clefairy", "S36-Clefable",
                        "S37-Vulpix", "S38-Ninetales", "S39-Jigglypuff", "S40-Wigglytuff",
                        "S41-Zubat", "S42-Golbat", "S43-Oddish", "S44-Gloom",
                        "S45-Viluplume", "S46-Paras", "S47-Parasect", "S48-Venonat",
                        "S49-Venomoth", "S50-Diglett", "S51-Dugtrio", "S52-Meowth",
                        "S53-Persian", "S54-Psyduck", "S55-Golduck", "S56-Mankey",
                        "S57-Primeape", "S58-Growlithe", "S59-Arcanine", "S60-Poliwag",
                        "S61-Poliwhirl", "S62-Poliwrath", "S63-Abra", "S64-Kadabra",
                        "S65-Alakazam", "S66-Machop", "S67-Machoke", "S68-Machamp",
                        "S69-Bellsprout", "S70-Weepinbell", "S71-Victreebel", "S72-Tentacool",
                        "S73-Tentacruel", "S74-Geodude", "S75-Graveler", "S76-Golem",
                        "S77-Ponyta", "S78-Rapidash", "S79-Slowpoke", "S80-Slowbro",
                        "S81-Magnemite", "S82-Magneton" ];
  }
}
