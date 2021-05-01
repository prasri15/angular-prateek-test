import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeroChildComponent } from "./hero-child/hero-child.component";
import { HeroParentComponent } from "./hero-parent/hero-parent.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeroChildComponent,
    HeroParentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
