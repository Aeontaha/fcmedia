import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-dacia",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./dacia.component.html",
	styleUrl: "./dacia.component.css",
})
export class DaciaComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
