import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
    apiUri = 'api/animals';
    animalList: any;
  constructor(private http:HttpClient) { }


getAnimalsData(){
  return this.http.get<any>(this.apiUri).subscribe(
    result => {
      this.animalList = result;
      console.log(result);
    }
  );
}
}