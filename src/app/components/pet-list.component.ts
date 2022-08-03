import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PetClass} from "./pet.class";
import {MatDialog} from "@angular/material/dialog";
import {PetShowComponent} from "./pet-show.component";

@Component({
    selector: 'app-pet-list',
    template: `
        <mat-card>
            <button mat-raised-button color="primary" (click)="return.emit({action: 'add'})">Add a Pet</button>
            <table>
                <thead>
                    <th>Name of the Pet</th>
                    <th>Status</th>
                </thead>
                <tbody>
                <tr *ngFor="let r of buf" (click)="open(r)">
                    <td>{{ r.name }}</td>
                    <td>{{ r.status }}</td>
                </tr>
                </tbody>
            </table>
        </mat-card>
    `,
    styleUrls: ['./pet-list.scss']
})
export class PetListComponent {
    @Input() buf?: PetClass[];
    @Output() return = new EventEmitter<any>();

    open(pet: PetClass) {
        this.dialog.open(PetShowComponent, {data: pet});
    }
    constructor(public dialog: MatDialog) {}
}
