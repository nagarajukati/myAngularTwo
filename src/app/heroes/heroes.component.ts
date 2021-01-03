import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  heroes:Hero[]
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter()
  constructor() { 

  }
  ngOnInit() {
    this.heroes=[]
  }
  onSelect(hero) {
    
  }

  fireEvent() {
    this.childEvent.emit("Hello from child")
  }
}