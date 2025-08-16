import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RuntimeConfig { apiBaseUrl: string; wsBaseUrl: string; }

@Injectable({ providedIn: 'root' })
	export class RuntimeConfigService {
		private readonly configSignal = signal<RuntimeConfig>({ apiBaseUrl: '/api', wsBaseUrl: 'ws://localhost:8000/ws' });
		constructor(private readonly http: HttpClient) {}
		get apiBaseUrl() { return this.configSignal().apiBaseUrl; }
		get wsBaseUrl() { return this.configSignal().wsBaseUrl; }
		load() { return this.http.get<RuntimeConfig>('assets/config.json').toPromise().then(cfg => { if (cfg) { this.configSignal.set(cfg); } }); }
	}

export function initRuntimeConfig(cfg: RuntimeConfigService) { return () => cfg.load(); }