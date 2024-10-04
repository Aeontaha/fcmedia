import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-lacement-de-site",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./lacement-de-site.component.html",
	styleUrl: "./lacement-de-site.component.css",
})
export class LacementDeSiteComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
