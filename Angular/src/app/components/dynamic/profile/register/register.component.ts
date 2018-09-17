import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms'; // Angular Forms

import { Pokemon } from '../../../../models/pokemon';  // Pokemon Model
import { Trainer } from '../../../../models/trainer';  // Trainer Model

import { GameServerService } from '../../../../services/game-server.service';  // Game Server Service
import { TrainerService } from '../../../../services/trainer.service';  // Trainer Service
import { PokedexService } from '../../../../services/pokedex.service';  // Pokedex Service
import { Router } from '@angular/router'; // Router
import { ToastrService } from 'ngx-toastr';  // Toastr

@Component({
  selector: 'register-trainer',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstFormGroup: FormGroup;  // Trainer INFO
  secondFormGroup: FormGroup;  // Trainer Avatar
  thridFormGroup: FormGroup;  // Community

  isLinear = true;  // Linear Form

  pokemonList: Pokemon[];  // Pokemon List on Favourite
  servers: string[];  // Server List
  avatars: string[];  // Avatar List
  trainerID: string;  // Trainer ID upon Register
  team: Pokemon[];

  urlImage: string;

  constructor(private pokedexService: PokedexService,
              private gameServerService: GameServerService,
              private trainerService: TrainerService,
              private _formBuilder: FormBuilder,
              private router: Router,
              private toastr: ToastrService,) {

      this.urlImage = "../../../../assets/images/avatar/";
      this.avatars = ["1","2","3","4"];
    }

  ngOnInit() {
    this.pokedexService.getPokedex()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
       this.pokemonList = res as Pokemon[];  // Response as Pokemon = List
     })
    this.servers = this.gameServerService.gameServers;  // Server List
    this.createForm();
  }

  createForm(){  // Join ALL Forms
    this.firstFormGroup = this._formBuilder.group({  // Trainer Info
      Name: ['', Validators.required],  // Name
      Pokemon: ['', Validators.required]  // Pokemon
    });

    this.secondFormGroup = this._formBuilder.group({  // Trainer Avatar
      Avatar: ['', Validators.required]  // Avatar
    });

    this.thridFormGroup = this._formBuilder.group({  // Trainer Community
      Server: ['', Validators.required],  // Server
      Guild: ['', Validators.required]  // Guild
    });
  }

  validateForm(form1: NgForm, form2: NgForm, form3: NgForm){

    // New Trainer with all the DATA, Form + Trainer ID
    const trainer = new Trainer(this.trainerService.trainerID, form1.value.Name,
                                form1.value.Pokemon, form2.value.Avatar,
                                form3.value.Server, form3.value.Guild, false);

    this.trainerService.addTrainer(trainer)  // Add Trainer to MongoDB
     .subscribe(res => {
       this.toastr.success('Trainer','Congratulations!', {
         timeOut: 5000
       });
     });
     this.router.navigate(['/profile']);  // Navigate to Home
  }

}
