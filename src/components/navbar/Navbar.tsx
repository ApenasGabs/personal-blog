import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logMeOut = () => {
    handleLogout();
    navigate("/login");
  };

  const githubUserProfileImage = `https://github.com/${user.photo}.png`;
  const hasProfileImage = user.photo.trim() !== "";

  return (
    <div className="navbar bg-base-100 w-full ">
      {user.id !== 0 && (
        <>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">PersonalBlog</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/theme"}>Theme</Link>
              </li>
            </ul>
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full align-center">
                  {hasProfileImage ? (
                    <img
                      alt="image from user profile"
                      src={githubUserProfileImage}
                    />
                  ) : (
                    <p className="w-full h-full flex justify-center items-center ">
                      <span>{user.name[0]}</span>
                    </p>
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logMeOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
