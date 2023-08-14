import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';
import { StoreServiceService } from 'src/app/Services/store-service.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.scss']
})
export class ViewReviewComponent implements OnInit {

  jData!: any;
  smovie!: any;
  pmovie!: any;
  constructor(private http: HttpService,
    private strsrvc: StoreServiceService, private aroute: ActivatedRoute) { }


  ngOnInit(): void {

    this.aroute.paramMap.subscribe(param => {
      this.smovie = param.get('movie');
      console.log("Movie name", this.smovie);

      this.http.getUsers().subscribe((rcv) => {
        this.jData = rcv;
        // console.log("Rcv From json", rcv);
        this.pmovie = rcv.filter((x: any) => x.movie == this.smovie)
        console.log('Pmovie is', this.pmovie);

      })

    });


  }
}