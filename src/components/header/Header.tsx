import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import './header.scss';
import MyButton from '../UI/myButton/MyButton';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../..';


const Header: FC = () => {
    const { store } = useContext(Context);
    const history = useHistory();

    return (
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__a">
                    <span>Пропомощь</span>
                </Link>
                <div className="header__global">
                    {store.isAuth 
                        ?
                        <>
                            <MyButton onClick={() => history.push('/personal')}>
                                {store.user.email}
                            </MyButton>
                            <MyButton style={{marginLeft: '10px'}} onClick={() => store.logout(history)}>
                                Выход
                            </MyButton>
                        </>
                        :
                        <>
                            <MyButton onClick={() => store.setIsPopup(true)}>
                                Личный кабинет
                            </MyButton>                            
                        </>
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;
