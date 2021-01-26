import { Component, NgProbeToken, OnInit } from '@angular/core';
// import {Types} from "../types";
import {ADVANTAGES} from '../type-advantages';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  
  allTypes: string[] = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];
 
  //select a random type from the available ones
  randomNum: number = Math.floor((Math.random() * 17) );
  poke_type: string = this.allTypes[this.randomNum];

  //1 of the correct answer(s)
  randomWeak: number = Math.floor( Math.random() * (ADVANTAGES[this.randomNum].weakness.length-1) );
  poke = ADVANTAGES[this.randomNum].weakness[this.randomWeak];

  //all other possibilities
  possibleOptions: string[] = this.allTypes.filter( (el) => !ADVANTAGES[this.randomNum].weakness.includes(el) );

  randomOpt1: number | undefined;
  options: string[] = [];
  randomOpt2: number | undefined;

  constructor() { }

  ngOnInit(): void { 

    //select random incorrect options
    this.randomOpt1= Math.floor( Math.random() * (this.possibleOptions.length-1) );
    do{
      this.randomOpt2 = Math.floor( Math.random() * (this.possibleOptions.length-1) );
    }while(this.randomOpt2===this.randomOpt1);

    this.options = [this.poke, this.possibleOptions[this.randomOpt1], this.possibleOptions[this.randomOpt2]];
    
    //shuffle the array
    this.options=this.options.sort(() => Math.random() - 0.5);
  }
  
  selectedType : string | undefined;
  answer: string | undefined;
  
  onSelect(choise:string): void{
    if(this.selectedType !== undefined){ //doesn't let the player select another option in the same game
      return;
    }

    this.selectedType = choise;

    if(choise === this.poke){ this.answer="correct!"; }
    else{ this.answer="wrong :("; }

    setTimeout(() => window.location.reload(), 1500);   //refresh the page to start a new game
  }  
}
