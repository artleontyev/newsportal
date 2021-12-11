import React from "react";
import logo from './logo.png';
import Coin from "./Coin";
import Weather from "./Weather";
import {Link} from "react-router-dom";
import './header.css'
import AllPost from "../AllPost/AllPost";

const Header = () => {
    return (
        <div className="header">

            <Link to={'/'} className={'logo'}>
                <img src={logo} width="50" height="50"/>
                <h1 className="logo__text"> QubIT </h1>
            </Link>

            <div className="search__item">
                <input type={'search'} className={'search__input'}
                                                 placeholder={'Искать здесь...'}/>
                <button className={'search__button'} type="submit"></button>
            </div>


            <Link to={'add'} className="header__button button">
                + Новость
            </Link>

            <Link to={'autorization'} className="header__button sign button">
                Войти
            </Link>
            <div className="header__user user">
                <p className="user__name">USER.user</p>
            </div>
            <div className="header__api api">
                <Coin/>
                <Weather/>
            </div>
        </div>
    )
}

export default Header;