import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { ContactFormComponent } from "../components/contact-form/contact-form.component";
declare let ngMain: any;

@Component({
	selector: "app-contact",
	standalone: true,
	imports: [RouterModule, CommonModule, ContactFormComponent],
	templateUrl: "./contact.component.html",
	styleUrl: "./contact.component.css",
})
export class ContactComponent {
	platformId = inject(PLATFORM_ID);

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			ngMain.init();
		}
	}
}
