    import {vehicle} from './vehicle';
    export class toyotaCar extends vehicle{
        isReliable: boolean = true;
        specialFeature: String;
        sound: string;

        constructor(model: String, year: number, sound: string, specialFeature: String ){
            super("Toyota", year, model);
            this.sound = sound;
            this.specialFeature = specialFeature;
        }

        bio(): void {
            super.bio();
            console.log(`reliability? ${this.isReliable}`);
            if(this.specialFeature){
                console.log(`special feature: ${this.specialFeature}`);
            }
        }

        carSound(): void {
            super.carSound(this.sound);
        }
    }