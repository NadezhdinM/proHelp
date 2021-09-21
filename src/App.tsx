import React, { FC, useContext, useEffect, useState } from 'react';
import './App.scss';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

import Personal from './pages/personal/Personal';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MyPopup from './components/UI/myPopup/MyPopup';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import Search from './pages/search/Search';
import LoginForm from './components/loginForm/LoginForm';
import RegForm from './components/regForm/RegForm';
import Error from './pages/error/Error';


const App: FC = () => {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { store } = useContext(Context);

    useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	}, []);

    if (store.isLoading) {
		return <div>Загрузка...</div>
	}

    return (
        <>
            <Router>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/">
                            <Search/>
                        </Route>
                        <Route exact path="/personal">
                            {store.isAuth ? <Personal/> : <div>Вы не авторизованы</div>}
                        </Route>
                        <Route exact path="/error">
                            <Error/>
                        </Route>
                        <Redirect to='/error'/>
                    </Switch>
                </main>
                <Footer/>
                <MyPopup isPopup={store.isPopup}>
                    { store.isReg
                        ?
                        (<RegForm/>)
                        :
                        (<LoginForm/>)
                    }
                </MyPopup>
            </Router>
        </>
    );
}

export default observer(App);;
