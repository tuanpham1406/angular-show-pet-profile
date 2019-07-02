import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'Miu miu';
  petImage = 'https://i.pinimg.com/564x/1d/7a/b0/1d7ab0707c327664d1be7498b6d33274.jpg';

  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
