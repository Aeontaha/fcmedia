import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-barid-bank",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./barid-bank.component.html",
	styleUrl: "./barid-bank.component.css",
})
export class BaridBankComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
