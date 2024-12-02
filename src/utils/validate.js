export default function validateInputs(firstName, lastName, email, password) {
    const errors = {};
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!firstName){
      errors.firstName = "First Name is required";
    }else if(firstName <= 2 ){
      errors.firstName = "The name is too short";
    }else if(firstName >= 20){
      errors.firstName = "The name is too long";
    }

    if(!lastName){
      errors.lastName = "Last Name is required";
    }else if(lastName <= 2 ){
      errors.lastName = "The last name is too short";
    }else if(lastName >= 20){
      errors.lastName = "The last name is too long";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format.";
    }
  
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
  
    return errors;
}