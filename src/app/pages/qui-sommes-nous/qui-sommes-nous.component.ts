import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { DeaFormComponent } from "../components/dea-form/dea-form.component";
declare let ngMain: any;

@Component({
	selector: "app-qui-sommes-nous",
	standalone: true,
	imports: [RouterModule, CommonModule, DeaFormComponent],
	templateUrl: "./qui-sommes-nous.component.html",
	styleUrl: "./qui-sommes-nous.component.css",
})
export class QuiSommesNousComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
