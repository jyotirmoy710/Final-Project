import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.scss']
})
export class RomanceComponent implements OnInit{

  allrmc!:any;
  constructor(private aser:CategoryService ){}

  ngOnInit(): void {
    this.allrmc=this.aser.allromance;
  }
}
