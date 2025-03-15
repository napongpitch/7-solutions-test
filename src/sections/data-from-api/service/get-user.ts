import axios from "axios";
import type { TUser } from "../../../types/user";

// fetch user data
export const getUser = async () => {
  const result = await axios.get<{ users: TUser[] }>(
    "https://dummyjson.com/users"
  );

  return result.data.users;
};
