import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreServiceService {

 constructor() { }

  setData(fname:string,lname:string,mail:string,token:string){
    window.localStorage.setItem('first_name',fname);
    window.localStorage.setItem('last_name',lname);
    window.localStorage.setItem('email',mail);
    window.sessionStorage.setItem('token',token);
  }

  getData(){

    const saveData=[];

    let data={
      first_name:window.localStorage.getItem('first_name'),
      last_name:window.localStorage.getItem('last_name'),
      email:window.localStorage.getItem('email'),
    }

    saveData.push(data);
    return saveData;
  };

  getToken(){
    return window.sessionStorage.getItem('token')
  };

  getDestroy(){
    return window.sessionStorage.clear();
  }
}
