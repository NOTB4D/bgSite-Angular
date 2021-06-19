import { environment } from './../../../environments/environment';
import { CarouselImage } from './../../models/carouselImage';
import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  picture1:string="assets/image/banner.png";
  picture2:string="assets/image/banner2.jpg";
  carousel:CarouselImage[]=[];
  imageBasePath = environment.imageUrl;
  constructor(private carouselservice:CarouselService) { }

  ngOnInit(): void {
    this.getimage();
  }


  getimage(){
    this.carouselservice.getcarousel().subscribe(response=>{
      response.data.map((e,t)=>{
        this.carousel.push(e)
    });
    // this.carousel=response.data;
  })
  }





}
