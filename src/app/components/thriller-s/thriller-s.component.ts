import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-thriller-s',
  templateUrl: './thriller-s.component.html',
  styleUrls: ['./thriller-s.component.scss']
})
export class ThrillerSComponent {
  id!: any;
  data!: any;
  mname!: string;
  constructor(private aroute: ActivatedRoute, private cate: CategoryService) { }
  ngOnInit(): void {
    this.aroute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.data = this.cate.allthriller.find((f: any) => f.id == this.id);
      // console.log('details',this.data);
      this.mname = this.data.movie_name;
      // console.log("Movie: ",this.mname); 

    })
  }
}
