import axios from "axios";

export const BASE_URL = "http://localhost:9191/";

export const GetJWTToken = async (email: string, password: string) => {
  try {
    const response = await axios.post(BASE_URL + "/users/token", {
      email: email,
      password: password,
    });

    const jwtToken = response.data;

    localStorage.setItem("jwtToken", jwtToken);

    return jwtToken;
  } catch (error) {
    console.error("Error getting JWT token", error);
    throw error;
  }
};


export const signUp = async (name: any, email: any, password: any, jwtToken: any) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkUserExists = async (email: any, jwtToken: any) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
        'Content-Type': 'application/json',
      },
    });

    const users = response.data;
    return users.some((user: { email: any; }) => user.email === email);
  } catch (error) {
    throw error;
  }
};



