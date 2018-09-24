import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'victory-road',
  templateUrl: './victory-road.component.html',
  styleUrls: ['./victory-road.component.css']
})
export class VictoryRoadComponent implements OnInit {

  urlImage: string;
  urlImagePokemon: string;

  constructor() {

  this.urlImage = "../../../../../assets/images/guides/victory-road/";
  this.urlImagePokemon = "../../../../../assets/images/pokemon/";
}

  ngOnInit() {
  }

  scrollToElement($element): void {  // Smooth Scrolling on Anchor Links
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}

// Victory Road Component - Guide
