import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hero-child",
  templateUrl: "./hero-child.component.html",
  styleUrls: ["./hero-child.component.css"]
})
export class HeroChildComponent implements OnInit {
  @Input() astronaut: string;
  mission: string = "testing";
  constructor() {}
  ngOnInit() {}
  confirmMission() {
    alert("Mission Confirm by : " + this.astronaut);
  }
}
