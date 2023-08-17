export const Validate = (values) => {
  const errors = {};
  switch (true) {
    case values.firstName && values.firstName.trim() === "":
      errors.firstName = "Invalid input";
      break;
    case values.lastName && values.lastName.trim() === "":
      errors.lastName = "Invalid input";
      break;
    case values.job && values.job.trim() === "":
      errors.job = "Invalid input";
      break;
    case !values.firstName:
      errors.firstName = "Required";
      break;
    case !values.lastName:
      errors.lastName = "Required";
      break;
    case !values.email:
      errors.email = "Required";
      break;
    case !values.job:
      errors.job = "Required";
      break;
    case values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email):
      errors.email = "Email is invalid";
      break;

    default:
      break;
  }
  return errors;
};
