import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useState } from "react";
import userService from "../service/user.service";

export function App({ setAccess }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const registerUser = (e) => {
    e.preventDefault();
    userService.saveUser(user).then((res) => {
      if (res) {
        setAccess(true);
        navigate("main");
      }
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Регистрация</h2>
            <p>Заполните все поля, чтобы создать новый аккаунт.</p>

            <form onSubmit={registerUser}>

              <div className="form-group">
                <label>Электронная почта</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={handleChange}
                  value={user.email}
                  required
                />
              </div>

              <div className="form-group">
                <label>Пароль</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={handleChange}
                  value={user.password}
                  required
                />
              </div>

              <div className="form-group">
                <label>Повторите пароль</label>
                <input
                  type="password"
                  name="confirm_password"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary"
                  value="Зарегистрироваться"
                />
              </div>

              <p>Уже зарегистрированы? </p>
              <Link to="/login">Login again</Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
