import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { DeaFormComponent } from "../components/dea-form/dea-form.component";
declare let ngMain: any;

@Component({
	selector: "app-region-de-rabat-sale-kenitra",
	standalone: true,
	imports: [RouterModule, CommonModule, DeaFormComponent],
	templateUrl: "./region-de-rabat-sale-kenitra.component.html",
	styleUrl: "./region-de-rabat-sale-kenitra.component.css",
})
export class RegionDeRabatSaleKenitraComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
