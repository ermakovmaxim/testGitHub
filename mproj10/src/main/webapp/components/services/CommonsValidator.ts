/**
 * Created by pratik on 28/9/16.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class CommonsValidatorService {

    constructor() {
    }

    validateAndShowErrorMessages(componentConfigArray) : boolean {

        let invalidComponentsArray = [];
        componentConfigArray.forEach((componentConfig)=> {
            if(!document.getElementById(componentConfig.elementId).validity.valid){
                invalidComponentsArray.push(componentConfig);
            }
            
        });

        if(invalidComponentsArray.length > 0) {
            var combinedErrorMessage = this.getCombinedErrorMessage(invalidComponentsArray);
            toastr.error(combinedErrorMessage);
            return true;
        }

        return false;
    }

    getCombinedErrorMessage(invalidComponentsArray)  : string {

        let combinedErrorMessage = 'Please validate following fields : <br><br>';

        invalidComponentsArray.forEach((invalidCmpConfig)=> {
            if(!invalidCmpConfig.hidden) {
                combinedErrorMessage += (invalidCmpConfig.errorMessage? (': '+invalidCmpConfig.errorMessage) : '') + '<br>';
            }
        });

        return combinedErrorMessage;
    }
}
