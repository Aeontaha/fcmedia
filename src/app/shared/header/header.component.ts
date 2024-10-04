import { isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject, OnInit } from "@angular/core";
import { RouterModule, Router } from "@angular/router";
// import { environment } from "../../../environments/environment";
// import { CrudService } from "../../services/crud.service";
declare let ngMain: any;

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterModule],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent implements OnInit {
	platformId = inject(PLATFORM_ID);
	// imgUploadURL = environment.imgUploadURL;
	headerApplied = false;
	// currentLang: string;

	constructor(private router: Router) {}

	// constructor(private crudService: CrudService) {}

	ngOnInit(): void {
		if (isPlatformBrowser(this.platformId)) {
			// Collapse the menu, reset the burger icon, and clean up body and html classes
			this.router.events.subscribe(() => {
				const navbarCollapse = document.querySelector(".navbar-collapse");
				const navbarToggler = document.querySelector(".navbar-toggler");
				const body = document.body;
				const html = document.documentElement; // target <html> tag

				if (navbarCollapse) {
					// Close the menu
					navbarCollapse.classList.remove("show");
				}

				if (navbarToggler) {
					// Reset the burger icon
					navbarToggler.classList.add("collapsed");
				}

				// Clean up body and html classes to restore scrolling and proper behavior
				body.classList.remove("navbar-collapse-show", "no-scroll", "navbar-open");
				html.classList.remove("overflow-hidden"); // Remove overflow-hidden from <html>
			});
		}
	}
}
