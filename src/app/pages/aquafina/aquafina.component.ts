import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-aquafina",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./aquafina.component.html",
	styleUrl: "./aquafina.component.css",
})
export class AquafinaComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
