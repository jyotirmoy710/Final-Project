import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent implements OnInit{
allcom!:any;


constructor( private scom:CategoryService){}

ngOnInit(): void {
  this.allcom=this.scom.allcomedy
}
}
