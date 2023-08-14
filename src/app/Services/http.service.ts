import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odetails} from '../classes/odetails';
import { StoreServiceService } from './store-service.service';
import { Review } from '../classes/review';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  json_url: string = 'http://localhost:3000/review';
  sign_url: string = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";
  log_url: string = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";
  profile_api: string = "https://wtsacademy.dedicateddevelopers.us/api/user/profile-details";
  constructor(private http: HttpClient, private sservice: StoreServiceService) { }


// sing in & log in edtails


  newreg(data: any): Observable<Odetails[]> {
    return this.http.post<Odetails[]>(this.sign_url, data)
  };


  lin(data: any): Observable<Odetails[]> {
    return this.http.post<Odetails[]>(this.log_url, data)
  };


  user_profile(): Observable<Odetails[]> {
    return this.http.get<Odetails[]>(this.profile_api, {
      headers: new HttpHeaders({
        'x-access-token': `${this.sservice.getToken()}`
      })
    })
  };

  // json maintain

  addReview(data: any): Observable<Review[]> {
    return this.http.post<Review[]>(this.json_url, data)
  };

  getUsers(): Observable<Review[]> {
    return this.http.get<Review[]>(this.json_url)
  };

  singleItem(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.json_url}/${id}`)
  }

  delReview(id: number): Observable<Review[]> {
    return this.http.delete<Review[]>(`${this.json_url}/${id}`)
  }

  updateReview(id: any, formData: any): Observable<Review[]> {
    return this.http.put<Review[]>(`${this.json_url}/${id}`, formData)
  }
}
