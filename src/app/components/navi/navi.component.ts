import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
logo:string="assets/image/logo.jpg"
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }
  get filterText():string{
  return this.searchService.filterData;
  }
  set filterText (value: string){
    this.searchService.filterData=value;
  }
  }