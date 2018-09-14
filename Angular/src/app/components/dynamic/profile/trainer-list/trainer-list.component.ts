import { Component, OnInit } from '@angular/core';

import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service
import { AuthService } from '../../../../services/auth.service';  // Trainer Service

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
  profile: any;
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML

  pokemonTeam: string[] = ["MegaDeoxysX", "MegaRayquazaYR2", "MegaGyaradosR2",
                           "MegaArceusX", "MegaLucarioXR2", "MegaHoohX"];

  constructor(private trainerService: TrainerService,
              private authService: AuthService) {
      this.urlImage = "../../../../../assets/images/";
  }

  ngOnInit() {
    this.trainerService.getTrainers()  // Get Trainer List
     .subscribe(res => {
       this.trainers = res as Trainer[];
       this.filteredTrainers = this.trainers;  // Original List = Filter List
       this.whosOnline();  // Once We get the Trainers, check who is Online
     });
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

  whosOnline(){
    if (this.authService.isAuthenticated()){
    const id = this.authService.userProfile.sub.substring(6);
    this.profile = this.trainers.filter(x => {
          return x.trainerID == id;
      });

      this.trainers.forEach(trainer => {
        if (trainer.name == this.profile[0].name) {
          trainer.online = true;
        } else {
          trainer.online = false;
        }
      });
    } else {
      this.profile = false;
    }
  }

}
