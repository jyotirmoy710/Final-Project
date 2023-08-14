
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit{
allactn!:any;
id!:any;
details!:any;


constructor(private sactn: CategoryService, private aroute:ActivatedRoute,private cate:CategoryService){}

ngOnInit(): void {
  this.allactn=this.sactn.allaction;

  this.aroute.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.details = this.cate.allaction.find((x: any) => x.id == this.id)

  })
}

}

