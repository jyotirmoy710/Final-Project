import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.scss']
})
export class ThrillerComponent implements OnInit{


  allthrlr!:any;

  constructor(private sthrlr:CategoryService){}

  ngOnInit(): void {
    this.allthrlr=this.sthrlr.allthriller;
  }
}
