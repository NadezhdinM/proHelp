import React, { FC } from 'react';
import './footer.scss';
import call from '../../assets/images/call.svg'
import mail from '../../assets/images/mail.svg'

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__contacts">
                    <a href="#" className="footer__a">
                        <img src={mail} alt="" className="footer__img" />
                        <p>infoalmimed@ya.ru</p>
                    </a>
                    <a href="#" className="footer__a">
                        <img src={call} alt="" className="footer__img" />
                        <p>+7 (234) 234-23-43</p>
                    </a>
                </div>
                <p className="footer__copyright">
                    Пропомощь 2021 Все права защищены
                </p>
            </div>
        </footer>
    );
}

export default Footer;
