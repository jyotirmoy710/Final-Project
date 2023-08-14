import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoscarService } from 'src/app/Services/soscar.service';

@Component({
  selector: 'app-oscar',
  templateUrl: './oscar.component.html',
  styleUrls: ['./oscar.component.scss']
})
export class OscarComponent implements OnInit{

  data!:any;
id!:any;
details!:any;

constructor(private oservc: SoscarService, private aroute:ActivatedRoute){}

  ngOnInit(): void {
    this.data=this.oservc.oscarmovies;
  
    this.aroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.details = this.oservc.oscarmovies.find((x: any) => x.id == this.id)
  
    })
  }
}
