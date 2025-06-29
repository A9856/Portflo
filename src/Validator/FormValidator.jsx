import React from 'react'
import passwordValidator from 'password-validator'
var schema = new passwordValidator();

// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase(1)                              // Must have uppercase letters
.has().lowercase(1)                              // Must have lowercase letters
.has().digits(1)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123', 'Admin123', 'Admin@123', 'Password@123']); // Blacklist these values
export default function FormValidator(e) {
    let { name, value} = e.target
    switch (name) {
        case "name":
            if (value && value.length === 0)
                return name + "Field Is Mendatory"
            else if (value.length < 3 || value.length > 50)
                return name + " Length Must Be 3-50 Character"
            else
                return ""

                case "subject":
                    if (value && value.length === 0)
                        return name + "Field Is Mendatory"
                    else if (value.length < 10)
                        return name + " Length Must Have Atleast 10 Character"
                    else
                        return ""

        case "email":
            if (value && value.length === 0)
                return name + "Field Is Mendatory"
            else if (value.length < 13 || value.length > 100)
                return name + " Length Must Be 13-50 Character"
            else
                return ""
                
        case "phone":
            if (value && value.length === 0)
                return name + "Field Is Mendatory"
            else if (value.length < 10 || value.length > 10)
                return name + " Length Must Be 10"
            else if (value.startsWith("9") || value.startsWith("8") || value.startsWith("7") || value.startsWith("6")) 
                return ""
            else
                return "Invalid Phone Number"
       
        case " message":
            if (value && value.length === 0)
                return name + "Field Is Mendatory"
            else if (value.length < 50)
                return name + " Length Must Be 50 Character or More "
            else
                return ""
        default:
            return ""
    }
}



        // case "password":
        //     if (value && value.length === 0)
        //         return name + " Field is Mendatory"
        //     else if (!(schema.validate(value)))
        //         return "Invalid Password. It Must Contains atleast 1 upper case alphabet,1 lower case alphabet,digit,space or any special character"
        //     else
        //         return ""
        // case "size":
        //     if (value && value.length === 0)
        //         return name + " Size Field Is Mendatory"
        //     else if (value.length > 10)
        //         return name + " Length Must Be Upto 10 Character"
        //     else
        //         return ""

        // case "basePrice":
        //     if (value && value.length === 0)
        //         return "Base Price Field Is Mendatory"
        //     else if (value < 1)
        //         return " Base Price Must Be a Positive Value"
        //     else
        //         return ""

        // case "discount":
        //     if (value && value.length === 0)
        //         return " Discount field is Mandatory"
        //     else if (value < 0 || value > 99)
        //         return "Discount must be 0-99%"
        //     else
        //         return ""


        // case "stockQuantity":
        //     if (value && value.length === 0)
        //         return " Stock Quantity field is Mandatory"
        //     else if (value < 0)
        //         return "Stock Quantity must be a positive value or 0"
        //     else
        //         return ""