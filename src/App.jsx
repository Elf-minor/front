import { NavLink, useNavigate } from "react-router";
import { Link } from "react-router";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Регистрация</h2>
            <p>Заполните все поля, чтобы создать новый аккаунт.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("main");
              }}
            >
              <div className="form-group">
                <label>Имя</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label>Электронная почта</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label>Пароль</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
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

export default App;
