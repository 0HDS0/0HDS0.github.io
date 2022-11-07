import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-news',
  templateUrl: './dialog-news.component.html',
  styleUrls: ['./dialog-news.component.css']
})
export class DialogNewsComponent implements OnInit {

  public newsForm!: FormGroup;

  constructor(private readonly adapter: DateAdapter<Date>,
    private FormBuilder: FormBuilder) {
    this.adapter.setLocale('pt-br')
   }

  ngOnInit(): void {
    this.newsForm = this.FormBuilder.group({
      title: ['',Validators.required],
      caption: ['',Validators.required],
      body: ['',Validators.required],
      author: ['',Validators.required],
      publishDate: ['',Validators.required]
    });
  }
  saveNews(){
    console.log(this.newsForm.value)
  }
}
