import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { DeaFormComponent } from "../components/dea-form/dea-form.component";
declare let ngMain: any;

@Component({
	selector: "app-region-de-beni-mellal-khenifra",
	standalone: true,
	imports: [RouterModule, CommonModule, DeaFormComponent],
	templateUrl: "./region-de-beni-mellal-khenifra.component.html",
	styleUrl: "./region-de-beni-mellal-khenifra.component.css",
})
export class RegionDeBeniMellalKhenifraComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}