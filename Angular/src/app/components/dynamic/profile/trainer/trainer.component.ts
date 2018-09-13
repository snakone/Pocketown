import { Component, OnInit, Input } from '@angular/core';

import { Trainer } from '../../../../models/trainer';

@Component({
  selector: 'trainer-profile',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

 @Input() trainer: Trainer
  urlPokemon: string;
  urlImage: string;

  pokemonTeam: string[] = ["MegaDeoxysX", "MegaRayquazaYR2", "MegaGyaradosR2",
                           "MegaArceusX", "MegaLucarioXR2", "MegaHoohX"];

  constructor() {
        this.urlPokemon = "../../../assets/images/pokemon/";
        this.urlImage = "../../../../assets/images/avatar/";
  }

  ngOnInit() {
  }

}
