import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { MissionService } from "../service/mission.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-hero-child",
  templateUrl: "./hero-child.component.html",
  styleUrls: ["./hero-child.component.css"],
  providers: [MissionService]
})
export class HeroChildComponent implements OnInit, OnDestroy {
  @Input() astronaut: string;
  mission = "<no mission announced>";
  confirmed = false;
  announced = false;
  subscription: Subscription;
  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(mission => {
      alert("hi");
      this.mission = mission;
      this.announced = true;
      this.confirmed = false;
    });
  }
  ngOnInit() {}
  confirmMission() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
