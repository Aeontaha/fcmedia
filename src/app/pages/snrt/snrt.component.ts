import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-snrt",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./snrt.component.html",
	styleUrl: "./snrt.component.css",
})
export class SnrtComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
