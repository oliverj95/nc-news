import { useContext, useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import "../styles/Login.css";
import { UserContext } from "../Contexts/User";
import { useNavigate } from "react-router"

export function Login() {
  const [users, setUsers] = useState([]);
  const { setLoggedInUser, loggedInUser, isLoggedIn } = useContext(UserContext);
const navigate = useNavigate()

  const clickUser = (user) => {
    setLoggedInUser(user);
    navigate("/")
  };

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <div className="userCard" onClick={() => clickUser(user)}>
              <li key={user.username}>
                <h4>{user.username}</h4>
                <img className="avatars" src={user.avatar_url} />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default Login;
