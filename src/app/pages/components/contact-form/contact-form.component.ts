import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
	selector: "app-contact-form",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./contact-form.component.html",
	styleUrl: "./contact-form.component.css",
})
export class ContactFormComponent {}
