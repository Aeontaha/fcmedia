import { CommonModule, isPlatformBrowser } from "@angular/common";
import { Component, PLATFORM_ID, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
	selector: "app-dea-form",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./dea-form.component.html",
	styleUrl: "./dea-form.component.css",
})
export class DeaFormComponent {}
