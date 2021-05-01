import { Component, OnInit } from "@angular/core";
import { MissionService } from "../service/mission.service";

@Component({
  selector: "app-hero-parent",
  templateUrl: "./hero-parent.component.html",
  styleUrls: ["./hero-parent.component.css"],
  providers: [MissionService]
})
export class HeroParentComponent implements OnInit {
  history: string[] = [];
  astronauts = ["Lovell", "Swigert", "Haise"];
  missions = ["Fly to the moon!", "Fly to mars!", "Fly to Vegas!"];
  nextMission = 0;
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }
  ngOnInit() {}
  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
}
