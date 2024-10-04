import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { DeaFormComponent } from "../components/dea-form/dea-form.component";
declare let ngMain: any;
@Component({
	selector: "app-indoor",
	standalone: true,
	imports: [RouterModule, CommonModule, DeaFormComponent],
	templateUrl: "./indoor.component.html",
	styleUrl: "./indoor.component.css",
})
export class IndoorComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
