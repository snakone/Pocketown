import { Component, OnInit, HostListener } from '@angular/core';

declare var $: any;  // JQuery

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

@HostListener('window:scroll') do(){  // Host Listener Window Scroll

  let pikachu = document.getElementById("Pikachu").style;  // Get the Button
  let scroll = document.documentElement.scrollTop;  // Get the Document Scroll Value

  scroll > 350 ?
  pikachu.display = "block" : pikachu.display = "none";  // Swap Display
}

topFunction():void {  // Animation using JQuery
  
  $('body,html').animate({
				scrollTop: 0
			}, 800);  // 0.8 Seconds
  }

}
