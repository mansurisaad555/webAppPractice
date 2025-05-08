
 export class vehicle{
    vehicleName: String;
    vehicleYear: number;
    vehicleModel: String;

    constructor(vehicleName: String, vehicleYear: number, vehicleModel: String){
        this.vehicleName = vehicleName;
        this.vehicleYear = vehicleYear;
        this.vehicleModel = vehicleModel;
    }

     bio(): void {
        console.log(`name: ${this.vehicleName} model: ${this.vehicleModel} year: ${this.vehicleYear}`);
    }

    carSound(sound: string): void {
        console.log(`${this.vehicleName} makes sound ${sound}`);
    }
}
