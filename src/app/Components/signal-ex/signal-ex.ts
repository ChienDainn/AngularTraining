import { Component,computed,signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Chetan";
  productName = "Moto";

  courseName = signal<string>("Angular");
  courseDuration = signal("15 Videos");

  courseDetails = computed(() =>  this.courseName()+"-" +this.courseDuration());

  constructor() {
    this.firstName = "Rahul";
    console.log(this.firstName);

    this.courseName.set("React");
    console.log(this.courseName());
    setTimeout(() => {
      this.courseName.set("Siuuuuuuuuu"); 
    }, 2000);
  }
}