import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {Pet} from "./pet.class";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
    selector: 'app-pet-dialogue',
    template: `
        <h1 mat-dialog-title>Showing Details of {{ data.name }}</h1>
        <div mat-dialog-content>
            <p>Image URL(s): {{ data.photoUrls.join(', ') }}</p>
            <p>Pet's Status: {{ data.status }}</p>
        </div>
        <div mat-dialog-actions>
            <button mat-button mat-dialog-close="true">Close</button>
        </div>
    `,
})
export class PetShowComponent {
    @Output() return = new EventEmitter<any>();

    constructor(@Inject(MAT_DIALOG_DATA) public data: Pet) {}
}
