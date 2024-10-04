import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-carrefour",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./carrefour.component.html",
	styleUrl: "./carrefour.component.css",
})
export class CarrefourComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
