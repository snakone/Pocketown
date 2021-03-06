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
    const fireTrainer = {
      id: this.trainerService.Auth,
      name: form1.value.Name,
      pokemon: form1.value.Pokemon,
      avatar: form2.value.Avatar,
      server: form3.value.Server,
      guild: form3.value.Guild,
      online: true,
      team: []
    }

    this.trainerService.addFireTrainer(fireTrainer);  // Add Trainer to MongoDB
       this.toastr.success(':)','Congratulations!', {
         timeOut: 5000
       });
  }

}

// Form Register Component when the User doesn't have a Trainer registered YET
