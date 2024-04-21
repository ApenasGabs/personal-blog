import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ThemeProps from "../../models/Theme";
import { deleteData, fetchData, update } from "../../services/api";
import ThemeCard from "../../components/themeCard/ThemeCard";

const Theme = () => {
  const [themes, setThemes] = useState<ThemeProps[]>([] as ThemeProps[]);
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(AuthContext);
  const { token } = user;

  const fetchThemes = useCallback(async () => {
    try {
      await fetchData({
        url: "/theme",
        header: { headers: { Authorization: token } },
        setData: setThemes,
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        // toastAlert("The token has expired, please log in again", "info");
        handleLogout();
      }
    }
  }, [handleLogout, token]);

  // deleteData

  const saveTheme = useCallback(async () => {
    try {
      await update({
        url: "/theme",
        header: { headers: { Authorization: token } },
        setData: setThemes,
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        // toastAlert("The token has expired, please log in again", "info");
        handleLogout();
      }
    }
  }, [handleLogout, token]);
  console.log("saveTheme: ", saveTheme);

  useEffect(() => {
    if (token === "") {
      alert("You need to be logged in");
      navigate("/login");
    }
  }, [navigate, token]);

  useEffect(() => {
    fetchThemes();
  }, [fetchThemes, themes.length]);

  const handleThemeDelete = async (themeId: number) => {
    try {
      await deleteData({
        url: `/theme/${themeId}`,
        // FIXME remember to put in the URL the theme id
        header: { headers: { Authorization: token } },
        setData: setThemes,
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        // toastAlert("The token has expired, please log in again", "info");
        handleLogout();
      }
    }
  };
  console.log("handleThemeDelete: ", handleThemeDelete);
  const handleThemeEdit = () => {
    console.log("handleThemeEdit: ", handleThemeEdit);
  };
  console.log("handleThemeEdit: ", handleThemeEdit);
  return (
    <div className="flex justify-center items-center min-h-screen">
      {themes.length === 0 && (
        <span className="loading loading-ball loading-xs"></span>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <ThemeCard
                key={theme.id}
                content={theme.description}
                title={"Theme"}
                onClickPrimaryButton={() => handleThemeDelete(theme.id)}
                onClickSecondaryButton={handleThemeEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
