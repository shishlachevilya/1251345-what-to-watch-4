export const setUserAdapter = (data) => {
  console.log(data);
  return {
    email: data.email,
    password: data.password
  };
};
