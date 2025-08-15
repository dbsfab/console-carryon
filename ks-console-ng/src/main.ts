import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/core/interceptors/auth.interceptor';
import { APP_INITIALIZER } from '@angular/core';
import { RuntimeConfigService, initRuntimeConfig } from './app/core/config/runtime-config.service';

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(routes),
		provideHttpClient(withInterceptors([authInterceptor])),
		provideAnimations(),
		{ provide: APP_INITIALIZER, useFactory: initRuntimeConfig, deps: [RuntimeConfigService], multi: true }
	]
}).catch(err => console.error(err));