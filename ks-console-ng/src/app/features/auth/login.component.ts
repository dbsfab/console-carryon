import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../core/services/auth.service';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
	template: `
		<div style="max-width: 360px; margin: 10vh auto;">
			<h1>Sign in</h1>
			<form [formGroup]="form" (ngSubmit)="submit()">
				<mat-form-field appearance="outline" style="width: 100%;">
					<mat-label>Username</mat-label>
					<input matInput formControlName="username" required>
				</mat-form-field>
				<mat-form-field appearance="outline" style="width: 100%;">
					<mat-label>Password</mat-label>
					<input matInput type="password" formControlName="password" required>
				</mat-form-field>
				<button mat-raised-button color="primary" type="submit" [disabled]="form.invalid">Login</button>
			</form>
		</div>
	`
})
export class LoginComponent {
	private readonly fb = inject(FormBuilder);
	private readonly auth = inject(AuthService);
	private readonly router = inject(Router);
	form = this.fb.group({ username: ['', Validators.required], password: ['', Validators.required] });
	submit() {
		if (this.form.invalid) return;
		this.auth.setToken('dev-token');
		this.router.navigateByUrl('/');
	}
}