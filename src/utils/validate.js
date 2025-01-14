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

export const ValidateFormResume = (name, salary, jobprefor, work)=>{

  const errors = {};
  if(!name){
    errors.name = "It should not be application job title empty ";
  }else if(name <= 5 ){
    errors.name = "Too short application job title";
  }else if(name >= 60){
    errors.name = "Too long application job title";
  }

  if(!(/^\d+$/.test(salary))){
    errors.salary ="The line should contain only numbers."
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


export const ValidateFormResumeModal = (name, salary, location, jobprefor, work)=>{

  const errors = {};
  if(!name){
    errors.name = "It should not be application job title empty ";
  }else if(name <= 5 ){
    errors.name = "Too short application job title";
  }else if(name >= 60){
    errors.name = "Too long application job title";
  }

  if(!(/^\d+$/.test(salary))){
    errors.salary ="The line should contain only numbers"
  }

  if(!location){
    errors.location = "The location field cannot be empty";
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



export const ValidateUserData = (firstName, lastName, phoneNumber, birthday, state, city, postal, linkedIn, isProfilePage) =>{

  const errors = {};
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

  if (!phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  } else {
    const cleaned = phoneNumber.replace(/\D/g, "");
    if (cleaned.length !== 10 && !(cleaned.length === 11 && cleaned.startsWith("1"))) {
      errors.phoneNumber = "Enter a valid US phone number";
    }
  }

  if(!birthday){
    errors.state = "Enter the birthday";
  }
  
  if(!state){
    errors.state = "Enter the state";
  }

  if(!city){
    errors.city = "Enter the city";
  }

  // Валидация почтового кода, если на странице профиля
  if (isProfilePage) {
    if (postal) {
      if (!/^\d{5}$/.test(postal)) {
        errors.postal = "The zip code should contain only numbers";
      }
    }
  } else if (linkedIn) {
    // Проверка LinkedIn только если поле заполнено
    if (!/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(linkedIn)) {
      errors.linkedIn = "Enter a valid LinkedIn profile link";
    }
  }
  return errors;
}

export const validatePassword = (password, repeatPassword) =>{
  const errors = {};
  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (!repeatPassword) {
    errors.repeatPassword = "Password is required.";
  } else if (repeatPassword.length < 6) {
    errors.repeatPassword = "Password must be at least 6 characters.";
  }

  if(password !== repeatPassword) {
    errors.password = "passwords don't match."
    errors.repeatPassword = "passwords don't match."
  }

  return errors;
}