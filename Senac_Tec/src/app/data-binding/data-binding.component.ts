import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nome:String ="Henrique";
  idade:Number = 20;
  isDisabled: Boolean = true;
  InputType: String = "Date";
  InputDisabled: Boolean = false;
  nomeTwoWay:String ="Henrique";

  constructor() { }

  ngOnInit(): void {
  }
  eventoDoBotao(){
    this.InputDisabled = !this.InputDisabled;
  }
}
