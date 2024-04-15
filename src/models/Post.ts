import Theme from "./Theme";
import { UserProfile } from "./UserProfile";

export default interface Post {
  id: number;
  title: string;
  text: string;
  date: string;
  theme: Theme | null;
  user: UserProfile | null;
}
