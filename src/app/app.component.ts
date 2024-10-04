import { Component, Inject, PLATFORM_ID, OnInit } from "@angular/core";
import { Router, RouterOutlet, RouterModule } from "@angular/router";
// import { CrudService } from "./services/crud.service";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AccueilComponent } from "./pages/accueil/accueil.component";
import { CookieBannerComponent } from "./pages/components/cookie-banner/cookie-banner.component";
import { isPlatformBrowser } from "@angular/common";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [HeaderComponent, FooterComponent, RouterOutlet, RouterModule, AccueilComponent, CookieBannerComponent],
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
	// constructor(private crudService: CrudService) {}
	ngOnInit(): void {
		// this.crudService.fetchData("accueil").subscribe(
		// 	(response) => {
		// 		console.log(response);
		// 	},
		// 	(error) => {
		// 		console.error("Error fetching data : ", error); // Add console.error to log any errors
		// 	}
		// );
	}
}
