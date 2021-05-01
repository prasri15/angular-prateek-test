import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-hero-parent",
  templateUrl: "./hero-parent.component.html",
  styleUrls: ["./hero-parent.component.css"]
})
export class HeroParentComponent implements OnInit {
  history: string[] = [];
  astronauts = ["Lovell", "Swigert", "Haise"];
  missions = ["Fly to the moon!", "Fly to mars!", "Fly to Vegas!"];
  nextMission = 0;
  constructor() {}
  ngOnInit() {}
  announce() {
    const mission = this.missions[this.nextMission++];
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
