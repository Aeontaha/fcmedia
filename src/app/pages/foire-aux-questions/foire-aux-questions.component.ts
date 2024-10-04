import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { DeaFormComponent } from "../components/dea-form/dea-form.component";
declare let ngMain: any;

@Component({
	selector: "app-faq",
	standalone: true,
	imports: [RouterModule, CommonModule, DeaFormComponent],
	templateUrl: "./foire-aux-questions.component.html",
	styleUrl: "./foire-aux-questions.component.css",
})
export class FaqComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
