import { Component, OnInit } from '@angular/core';

import { Move } from '../../../models/move';  // Pokemon Model

import { MoveService } from '../../../services/move.service';  // Move Service
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {

  moveList: Move[];  // Original List
  filteredMoveList: Move[];  // Filtered List - We show this List
  panelOpenState = false;
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML

  constructor(private moveService: MoveService,
              private router: Router) {}

  ngOnInit() {
    this.moveService.getMove()  // Get Move List
     .subscribe(res => {
       this.moveList = res as Move[];
       this.filteredMoveList = this.moveList;  // Make a copy to Filter
     })
  }

  navigate(move: Move) {
    this.router.navigate(['/moves', move._id]);  // Navigate to Single Move using Move ID
  }

  onKeyUp(event){  // On Key Up Javascript Event
    event.preventDefault();
    this.filterMovebySearch();  // Filter Move
  }

  filterMovebySearch() {
     this.filteredMoveList = this.moveList.filter( ( move, index ) => {  // Filter Array
      // ngModel on Input Text - Search Value
      return move.name.includes(this.searchValue);  // Filter Original List into Filtered List
    } );
  }

}
