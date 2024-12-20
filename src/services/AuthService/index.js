"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const registerUser = async (userData) => {
  console.log(userData);
  try {
    const { data } = await axiosInstance.post("/users/create-user", userData);

    console.log("registerUser", data);

    // if (data.success) {
    //   cookies().set("accessToken", data?.data?.accessToken);
    //   cookies().set("refreshToken", data?.data?.refreshToken);
    // }

    // return data;
  } catch (error) {
    throw new Error(error);
    // console.log(
    //   "Error in registerUser:",
    //   error?.response?.data || error.message
    // );
  }
};
