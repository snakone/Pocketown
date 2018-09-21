import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Trainer } from '../models/trainer';  // Trainer Model
import { Pokemon } from '../models/pokemon';
import { AuthService } from './auth.service';  // Auth Service

import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TrainerService {

  isTrainer: boolean = false;  // To know whatever is Trainer or Not
  notTrainer: boolean = false;  //  We use a second so it doesnt' depend from the first one
  admin: boolean;  // To know whatever is Admin or Not

  trainerTeam: Pokemon[]=[];
  Auth: string;  // Trainer ID
  trainer: any;
  fireTrainer: Trainer;  // Trainer Profile
  selectedTrainer: Trainer;  // Save Selected Trainer
  trainerList: Trainer[];  // Trainer List
  fireTrainers: Observable<Trainer[]>;
  trainerDocument: AngularFirestoreDocument;
  trainerCollection: AngularFirestoreCollection;

  // Heroku Server --> https://pocketown-server.herokuapp.com

  constructor(private http: HttpClient,
              private authService: AuthService,
              public db: AngularFirestore) {
                this.admin = true;  // Start Admin at False
                this.selectedTrainer = <Trainer>{};
                this.trainerCollection = this.db.collection('trainers');
               }

  getFireTrainers(){
    this.fireTrainers = this.trainerCollection.snapshotChanges().pipe(map(actions =>{
       return actions.map(a => {
         const data = a.payload.doc.data() as Trainer;
         data.id = a.payload.doc.id;
         return data;
       });
    })); return this.fireTrainers;
  }

  getFireTrainerbyID(id:string){
    this.trainer = this.trainerCollection.doc(id).ref.get().then(doc =>{
      return doc.data();
    }); return this.trainer;
  }

  addFireTrainer(trainer: Trainer){
    this.trainerCollection.doc(trainer.id).set(trainer);
  }

  updateFireTrainer(trainer: Trainer){
    this.trainerDocument = this.db.doc(`trainers/${trainer.id}`);
    this.trainerDocument.update(trainer);
  }

  deleteFireTrainer(trainer: Trainer){
    this.trainerDocument = this.db.doc(`trainers/${trainer.id}`);
    this.trainerDocument.delete();
  }

  checkTrainer(profile){  // Profile from Auth0 containing unique ID
    this.Auth = profile.sub.substring(6);  // Remove "Auth0|" from the ID

    this.trainer = this.getFireTrainerbyID(this.Auth).then(res=> {
      if(res){
        this.fireTrainer = res as Trainer;
        this.isTrainer = true;
        this.notTrainer = false
      } else {
        this.isTrainer = false;
        this.notTrainer = true;
      }
    });
    return this.fireTrainer; // Get Trainer by ID on MongoDB
  }

  addPokemontoTeam(pokemon:Pokemon){
    this.trainerTeam.push(pokemon);  // Push the Selected Pokemon into Edit Team
  }


}
