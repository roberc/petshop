import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pet, PetClass} from "./components/pet.class";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    logged_in = false;
    buf?: Pet[];
    add_dialogue = false;
    ngOnInit() {
        this.http.get('http://localhost/v2/pet/findByStatus?status=available', {headers: {api_key: 'dshsdfhdsfh'}})
            .subscribe((d: any) => {
                if (Array.isArray(d)) {
                    const buf = [];
                    for (const r of d) {
                        buf.push(new PetClass(r));
                    }
                    this.buf = buf;
                }
            })
    }
    save_pet(e: any) {
        if (typeof e === 'undefined') {
            this.add_dialogue = false
        }
        else if (e.category > 0 && e.name?.length > 0 && e.pic?.length > 0 && e.status?.length > 0) {
            this.add_dialogue = false;
            this.buf?.push(new PetClass({name: e.name, category: e.category, status: e.status, photoUrls: [e.pic], id: -1}));
        }
    }
    return_list(e: any) {
        if (e?.action === 'add') {
            this.add_dialogue = true;
        }
    }
    constructor(private http: HttpClient) {
    }
}
