import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-pierre-fabre",
	standalone: true,
	imports: [RouterModule, CommonModule],

	templateUrl: "./pierre-fabre.component.html",
	styleUrl: "./pierre-fabre.component.css",
})
export class PierreFabreComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
