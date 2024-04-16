import Post from "./Post";

export interface UserProfile {
  id: number;
  name: string;
  username: string;
  photo: string;
  password: string;
  post?: Post | null;
  token: "";
}
