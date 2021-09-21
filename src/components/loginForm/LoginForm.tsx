import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../..';
import MyButton from '../UI/myButton/MyButton';

const LoginForm = () => {
    const history = useHistory();

    const { store } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault();
        store.login(email, password, history);
    }

    return (
        <form action="#" className="popup">
            <h2 className="popup__h2">Вход в личный кабинет</h2>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail адрес" type="text" className="popup__input" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="password" className="popup__input" />
            <MyButton 
                onClick={(e?: any) => handleClick(e)} 
                className='popup__submit'
            >
                Войти
            </MyButton>
            <p className="popup__p">
                Забыли пароль?
            </p>
            <div className="popup__auth">
                <span>Нет аккаунта?</span>
                <span onClick={() => store.setIsReg(true)}>Зарегистрироваться</span>
            </div>
        </form>
    );
}

export default LoginForm;
