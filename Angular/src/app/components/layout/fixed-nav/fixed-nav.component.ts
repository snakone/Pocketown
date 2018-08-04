import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent implements OnInit {

  navTitles: string[];
  databases: string[];
  tools: string[];
  Formats: string[];
  Languages: string[];

  constructor() {

    this.navTitles = ["Database","Tools","Formato","Idioma"];

    this.databases = ["Pokédex", "Moves", "Abilities", "Types", "Held items"];
    this.tools = ["Search", "P.R.C", "Maps", "Compare", "Builder"]
    this.Formats = ["Tapa", "Digital", "Cómic"];
    this.Languages = ["Español", "Catalán", "Inglés"];
  }

  ngOnInit() {
  }

}
