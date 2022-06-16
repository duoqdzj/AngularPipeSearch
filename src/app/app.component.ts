import { Component, OnInit } from '@angular/core';

import { PersonService } from './services/person.service';
import { Person } from './src/app/models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  public searchFilter: any = '';

  public persons:Person[]=[];

  // susikuriu objekta ir issikviciu services
  constructor(
    private personService:PersonService, 
    ) { }


  ngOnInit(): void {
        this.personService.getPersons()
    .subscribe(
      (response)=>{
        this.persons=response;
      }
    )
  }


}



  
