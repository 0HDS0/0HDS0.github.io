import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nome:String ="Henrique";
  idade:Number = 20;
  isDisable: Boolean = true;
  InputType: String = "Date";

  constructor() { }

  ngOnInit(): void {
  }

}
