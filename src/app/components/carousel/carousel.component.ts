import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  picture1:string="assets/image/banner.png";
  picture2:string="assets/image/banner2.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
