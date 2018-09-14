import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service

import { Trainer } from '../../../../models/trainer';  // Trainer Model

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})

export class TrainerListComponent implements OnInit {

  trainers: Trainer[];
  filteredTrainers: Trainer[];
  urlImage: string;
  urlPokemon: string;
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML

  pokemonTeam: string[] = ["MegaDeoxysX", "MegaRayquazaYR2", "MegaGyaradosR2",
                           "MegaArceusX", "MegaLucarioXR2", "MegaHoohX"];

  constructor(private trainerService: TrainerService) {
      this.urlImage = "../../../../../assets/images/avatar/";
      this.urlPokemon = "../../../../../assets/images/pokemon/";
  }

  ngOnInit() {
    this.trainerService.getTrainers()
     .subscribe(res => {
       this.trainers = res as Trainer[];
       this.filteredTrainers = this.trainers;
       this.trainers.filter (x => {
         x.pokemon = x.pokemon.replace(/(?!^)([A-Z])/g, " $1");
       })
     })
  }

  onKeyUp(event){  // On Key Up Javascript Event
    event.preventDefault();
    this.filterTrainerbySearch();  // Filter Trainer
  }

  filterTrainerbySearch() {
     this.filteredTrainers = this.trainers.filter( ( trainer, index ) => {  // Filter Array
      // ngModel on Input Text - Search Value
      return trainer.name.includes(this.searchValue);  // Filter Original List into Filtered List
    } );
  }

}
