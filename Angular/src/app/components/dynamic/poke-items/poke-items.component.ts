import { Component, OnInit } from '@angular/core';

import { pokeItem } from '../../../models/poke-item';  // Pokemon Model

import { pokeItemService } from '../../../services/poke-item.service';  // Nature Service
import { Router } from '@angular/router'; // Router

@Component({
  selector: 'app-pokeItems',
  templateUrl: './poke-items.component.html',
  styleUrls: ['./poke-items.component.css']
})
export class pokeItemsComponent implements OnInit {

  pokeItemList: pokeItem[];
  filteredpokeItemList: pokeItem[];
  loading: boolean;  // Whenever the data is loaded or NOT
  searchValue: string = "";  // Input Value to Search For - ngModel on HTML
  urlImage: string;

  constructor(private pokeItemService: pokeItemService,
              private router: Router) {
        this.loading = true;  // Start at true, always need to load at first time
        this.urlImage = "../../../../assets/images/items/"
   }

  ngOnInit() {
    this.pokeItemService.getpokeItem()  // Get pokeItem List
     .subscribe(res => {
       this.pokeItemList = res as pokeItem[];
       this.filteredpokeItemList = this.pokeItemList;
       this.loading = false;  // After We got the data No more Loading
     })
  }

  navigate(pokeitem: string) {
    this.router.navigate(['/held-items', pokeitem]);  // Navigate to Single Pokemon using Pokemon ID
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
