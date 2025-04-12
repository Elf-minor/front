import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useState } from "react";
import userService from "../service/user.service";

export function Login({ setAccess }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    userService.saveUser(user, "/login").then((res) => {
      if (res) {
        setAccess(true);
        navigate("../main", { relative: "path" });
      }
    });
  };
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Вход</h2>
            <p>Введите свою почту и пароль.</p>
            <form onSubmit={registerUser}>
              <div class="form-group">
                <label>Электронная почта</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  onChange={handleChange}
                  value={user.email}
                  required
                />
              </div>
              <div class="form-group">
                <label>Пароль</label>
                <input
                  type="password"
                  name="password"
                  class="form-control"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="submit"
                  class="btn btn-primary"
                  value="Войти"
                />
              </div>
              <p>
                Нет аккаунта? <Link to="/">Создайте его</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
