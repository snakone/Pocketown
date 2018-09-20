import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../services/trainer.service';  // Trainer Service

import { Pokemon } from '../../../models/pokemon';  // Pokemon Model
import { Trainer } from '../../../models/trainer';  // Trainer Model

import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})

export class TrainerListComponent implements OnInit {

  trainers: Trainer[];  // Trainer List
  filteredTrainers: Trainer[];  // Filtered Trainer List
  urlImage: string;
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML

  constructor(private trainerService: TrainerService,
              private router : Router) {
      this.urlImage = "../../../../assets/images/";
  }

  ngOnInit() {

    this.trainerService.getFireTrainers().subscribe(res => {
      this.trainers = res as Trainer[];
      this.filteredTrainers = this.trainers;
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

  navigateTrainer(name: string){
      this.router.navigate(['/trainer', name]);  // Navigate to Single Trainer using Trainer ID
  }

  navigatePokemon(pokemon: Pokemon){
      this.router.navigate(['/pokedex', pokemon]);  // Navigate to Single Pokemon using Pokemon ID
  }


}
