import { Component, OnInit } from '@angular/core';

import { Move } from '../../../models/move';  // Pokemon Model

import { MoveService } from '../../../services/move.service';  // Nature Service

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {

  moveList: Move[];
  filteredMoveList: Move[];
  panelOpenState = false;
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML

  constructor(private moveService: MoveService) { }

  ngOnInit() {
    this.moveService.getMove()
     .subscribe(res => {
       this.moveList = res as Move[];
       this.filteredMoveList = this.moveList;
     })
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
