import Post from "./Post";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  photo: string;
  password: string;
  confirmPassword?: string;
  post?: Post | null;
  token: "";
}
