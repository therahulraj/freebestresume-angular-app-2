import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ObjectUtilsService {

    isNotEmpty(value: any): boolean {
        return !(value == null || value.length <= 0 || Object.keys(value).length == 0);
    }
    
    isPrimitiveNotEmpty(value: any): boolean {
        if (this.isPrimitive(value)) {
            return !(value == null || value.length <= 0);
        }
        return false;
    }

    isPrimitiveNotEmptyExceptBoolean(value: any): boolean {
        if (this.isPrimitive(value)) {
            if (typeof value === 'boolean') {
                return false;
            }
            return !(value == null || value.length <= 0);
        }
        return false;
    }
    
      // isNotEmpty(value: any): boolean {
      //   return this.isPrimitiveNotEmpty(value) || this.isArrayNotEmpty(value) || this.isObjectNotEmpty(value);
      //   // if (this.isPrimitive(value)) {
      //   //   return this.isPrimitiveNotEmpty(value);
      //   // } else if (Array.isArray(value)) {
      //   //   return this.isArrayNotEmpty(value);
      //   // }
      //   // return this.isObjectNotEmpty(value);
      // }
    
      isPrimitive(value: any): boolean {
        return (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean' ||
          typeof value === 'undefined' ||
          typeof value === 'symbol' ||
          typeof value === 'bigint' ||
          value === null
        );
      }
    
    isArrayNotEmpty(value: any): boolean {
    if (Array.isArray(value)) {
        console.log(value, "isArray");
        for (let item of value) {
            console.log(item, this.isPrimitiveNotEmpty(item), "item isArray");
            
            if(this.isPrimitiveNotEmptyExceptBoolean(item) || this.isArrayNotEmpty(item) || this.isObjectNotEmpty(item)) {
                return true;
            }
        // if (this.isPrimitive(item)) {
        //   return this.isPrimitiveNotEmpty(item);
        // } else if (Array.isArray(item)) {
        //   return this.isArrayNotEmpty(item);
        // }
        // return this.isObjectNotEmpty(item);
        }
        return false;
    }
    return false;
    
    }
      
    
    isObjectNotEmpty(obj: any): boolean {
    console.log(obj, this.isPrimitiveNotEmpty(obj), "outsideIsObjectNotEmpty");
    for(let key in obj) {
        console.log(obj[key], this.isPrimitiveNotEmpty(obj[key]), "isObjectNotEmpty");
        if (this.isPrimitiveNotEmptyExceptBoolean(obj[key]) || this.isArrayNotEmpty(obj[key]) || this.isObjectNotEmpty(obj[key])) {
            return true;
        }
    }
    return false;
    }
    
    
    
    isAnyPresent(values: any[]): boolean {
    if (this.isNotEmpty(values)) {
        for (let i = 0; i < values.length; i++) {
            if (this.isNotEmpty(values[i])) {
                return true;
            }
        }
        return false;
    }
    return false;
    }

    isPrimitiveAnyPresent(values: any[] | undefined): boolean {
        if (values != null && this.isNotEmpty(values)) {
            for (let i = 0; i < values.length; i++) {
                if (this.isPrimitiveNotEmpty(values[i])) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
    
    isAllPresent(values: any[]): boolean {
    if (this.isNotEmpty(values)) {
        for (let j = 0; j < values.length; j++) {
            if(!this.isNotEmpty(values[j])) {
                return false;
            }
        }
        return true;
    }
    return false;
    }
    
    isPrimitiveAllPresent(values: any[] | undefined): boolean {
    if (values != null && this.isNotEmpty(values)) {
        for (let j = 0; j < values.length; j++) {
            if(!this.isPrimitiveNotEmpty(values[j])) {
                return false;
            }
        }
        return true;
    }
    return false;
    }

}