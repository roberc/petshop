export type Pet = {
    id: number,
    name: string;
    status: PetStatus,
    photoUrls: string[],
    category: PetCategory|number
};
export type PetCategory = {name: string, id: number};
export type PetStatus = "available" | "pending" |"sold";

export class PetClass implements Pet {
    category: PetCategory|number;
    id: number;
    name: string;
    photoUrls: string[];
    status: PetStatus;
    constructor(r?: Pet) {
        if (!r) {
            r = <Pet>{};
        }
        if (typeof r.category === 'number') {
            this.category = {id: r.category, name: ''};
        }
        else {
            this.category = r.category;
        }
        this.id = r.id;
        this.name = r.name;
        this.photoUrls = r.photoUrls;
        this.status = r.status;
    }
}
