import { NgModule } from "@angular/core";
import { PasswordOverviewPageComponent } from "./password-overview-page/password-overview-page.component";
import { ComponentsModule } from "../components/components.module";


@NgModule({
    declarations: [
        PasswordOverviewPageComponent
    ],
    imports: [
        ComponentsModule
    ],
    exports: [
        PasswordOverviewPageComponent
    ]
})
export class ContainersModule { }