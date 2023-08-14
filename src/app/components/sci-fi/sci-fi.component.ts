import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-sci-fi',
  templateUrl: './sci-fi.component.html',
  styleUrls: ['./sci-fi.component.scss']
})
export class SciFiComponent implements OnInit{

  allscifi!:any;

  constructor(private sscifi:CategoryService){}

  ngOnInit(): void {
    this.allscifi=this.sscifi.allsci_fi;
  }
}
