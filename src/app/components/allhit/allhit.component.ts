import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { SoscarService } from 'src/app/Services/soscar.service';

@Component({
  selector: 'app-allhit',
  templateUrl: './allhit.component.html',
  styleUrls: ['./allhit.component.scss']
})
export class AllhitComponent {
data!:any;
id!:any;
details!:any;


constructor(private aroute:ActivatedRoute,private soscr:SoscarService){}

ngOnInit(): void {
  this.data=this.soscr.allhit;

  this.aroute.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.details = this.soscr.allhit.find((x: any) => x.id == this.id)

  })
}
}
