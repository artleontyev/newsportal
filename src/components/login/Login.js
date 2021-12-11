import React from "react";
import {Link} from "react-router-dom";
import './login.css';

const Login = () => {
    return (
        <container className='container'>
            <div className='login'>
                <h3 className='login__title'>Авторизация</h3>
                <form className='form__login'>

                    <div className="email">
                        <label>Email: </label>

                        <input type="email" name='email' placeholder='введите email' className='validate'/>
                    </div>

                    <div className="password">
                        <label>Пароль: </label>
                        <input type="password" name='password' placeholder='введите пароль' className='validate'
                        />
                    </div>

                    <div className="buttons">
                        <button type='submit' className='button__form button'> Войти
                        </button>
                        <Link
                            to="/registration"
                            className="btn-outline btn-reg"
                        >Нет аккаунта ?
                        </Link>
                    </div>
                </form>
            </div>
        </container>
    )
}

export default Login;