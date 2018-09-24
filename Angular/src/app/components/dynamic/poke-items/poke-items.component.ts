import { Component, OnInit } from '@angular/core';

import { PokeItem } from '../../../models/poke-item';  // Poke Item Model

import { PokeItemService } from '../../../services/poke-item.service';  // Pokemon Item Service
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-pokeItems',
  templateUrl: './poke-items.component.html',
  styleUrls: ['./poke-items.component.css']
})
export class PokeItemsComponent implements OnInit {

  pokeItemList: PokeItem[]; // Original List
  filteredpokeItemList: PokeItem[]; // Filtered List
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML
  urlImage: string;

  constructor(private pokeItemService: PokeItemService,
              private router: Router) {
        this.urlImage = "../../../../assets/images/items/"
   }

  ngOnInit() {
    this.pokeItemService.getpokeItem()  // Get pokeItem List
     .subscribe(res => {
       this.pokeItemList = res as PokeItem[];
       this.filteredpokeItemList = this.pokeItemList;  // Make a copy to Filter
     })
  }

  navigate(pokeitem: string) {
    this.router.navigate(['/held-items', pokeitem]);  // Navigate to Single Pokemon Item
  }

  onKeyUp(event){  // On Key Up Javascript Event
    event.preventDefault();
    this.filterpokeItembySearch();  // Filter pokeItem
  }

  filterpokeItembySearch() {
     this.filteredpokeItemList = this.pokeItemList.filter( ( pokeItem, index ) => {  // Filter Array
      // ngModel on Input Text - Search Value
      return pokeItem.item.includes(this.searchValue);  // Filter Original List into Filtered List
    } );
  }

}

// Main Component to Display all Pokemon Items (Heñd Items)
