import { Component } from '@angular/core';

@Component({
  selector: 'app-rou1',
  templateUrl: './rou1.component.html',
  styleUrls: ['./rou1.component.css']
})
export class Rou1Component {
  img_url: string = "assets/images/red.jpeg";
  s: boolean = true;
  timer: number = 3000;
  intervalId: any;
  img_url1:string = "assets/images/red1.jpg"

  str:string="Stop your vehicle until the green light appears";
  constructor() {
    this.intervalId = setInterval(() => this.changeLight(), this.timer);
  }

 

  changeLight() {

    if (this.img_url === "assets/images/red.jpg") {
      this.img_url = "assets/images/yellow.jpg";
      this.str = "Wait";
      
    } else if (this.img_url === "assets/images/yellow.jpg") {
      this.img_url = "assets/images/green.jpg";
      this.str = "Go";
    } else {
      this.img_url = "assets/images/red.jpg";
      this.str = "Stop";
    }

   
    if (this.img_url === "assets/images/red.jpg") {
      this.img_url1 = "assets/images/red1.jpg";
      this.str = "Stop";
    } else if (this.img_url === "assets/images/yellow.jpg") {
      this.img_url1 = "assets/images/yellow1.jpg";
      this.str = "Wait"; 
    } else {
      this.img_url1 = "assets/images/green1.jpg";
      this.str = "Go"; 
    }
}
}

