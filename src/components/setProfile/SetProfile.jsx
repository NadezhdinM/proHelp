import React, { useContext, useState } from 'react';
import { Context } from '../..';
import MyButton from '../UI/myButton/MyButton';
import './setProfile.scss';

const SetProfile = () => {
    const { store } = useContext(Context);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [workPlace, setWorkPlace] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passportSeries, setPassportSeries] = useState('');
    const [passportNumber, setPasportNumber] = useState('');
    const [inn, setInn] = useState('');
    const [birthDate, setBirthDate] = useState('');

    return (
        <>
            <span></span>
            <div className='setProfile'>
                <h1 style={{textAlign: 'center', marginBottom: '25px'}}>Заполните данные профиля</h1>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Имя' type="text" />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Фамилия' type="text" />
                <input value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder='Отчество' type="text" />
                <input value={workPlace} onChange={(e) => setWorkPlace(e.target.value)} placeholder='Где работаете?' type="text" />
                <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Номер телефона' type="text" />
                <input value={passportSeries} onChange={(e) => setPassportSeries(e.target.value)} placeholder='Серия паспорта' type="text" />
                <input value={passportNumber} onChange={(e) => setPasportNumber(e.target.value)} placeholder='Номер паспорта' type="text" />
                <input value={inn} onChange={(e) => setInn(e.target.value)} placeholder='ИНН' type="text" />
                <input value={birthDate} onChange={(e) => setBirthDate(e.target.value)} placeholder='Дата рождения' type="date" />
                <MyButton style={{margin: '0 auto', width: '100%'}} onClick={() => store.setProfile(store.user.email, firstName, lastName, middleName, workPlace, phoneNumber, passportSeries, passportNumber, inn, birthDate)}>
                    Сохранить
                </MyButton>
            </div>
        </>
    );
}

export default SetProfile;
