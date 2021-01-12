import { toaster } from "evergreen-ui";
export const handleSubmit = (e, user, setErrors, setUser, DefaultUser) => {
  e.preventDefault();
  const errors = isValid(user);
  setErrors(errors);
  if (Object.keys(errors).length > 0) {
    toaster.warning("Fill all required fields");
    return;
  }
  const {
    first_name,
    last_name,
    country,
    email,
    phone_number,
    post_code,
    street_address,
  } = user;
  console.log(
    `firstName: ${first_name},\nlastName:${last_name},\ncountry:${country},\nemail:${email},\nphoneNumber: ${phone_number},\npostCode:${post_code},\nstreetAddress: ${street_address}`
  );
  toaster.success("Details logged in console!");
  setUser({
    type: "RESET_INFO",
  });
};

export const handleChange = ({ target }, setUser) => {
  setUser({
    type: "UPDATE_INFO",
    payload: { [target.name]: target.value },
  });
};

export const fetchData = (setQuestions, data, setLoading) => {
  setLoading(false)
  setQuestions(data?.questions || []);
};

const isValid = (values) => {
  let errors = {};
  if (!values.first_name) {
    errors.first_name = "First name is required";
  }
  if (!values.last_name) {
    errors.last_name = "Last name is required";
  }
  if (!values.phone_number) {
    errors.phone_number = "Phone number is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.street_address) {
    errors.street_address = "Street address is required";
  }
  if (!values.post_code) {
    errors.post_code = "Post code is required";
  }
  if (!values.country) {
    errors.country = "Country is required";
  }
  return errors;
};
