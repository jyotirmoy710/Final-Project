import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-action-s',
  templateUrl: './action-s.component.html',
  styleUrls: ['./action-s.component.scss']
})
export class ActionSComponent implements OnInit {

  id!: any;
  data!: any;
  mname!: string;
  constructor(private aroute: ActivatedRoute, private cate: CategoryService) { }
  ngOnInit(): void {
    this.aroute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.data = this.cate.allaction.find((f: any) => f.id == this.id);
      // console.log('details',this.data);
      this.mname = this.data.movie_name;
      // console.log("Movie: ",this.mname); 


    })
  }


}
