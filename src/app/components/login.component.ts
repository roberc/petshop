import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-login',
    template: `
        <mat-card>
            <mat-card-title>Login To the Pet Shop</mat-card-title>
            <mat-card-content>
                <form [formGroup]="form">
                    <mat-form-field>
                        <input matInput placeholder="Login Name (user)" formControlName="login" required>
                    </mat-form-field>
                    <mat-form-field>
                        <input matInput type="password" placeholder="Password (pass)" formControlName="password" required>
                    </mat-form-field>
                    <button type="submit" mat-raised-button color="primary" (click)="login()">Log In</button>
                </form>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./login.scss']
})
export class LoginComponent {
    @Output() logged_in = new EventEmitter<any>();
    form: FormGroup = new FormGroup({
        login: new FormControl(''),
        password: new FormControl(''),
    });

    login() {
        if (this.form.value.login === 'user' && this.form.value.password === 'pass') {
            this.logged_in.emit(true);
        }
        else {
            this.logged_in.emit(false);
        }
    }
}
