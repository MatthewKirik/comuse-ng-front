import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlHasErrorPipe } from './control-has-error.pipe';



@NgModule({
    declarations: [
        ControlHasErrorPipe
    ],
    exports: [
        ControlHasErrorPipe
    ],
    imports: [
        CommonModule
    ]
})
export class ValidationUtilsModule { }
