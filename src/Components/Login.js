import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

export function Login() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li>
              <h4>{user.username}</h4>
              <img src={user.avatar_url} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Login;
