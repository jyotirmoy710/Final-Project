import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-crime-s',
  templateUrl: './crime-s.component.html',
  styleUrls: ['./crime-s.component.scss']
})
export class CrimeSComponent implements OnInit{

  id!:any;
  data!:any;
mname!:string;
constructor(private aroute:ActivatedRoute,private cate:CategoryService){}
  ngOnInit(): void {
    this.aroute.paramMap.subscribe(param=>{
      this.id=param.get('id');
      this.data=this.cate.allcrime.find((f:any)=>f.id==this.id);
      // console.log('details',this.data);
      this.mname=this.data.movie_name;
      // console.log("Movie: ",this.mname); 
    
      
    })
}
}
