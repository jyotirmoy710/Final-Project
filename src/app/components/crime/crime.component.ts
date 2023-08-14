import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.scss']
})
export class CrimeComponent implements OnInit{

  allcrm!:any;

  constructor(private scrm:CategoryService){}


  ngOnInit(): void {
    this.allcrm=this.scrm.allcrime
  }
}
