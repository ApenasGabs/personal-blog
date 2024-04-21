import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const useGitHubUserProfile = () => {
  const { user } = useContext(AuthContext);

  const hasProfileImage = user.photo.trim() !== "";
  const githubUserProfileImage = `https://github.com/${user.photo}.png`;

  return { githubUserProfileImage, hasProfileImage };
};

export default useGitHubUserProfile;
