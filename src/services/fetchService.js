export const getAllUsers = async () => {
  let response = await fetch("https://reqres.in/api/users");
  console.log(response);
  //we return the json
  return response.json();
};

export const getAllPagedUsers = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  console.log(response);
  //we return the json
  return response.json();
};

export const getUsersDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`);
  console.log(response);
  //we return the json
  return response.json();
};

export const login = async (email, password) => {
  let body = {
    email,
    password,
  };

  let response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    mode: "no-cors",
    credentials: "omit",
    cache: "force-cache",
    headers: {
      "Content-type": "application/json",
    },
    body,
  });

  console.log("Login response: ", response);

  return response.json();
};
