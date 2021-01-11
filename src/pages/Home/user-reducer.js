export const DefaultUser = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  street_address: "",
  post_code: "",
  country: "",
};

export const UserReducer = (user, { type, payload }) => {
  switch (type) {
    case "UPDATE_INFO":
      return {
        ...user,
        ...payload,
      };

    default:
      return user;
  }
};
