import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-realisations",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./realisations.component.html",
	styleUrl: "./realisations.component.css",
})
export class RealisationsComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
