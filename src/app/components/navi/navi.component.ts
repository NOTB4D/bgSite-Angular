import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';


@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
logo:string="assets/image/logo.jpg"
check:boolean;
  constructor(private searchService:SearchService,
    private authservice:AuthService,
    private toastrservice:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
   this.load();
  }
  get filterText():string{
  return this.searchService.filterData;
  }
  set filterText (value: string){
    this.searchService.filterData=value;
  }
load(){
  this.check = this.authservice.isAuthenticated();
}

  logOut(){
    localStorage.clear()
    this.toastrservice.success("Çıkış Yaptınız");
    this.router.navigate(["/"]).then(r => window.location.reload())
  }
  }