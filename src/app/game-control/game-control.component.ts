import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

   @Output() intervalFired= new EventEmitter();
  number=0;
  interval:any;
  lastNumber=0;
  numberCheck:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
this.interval= setInterval(()=>{
  this.intervalFired.emit(this.lastNumber+1)
this.lastNumber++;
},1000)
  }

  onPauseGame(){
clearInterval(this.interval)
  }

// checkNums(){
// this.numberCheck=true;
// setTimeout(() => {
//   this.numberCheck=false;
// }, 1000);
//   }

}
