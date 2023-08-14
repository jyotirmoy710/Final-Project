import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { SoscarService } from 'src/app/Services/soscar.service';

@Component({
  selector: 'app-allhit-s',
  templateUrl: './allhit-s.component.html',
  styleUrls: ['./allhit-s.component.scss']
})
export class AllhitSComponent implements OnInit{


  id!: any;
  data!: any;
  mname!: string;
  constructor(private aroute: ActivatedRoute, private soscr: SoscarService) { }
  ngOnInit(): void {
    this.aroute.paramMap.subscribe(param => {
      this.id = param.get('id');
      this.data = this.soscr.allhit.find((f: any) => f.id == this.id);
      // console.log('details',this.data);
      this.mname = this.data.movie_name;
      // console.log("Movie: ",this.mname);

      })
  } 
}
