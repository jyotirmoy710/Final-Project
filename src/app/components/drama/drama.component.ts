import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.scss']
})
export class DramaComponent implements OnInit{

  alldrma!:any;

  constructor(private sdrma:CategoryService){}

  ngOnInit(): void {
    this.alldrma=this.sdrma.alldrama;
  }
}
