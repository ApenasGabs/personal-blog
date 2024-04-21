import { useState, useContext, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import ThemeProps from "../../models/Theme";
import { fetchData } from "../../services/api";
import Card from "../../components/card/Card";

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

  useEffect(() => {
    if (token === "") {
      alert("You need to be logged in");
      navigate("/login");
    }
  }, [navigate, token]);

  useEffect(() => {
    fetchThemes();
  }, [fetchThemes, themes.length]);
  return (
    <div className="flex justify-center items-center min-h-screen">
      {themes.length === 0 && (
        <span className="loading loading-ball loading-xs"></span>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme) => (
              <Card
                key={theme.id}
                content={theme.description}
                title={"Theme"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
