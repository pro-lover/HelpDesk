import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
Testing(){
  var name = $("#txtName").val();
  
  var carName = name.toString();
  document.getElementById("demo").innerHTML = carName;
}


}
