import React from "react";
import './addpost.css';

const AddPost = () => {
    return (
        <div className='addpost'>
            <h2 className="addpost__title title"> Добавьте новость</h2>
            <form className='form__add form'>
                <label> Ввведите заголовок:</label>
                <input/>
                <label> Введите текст: </label>
                <input />
                    <label> Добавьте изображение:
                        <input type='file' accept={'.jpg'}/>
                    </label>
                    <label className='add__checkrule'>
                        <input type='checkbox'/> Я согласен с правилами
                    </label>
                    <div className='button__items'>
                        <input type='reset' className='button'/>
                        <button className='button'> Добавить</button>
                    </div>
            </form>
        </div>
)
}

export default AddPost;