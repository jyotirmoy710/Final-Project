import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  addReview!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService) { }
  ngOnInit(): void {
this.addReview=this.fb.group({
  fullname:[''],
  movie:[''],
  review:[''],

})
  }

  reviewSubmit() {
    let data = {
      fullname:this.addReview.value.fullname,
      movie:this.addReview.value.movie,
      review:this.addReview.value.review,
      // moviename:,
      // movie_id,
    }
    this.http.addReview(this.addReview.value).subscribe((add) => {
      console.log("After Submitted Review", add);

    })
  }

}
