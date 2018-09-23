import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //  Make HTTP Request to API
import { Trainer } from '../models/trainer';  // Trainer Model
import { Pokemon } from '../models/pokemon';  // Pokemon Model

import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument} from '@angular/fire/firestore';  // Firestore Imports

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TrainerService {

  isTrainer: boolean;  // To know whatever is Trainer or Not
  notTrainer: boolean;  //  We use a second so it doesnt' depend from the first one
  admin: boolean;  // To know whatever is Admin or Not
  firstLogin: boolean = true;  // WE only check the Trainer Profile once on the First Login

  trainerTeam: Pokemon[]=[];
  Auth: string;  // Trainer ID
  fireTrainer: Trainer;  // Trainer Profile
  selectedTrainer: Trainer;  // Save Selected Trainer

  fireTrainers: Observable<Trainer[]>;  // All Trainers from Firestore
  trainerCollection: AngularFirestoreCollection;  // The Trainer Collection We take the Trainers off
  trainerDocument: AngularFirestoreDocument;  // Single Trainer Document


  constructor(private http: HttpClient,
              public db: AngularFirestore) {
                this.admin = false;  // Start Admin at False
                this.selectedTrainer = <Trainer>{};
                this.trainerCollection = this.db.collection('trainers');  // Select Firestore Collection
               }

  getFireTrainers(){  // Get All Trainer from Firestore
    this.fireTrainers = this.trainerCollection
    // SnapShotChanges make the data "LIVE"
     .snapshotChanges().pipe(map(actions =>{  // Pipe Collection and MAP the result on "ACTIONS"
       return actions.map(props => {  // MAP the Result into Trainers - Props = JSON DB Properties
         const data = props.payload.doc.data() as Trainer;  // Payload = Content - DOC = Firestore Document
         data.id = props.payload.doc.id;
         return data;
       });
    })); return this.fireTrainers; // Finally return Trainer List
  }

  getFireTrainerbyID(id:string){
    let trainer = this.trainerCollection.doc(id)  // Firestore DOC = Trainer DB Object
    // SnapShotChanges make the data "LIVE"
     .snapshotChanges().pipe(map(actions =>{  // Pipe Collection and MAP the result on "ACTIONS"
      return actions.payload.data(); // Payload = Content
    })); return trainer;  // Return the Trainer with the given ID
  }

  addFireTrainer(trainer: Trainer){ // Add to Collection
    this.trainerCollection.doc(trainer.id).set(trainer); // Add to DOC/ID -> Trainer
  }

  updateFireTrainer(trainer: Trainer){  // Update Document
    this.trainerDocument = this.db.doc(`trainers/${trainer.id}`);  // Get Firestore Document with ID
    this.trainerDocument.update(trainer);
  }

  deleteFireTrainer(trainer: Trainer){ // Delete Document
    this.trainerDocument = this.db.doc(`trainers/${trainer.id}`);  // Get Firestore Document with ID
    this.trainerDocument.delete();
  }

  // Get the Trainer with Auth0 ID and Configure Trainer Settings
  checkTrainer(profile){  // Profile from Auth0 containing unique ID
    this.Auth = profile.sub.substring(6);  // Remove "Auth0|" from the ID

    this.getFireTrainerbyID(this.Auth) // With the ID get the Profile
     .subscribe(res=> {  // Response as Trainer
      if(res){ this.fireTrainer = res as Trainer;
        this.isTrainer = true;  this.notTrainer = false;  // Trainer Settings
          if (this.fireTrainer.name == 'Snakone') this.admin = true;
      } else { this.isTrainer = false;  this.notTrainer = true; }
    });
    return this.fireTrainer; // Return the Trainer
  }

  updateTrainerOnlineStatus(status:boolean){  // Update Online Status
        this.trainerCollection.doc(this.Auth).update({ 
          online: status  // Update Trainer with the given Status, either True or False
        });
  }

  addPokemontoTeam(pokemon:Pokemon){  // Add Pokemon to Trainer Team
    this.fireTrainer.team.push(pokemon.picture);
    this.trainerCollection.doc(this.Auth).update({  // Get the Trainer DOC with the ID then update Team
      team: this.fireTrainer.team
    });
  }

  addTeamToTrainer(pokemon:string[]){
    this.trainerCollection.doc(this.Auth).update({
      team: pokemon
    })
  }

}

// Service to work with Trainers - FIRESTORE Service - Trainer Settings - Online Status - Add Pokemon to Trainer Team
