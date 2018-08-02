import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fixed-nav',
  templateUrl: './fixed-nav.component.html',
  styleUrls: ['./fixed-nav.component.css']
})
export class FixedNavComponent implements OnInit {

  navTitles: string[];
  Genders: string[];
  Novels: string[];
  Formats: string[];
  Languages: string[];

  constructor() {

    this.navTitles = ["Libros","Novelas","Formato","Idioma"];

    this.Genders = ["Literatura", "Infantil", "Juvenil","Poesía","Narrativa"];
    this.Novels = ["Aventuras", "Acción", "Romántica", "Negra", "Sci-Fi"]
    this.Formats = ["Tapa", "Digital", "Cómic"];
    this.Languages = ["Español", "Catalán", "Inglés"];
  }

  ngOnInit() {
  }

}
