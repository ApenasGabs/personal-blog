import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex center">
      <button onClick={() => navigate("/home")}>Log me in 🤠</button>
    </div>
  );
};

export default Login;
