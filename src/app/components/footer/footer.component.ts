import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  instagram:string="assets/image/instagram.png"
  adress:string="https://www.instagram.com/eserkucuker/"
  constructor() { }

  ngOnInit(): void {
  }

}
