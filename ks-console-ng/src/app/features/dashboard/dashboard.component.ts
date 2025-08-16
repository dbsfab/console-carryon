import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ClusterService, Cluster } from '../../shared/services/cluster.service';

@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [CommonModule, MatButtonModule, MatListModule],
	template: `
		<h1>Dashboard</h1>
		<button mat-raised-button color="primary" (click)="refresh()">Refresh</button>
		<mat-list role="list">
			<mat-list-item role="listitem" *ngFor="let c of clusters()">{{ c.name }}</mat-list-item>
		</mat-list>
	`
})
export class DashboardComponent {
	private readonly clusterService = inject(ClusterService);
	clusters = signal<Cluster[]>([]);
	ngOnInit() { this.refresh(); }
	refresh() { this.clusterService.listClusters().subscribe(data => this.clusters.set(data)); }
}