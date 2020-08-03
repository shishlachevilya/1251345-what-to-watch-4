export const userInfoAdapter = (user) => {
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    avatar: user.avatar_url
  };
};
