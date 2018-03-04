import { NgModule } from "@angular/core";
import { HomePage } from "./home";
import { IonicPageModule } from "ionic-angular";

// how to lazy load the Home Page so that the app size is smaller 
@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModel {

}