import { Injectable } from '@angular/core';

import { Nature } from '../models/nature';  // Pokemon Model

@Injectable({
  providedIn: 'root'
})
export class NatureService {

  natures: Nature[];
  filteredNature: Nature[];

  constructor() {

  this.natures = [

// ATK+
{name:"Lonely",good:"ATK +10%",bad:"DEF -10%"},{name:"Adamant",good:"ATK +10%",bad:"S.ATK -10%"},
{name:"Naughty",good:"ATK +10%",bad:"S.DEF -10%"},{name:"Brave",good:"ATK +10%",bad:"SPD -10%"},
// DEF+
{name:"Bold",good:"DEF +10%",bad:"ATK -10%"},{name:"Relaxed",good:"DEF +10%",bad:"SPD -10%"},
{name:"Lax",good:"DEF +10%",bad:"S.DEF -10%"},{name:"Impish",good:"DEF +10%",bad:"S.ATK -10%"},
// S.ATK+
{name:"Modest",good:"S.ATK +10%",bad:"ATK -10%"},{name:"Mild",good:"S.ATK +10%",bad:"DEF -10%"},
{name:"Rash",good:"S.ATK +10%",bad:"S.DEF -10%"},{name:"Quiet",good:"S.ATK +10%",bad:"SPD -10%"},
// S.DEF+
{name:"Calm",good:"S.DEF +10%",bad:"ATK -10%"},{name:"Gentle",good:"S.DEF +10%",bad:"DEF -10%"},
{name:"Careful",good:"S.DEF +10%",bad:"S.ATK -10%"},{name:"Sassy",good:"S.DEF +10%",bad:"SPD -10%"},
//SPD+
{name:"Timid",good:"SPD +10%",bad:"ATK -10%"},{name:"Hasty",good:"SPD +10%",bad:"DEF -10%"},
{name:"Jolly",good:"SPD +10%",bad:"S.ATK -10%"},{name:"Naive",good:"SPD +10%",bad:"S.DEF -10%"},

// NONE
{name:"Bashful",good:"None",bad:"None"},{name:"Docile",good:"None",bad:"None"},
{name:"Quirky",good:"None",bad:"None"},{name:"Serious",good:"None",bad:"None"},
{name:"Hardy",good:"None",bad:"None"},

// ATK+15
{name:"Confident",good:"ATK + 15%",bad:"DEF -10%"},{name:"Passionate",good:"ATK +15%",bad:"SPD -10%"},
{name:"Aggressive",good:"ATK + 15%",bad:"S.DEF -10%"},{name:"Stubborn",good:"ATK +15%",bad:"S.ATK -10%"},
// DEF+15
{name:"Slow",good:"DEF +15%",bad:"SPD -10%"},{name:"Native",good:"DEF +15%",bad:"ATK -10%"},
{name:"Pure",good:"DEF +15%",bad:"S.DEF -10%"},{name:"Nice",good:"DEF +15%",bad:"S.ATK -10%"},
// S.ATK+15
{name:"Smart",good:"S.ATK + 15%",bad:"SPD -10%"},{name:"Suspicious",good:"S.ATK + 15%",bad:"DEF -10%"},
{name:"Reckless",good:"S.ATK + 15%",bad:"ATK -10%"},{name:"Decisive",good:"S.ATK + 15%",bad:"S.DEF -10%"},
// S.DEF+15
{name:"Lazy",good:"S.DEF +15%",bad:"SPD -10%"},{name:"Strong",good:"S.DEF +15%",bad:"ATK -10%"},
{name:"Shy",good:"S.DEF +15%",bad:"S.ATK -10%"},{name:"Strict",good:"S.DEF +15%",bad:"DEF -10%"},
// SPD+15
{name:"Unruly",good:"SPD +15%",bad:"ATK -10%"},{name:"Nimble",good:"SPD +15%",bad:"DEF -10%"},
{name:"Active",good:"SPD +15%",bad:"S.ATK -10%"},{name:"Swift",good:"SPD +15%",bad:"S.DEF -10%"},
];

}

getNature(nature:string) {
  this.filteredNature = this.natures.filter(x => {
     return x.name == nature;  // Filter by Nature Name
  })
  return this.filteredNature[0];  // We only get one so it's always on position 0
}

}
