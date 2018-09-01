import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

	slide:boolean;

	toSlide() {
		this.slide = !this.slide;
	}
}
