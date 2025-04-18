import { Evt } from "./Evt";
import { pub } from "./Pub";

export interface Membre {
    id: string,
    cin: string,
    name: string,
    type: string,
    createdDate: string,
    tabEvent: Evt[],
   
    tabPub: pub[],
}