import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  x:number=9;
  constructor() { }

  ngOnInit() {

  }
calcul(a,b){
  return a+b;
}
findVal(){

  let T=[8,10,-6,9] ; 
  let NbrElNg=0;
  for (let i = 0; i < T.length; i++) {
    if (T[i]<0) {
      NbrElNg=NbrElNg+1; 
    }
} return NbrElNg;}

}
