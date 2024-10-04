import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-novalys",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./novalys.component.html",
	styleUrl: "./novalys.component.css",
})
export class NovalysComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
