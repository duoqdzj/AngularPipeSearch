import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../src/app/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public persons: Person[]=[];

  constructor(private http:HttpClient) { }

  public getPersons(){

    return this.http.get<Person[]>("http://localhost:8080/person/")

      }

      public creatPerson(id, firstName, lastName, personalID, dateOfBirth, gender){
        return this.http.post("http://localhost:8080/person/",{
          firstName:firstName,
          lastName:lastName,
          personalID:personalID,
          dateOfBirth:dateOfBirth,
          gender:gender,          
        });

      }
}
