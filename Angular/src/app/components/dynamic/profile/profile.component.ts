import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';
import { PokedexService } from '../../../services/pokedex.service';  // Pokedex Service
import { GameServerService } from '../../../services/game-server.service';  // Pokedex Service

import { Pokemon } from '../../../models/pokemon';

import { NgForm } from '@angular/forms';  // Angular Forms

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thridFormGroup: FormGroup;
  urlImage: string;
  avatars: string[];
  servers: string[];

  profile: any;

  pokemonList: Pokemon[];

  constructor(private pokedexService: PokedexService,
              private gameServerService: GameServerService,
              private authService: AuthService,
              private _formBuilder: FormBuilder) {

                this.urlImage = "../../../../assets/images/avatar/";
                this.avatars = ["1","2","3","4"];
              }

  ngOnInit() {

    this.pokedexService.getPokedex()  // HTTP POST to Server
     .subscribe(res => {  // Subscribe to the Server Response
       this.pokemonList = res as Pokemon[];  // Response as Pokemon = List
     })

    this.servers = this.gameServerService.gameServers;

    if (this.authService.userProfile) {
      this.profile = this.authService.userProfile;
    } else {
      this.authService.getProfile((err, profile) => {
        this.profile = profile;
      });
    }

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

  validateForm(form1: NgForm, form2: NgForm, form3: NgForm){
    console.log(form1.value);
    console.log(form2.value);
    console.log(form3.value);
    console.log(this.profile.sub);
  }

  logout(){
    this.authService.logout();
  }
}
