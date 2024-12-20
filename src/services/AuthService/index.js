"use server";

import axiosInstance from "@/lib/AxiosInstance";
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
