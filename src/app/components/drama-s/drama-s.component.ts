import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-drama-s',
  templateUrl: './drama-s.component.html',
  styleUrls: ['./drama-s.component.scss']
})
export class DramaSComponent implements OnInit{

  id!: any;
  data!: any;
  mname!: string;
  constructor(private aroute: ActivatedRoute, private cate: CategoryService) { }
  ngOnInit(): void {
    this.aroute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.data = this.cate.alldrama.find((f: any) => f.id == this.id);
      // console.log('details',this.data);
      this.mname = this.data.movie_name;
      // console.log("Movie: ",this.mname); 

    })
  }
}
