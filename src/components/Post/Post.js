import React from "react";
import './Post.css'

const Post = (props) => {
    return (
        <div className="post">
            <img
                style={{backgroundImage: `url(${props.image})`}}
                className="post__image">
            </img>
            <div className="post__info">
                <h2
                    className="post__title">{props.title}
                </h2>
                <p
                    className="post__description">
                    {props.description}
                </p>
            </div>
            <div className="post__icons">
                <p className="date">дата</p>
                <p className="view">кол-во просмотров</p>
                <p className="raiting">рейтинг</p>
                <p className="bookmaps">добавить в закладки</p>
                <p className="share">поделиться -</p>
                <button className="post__button button">Подробнее...</button>
            </div>
        </div>
    )
}

export default Post;