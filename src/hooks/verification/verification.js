

export const verification = (id, value ) => {
    let errorMessages = []
    let disabled = false
    let isValid = true
    let touched = true
    let rejex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

           switch (id) {
               case 'password':
                   if (touched && value.length < 6) {
                       isValid = false
                       disabled = true
                       errorMessages.push('Password too short')

                   }
                  break;
                   case 'username':
                   if (touched && value.length < 2) {
                       isValid = false
                       disabled = true
                       errorMessages.push('Username too short')

                   }
                  break;
               case 'email':
                   if (touched && !rejex.test(value)) {
                       isValid = false
                       disabled = true
                       errorMessages.push('Email isValid')
                      

                   }
                   
                  break;
               case 'city':
                   if (touched && value.length < 2) {
                       isValid = false
                       disabled = true
                       errorMessages.push('isValid city')

                   }

                   break;
               case 'street':
                   if (touched && value.length < 5) {
                       isValid = false
                       disabled = true
                       errorMessages.push('isValid street')

                   }

                   break;
              

               default:
                  
                   return [isValid, disabled, errorMessages]
           }
    
  
    return{
        
        errorMessages: errorMessages,
        disabled: disabled,
        isValid: isValid,
        value: value
    } 

        }

  


// export const checkVerifyLogin = (email, password) => {
//     let errorMessages = []
//     let isValid = false
//     if (!rejex.test(email)) {
//         isValid = true
//         errorMessages.push('Email isValid')
//     }
//     else if (password.length < 6){
//         isValid = true
//         errorMessages.push('Password too short')
//     }


// return{
// errorMessages: errorMessages,
// isValid: isValid
// }
// }