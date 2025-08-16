import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RuntimeConfigService } from '../../core/config/runtime-config.service';

export interface Cluster { name: string; }

@Injectable({ providedIn: 'root' })
export class ClusterService {
	private readonly http = inject(HttpClient);
	private readonly cfg = inject(RuntimeConfigService);
	listClusters() { return this.http.get<Cluster[]>(`${this.cfg.apiBaseUrl}/clusters`); }
}