import { throwError } from "rxjs";
import { Error } from "./models/error.model";

export function handleError(error: any){
    let errorObj: Error = {message: ''};    
    console.log('error occur', error);
    
    if (error.hasOwnProperty('error')) {
      // client-side error
      errorObj.message = `${error.message}`;
    } else {
      // server-side error
      errorObj.message = `${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorObj);
}