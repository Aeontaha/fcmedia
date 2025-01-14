import { ApplicationConfig } from "@angular/core";
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from "@angular/router";

import { routes } from "./app.routes";
import { provideClientHydration, withHttpTransferCacheOptions } from "@angular/platform-browser";
import { provideHttpClient, withFetch } from "@angular/common/http";

const scrollConfig: InMemoryScrollingOptions = {
	scrollPositionRestoration: "top",
	anchorScrolling: "enabled",
};
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(routes, inMemoryScrollingFeature), provideHttpClient(withFetch()), provideClientHydration(withHttpTransferCacheOptions({ includePostRequests: true }))],
};
