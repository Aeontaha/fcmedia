import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-acutalite",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./acutalite.component.html",
	styleUrl: "./acutalite.component.css",
})
export class AcutaliteComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
