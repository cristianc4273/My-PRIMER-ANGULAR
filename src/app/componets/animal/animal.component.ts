import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
animalList:any;
  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalList=this.animalService.getAnimalsData();
    console.log(this.animalList);
  }

}
