import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  src: string = "https://images.pexels.com/photos/5675540/pexels-photo-5675540.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"

}
