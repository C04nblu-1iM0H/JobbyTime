export const validateInputs = (firstName, lastName, email, password) => {
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

export const ValidateFormResume = (name, jobprefor, work)=>{
  const errors = {};
  if(!name){
    errors.name = "It should not be application job title empty ";
  }else if(name <= 5 ){
    errors.name = "Too short application job title";
  }else if(name >= 60){
    errors.name = "Too long application job title";
  }

  if(jobprefor.length === 0){
    errors.jobprefor = "specify what type of job you prefer?";
  }

  if(work === 0){
    errors.work = "Your work experience it can't be less than one year old";
  }else if(work > 80){
    errors.work = "Your work experience it can't be more than eighty years old";
  }
 
  return errors;

}
