export const  contactValidator = (values) => {
    let errors = {};
    // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
    return errors
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
    return errors
  }
  // Fullname Errors
  if (!values.fullname) {
    errors.fullname = "Required Fullname";
    return errors
  } else if (values.fullname.length < 6) {
    errors.fullname = "Fullname must be at least 6 characters";
    return errors
  }
  return errors;
}

export const searchContactValidator = (values) => {
    let errors = {}

    if (!values.key) {
        errors.key = "Search Key is required"
    }

    return errors;
}

// export const ValidatorService = {
//     contactValidator
// }