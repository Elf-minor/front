import { Link } from "react-router";

export function Login() {
    return(
        <>
                {/* <!-- создаём контейнер --> */}
                <div class="container">
                    <div class="row">
                        {/* <!-- указываем стиль адаптивной вёрстки --> */}
                        <div class="col-md-12">
                            {/* <!-- пишем заголовок и пояснительный текст --> */}
                            <h2>Вход</h2>
                            <p>Введите свою почту и пароль.</p>
                            {/* <!-- метод, которым будем работать с формой — отправлять на сервер --> */}
                            <form action="" method="post">
                                {/* <!-- поле ввода электронной почты --> */}
                                <div class="form-group">
                                    <label>Электронная почта</label>
                                    <input type="email" name="email" class="form-control" required />
                                </div>    
                                {/* <!-- поле ввода пароля --> */}
                                <div class="form-group">
                                    <label>Пароль</label>
                                    <input type="password" name="password" class="form-control" required/>
                                </div>
                                {/* <!-- кнопка отправки данных на сервер --> */}
                                <div class="form-group">
                                    <input type="submit" name="submit" class="btn btn-primary" value="Войти"/>
                                </div>
                                {/* <!-- ссылка для тех, у кого ещё нет аккаунта --> */}
                                <p>Нет аккаунта? <Link to='/'>Создайте его</Link>.</p>
                                <p>Ссылка для тестирования фронта <Link to='/main'>Main page</Link>.</p>
                            </form>
                        </div>
                    </div>
                </div>    
        </>
    )
}