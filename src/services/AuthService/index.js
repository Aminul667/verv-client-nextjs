"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

// 2. register function for user registration
export const registerUser = async (userData) => {
  console.log(userData);
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    console.log("registerUser", data);

    if (data.success) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error) {
    console.log(
      "Error in registerUser:",
      error?.response?.data || error.message
    );
    throw new Error(error);
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      const cookieStore = await cookies();
      cookieStore.set("accessToken", data?.data?.accessToken);
      cookieStore.set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error) {
    console.log(
      "Error in registerUser:",
      error?.response?.data || error.message
    );
    throw new Error(error);
  }
};

// export const logout = () => {
//   cookies().delete("accessToken");
//   cookies().delete("refreshToken");
// };

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      userEmail: decodedToken.userEmail,
      role: decodedToken.role,
    };
  }

  return decodedToken;
};
