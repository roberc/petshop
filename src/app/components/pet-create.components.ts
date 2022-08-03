import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PetCategory, PetClass} from "./pet.class";

@Component({
    selector: 'app-pet-create',
    template: `
        <mat-card>
            <mat-card-title>Add a Pet</mat-card-title>
            <mat-card-content>
                <form [formGroup]="form">
                    <mat-form-field>
                        <mat-select formControlName="category" placeholder="Category of the Pet" required>
                            <mat-option [value]="0">--</mat-option>
                            <mat-option *ngFor="let animal of categories" [value]="animal.id">
                                {{animal.name}}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field>
                        <input matInput placeholder="Name of the Pet" formControlName="name" required>
                    </mat-form-field>
                    <mat-form-field>
                        <input matInput placeholder="Url of the Pet's Image" formControlName="pic" required>
                    </mat-form-field>
                    <mat-form-field>
                        <mat-select formControlName="status" placeholder="Status of the Pet" required>
                            <mat-option [value]="0">--</mat-option>
                            <mat-option *ngFor="let status of ['available', 'pending', 'sold']" [value]="status">
                                {{ status }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button type="submit" mat-raised-button color="primary" (click)="save()">Save a Pet</button>
                    <button mat-raised-button color="warn" (click)="return.emit()">Cancel</button>
                </form>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./login.scss'],
    styles: [`
        button {
            margin-right: 10px;
        }
    `]
})
export class PetCreateComponents {
    @Output() return = new EventEmitter<PetClass>();

    form: FormGroup = new FormGroup({
        category: new FormControl(0),
        name: new FormControl(''),
        pic: new FormControl(''),
        status: new FormControl(''),
    });
    categories: PetCategory[] = [
        {name: 'Dogs', id: 1},
        {name: 'Cats', id: 2},
        {name: 'Rabbits', id: 3},
        {name: 'Lions', id: 4},
    ];
    save() {
        this.return.emit(this.form.value);
    }
}
