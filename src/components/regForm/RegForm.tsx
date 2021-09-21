import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../..';
import MyButton from '../UI/myButton/MyButton';

const RegForm = () => {
    const history = useHistory();
    const { store } = useContext(Context);
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault();
        store.registration(email, password, history);
    }

    return (
        <form action="#" className="popup">
            <h2 className="popup__h2">Регистрация</h2>
            {/* <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" type="text" className="popup__input" /> */}
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail адрес" type="text" className="popup__input" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Придумайте пароль" type="password" className="popup__input" />
            <MyButton onClick={(e?: any) => handleClick(e)} className='popup__submit'>
                Зарегистрироваться
            </MyButton>
            <p className="popup__p">
                
            </p>
            <div className="popup__auth">
                <span>Есть аккаунт?</span>
                <span onClick={() => store.setIsReg(false)}>Войти</span>
            </div>
        </form>
    );
}

export default RegForm;
