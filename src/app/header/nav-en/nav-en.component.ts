import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-en',
  templateUrl: './nav-en.component.html',
  styleUrls: ['./nav-en.component.scss']
})
export class NavEnComponent implements OnInit {

  public open:boolean = false;
  public group:boolean = false;
  public schedule:boolean = false;
  public vak:boolean = false;
  public module:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  toggle(show){
    if(show == "group"){
      if(!this.group){
        this.group = true;
      }else{
        this.group = false;
      }
    }
    
    else if(show == "schedule"){
      if(!this.schedule){
        this.schedule = true;
      }else{
        this.schedule = false;
      }
    }

    else if(show == "vak"){
      if(!this.vak){
        this.vak = true;
      }else{
        this.vak = false;
      }
    }

    else if(show == "module"){
      if(!this.module){
        this.module = true;
      }else{
        this.module = false;
      }
    }

    else if(show == "open"){
      if(!this.open){
        this.open = true;
      }else{
        this.open = false;
      }
    }

  }

}
