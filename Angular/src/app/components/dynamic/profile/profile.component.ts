import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { PokedexService } from '../../../services/pokedex.service';  // Pokedex Service
import { GameServerService } from '../../../services/game-server.service';  // Game Server Service
import { TrainerService } from '../../../services/trainer.service';  // Trainer Service
import { ToastrService } from 'ngx-toastr';  // Toastr
import { Router } from '@angular/router'; // Router

import { Pokemon } from '../../../models/pokemon';
import { Trainer } from '../../../models/trainer';

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thridFormGroup: FormGroup;
  urlImage: string;
  urlPokemon: string;
  avatars: string[];
  servers: string[];
  isTrainer: boolean;
  notTrainer: boolean;

  trainer: Trainer;
  profile: any;
  trainerID: string;

  pokemonTeam: string[] = ["MegaDeoxysX", "MegaRayquazaYR2", "MegaGyaradosR2",
                           "MegaArceusX", "MegaLucarioXR2", "MegaHoohX"];

  pokemonList: Pokemon[];

  constructor(private pokedexService: PokedexService,
              private trainerService: TrainerService,
              private gameServerService: GameServerService,
              private authService: AuthService,
              private _formBuilder: FormBuilder,
              private toastr: ToastrService,
              private router: Router) {

                this.urlImage = "../../../../assets/images/avatar/";
                this.urlPokemon = "../../../../assets/images/pokemon/";
                this.avatars = ["1","2","3","4"];
              }

  ngOnInit() {

    if (this.authService.userProfile) {
        this.profile = this.authService.userProfile;
        this.trainerID = this.profile.sub.substring(6);
        this.checkTrainer();

    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
        this.trainerID = this.profile.sub.substring(6);
        this.checkTrainer();
      });
    }

    this.createForm();

    this.pokedexService.getPokedex()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
       this.pokemonList = res as Pokemon[];  // Response as Pokemon = List
     })

    this.servers = this.gameServerService.gameServers;

  }

  validateForm(form1: NgForm, form2: NgForm, form3: NgForm){

    const trainer = new Trainer( this.trainerID, form1.value.Name,
                                form1.value.Pokemon, form2.value.Avatar,
                                form3.value.Server, form3.value.Guild );

    this.trainerService.addTrainer(trainer)
     .subscribe(res => {
       this.toastr.success('Trainer','Congratulations!', {
         timeOut: 5000
       });
     });
     this.router.navigate(['/']);  // Navigate to Home
  }

  logout(){
    this.authService.logout();
    this.toastr.info('','You are now logged out', {
      timeOut: 5000
    });
  }

  checkTrainer(){
    const id = this.trainerID;
    this.trainerService.getTrainerbyId(id)
     .subscribe(res => {
       if (res == '') {
         this.notTrainer = true;
       }
       else {
         this.trainer = res[0] as Trainer;
         if (this.trainer.trainerID == id) {
          this.isTrainer = true;
          this.notTrainer = false;
          }
           if (this.trainer.name == 'Snakone' || this.trainer.name == 'Goph') {
             this.authService.admin = true;
           }
       } // End of else
    });
  }

  createForm(){
    this.firstFormGroup = this._formBuilder.group({
      Name: ['', Validators.required],
      Pokemon: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      Avatar: ['', Validators.required]
    });

    this.thridFormGroup = this._formBuilder.group({
      Server: ['', Validators.required],
      Guild: ['', Validators.required]
    });
  }


}
