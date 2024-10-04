import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { CommonModule, isPlatformBrowser } from "@angular/common"; // Add isPlatformBrowser and PLATFORM_ID
import { Router, RouterModule } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
	selector: "app-cookie-banner",
	standalone: true,
	templateUrl: "./cookie-banner.component.html",
	imports: [CommonModule, RouterModule],
	styleUrls: ["./cookie-banner.component.css"],
})
export class CookieBannerComponent implements OnInit {
	shouldShowBanner: boolean = false;

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	ngOnInit(): void {
		// Check if user has already made a choice
		if (!this.getCookie("cookieChoice")) {
			// Only show the banner if no choice has been made
			this.shouldShowBanner = true;
		}
	}

	acceptCookies(): void {
		if (this.shouldShowBanner) {
			this.saveCookieChoice("accepted");
			this.hideBanner();
		}
	}

	refuseCookies(): void {
		if (this.shouldShowBanner) {
			this.saveCookieChoice("refused");
			this.hideBanner();
		}
	}

	private saveCookieChoice(choice: string): void {
		// Set cookie to expire in 1 year
		const expiryDate = new Date();
		expiryDate.setFullYear(expiryDate.getFullYear() + 1);
		document.cookie = `cookieChoice=${choice};expires=${expiryDate.toUTCString()};path=/;SameSite=Strict`;
	}

	private getCookie(name: string): string | null {
		const nameEQ = name + "=";
		const ca = document.cookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i].trim();
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}

	private hideBanner(): void {
		const banner = document.querySelector(".wrapper") as HTMLElement;
		if (banner) {
			banner.classList.add("fade-out");
			banner.addEventListener(
				"animationend",
				() => {
					this.shouldShowBanner = false;
				},
				{ once: true }
			);
		}
	}
}
