import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, inject, PLATFORM_ID } from "@angular/core";
import { RouterModule } from "@angular/router";
declare let ngMain: any;

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.css",
})
export class FooterComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
		}
	}
}
