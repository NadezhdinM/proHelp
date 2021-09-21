import React, { useContext } from 'react';
import { Context } from '../..';
import Patient from '../../components/patient/Patient';
import SetProfile from '../../components/setProfile/SetProfile';
import './personal.scss';

const Personal = () => {
    const { store } = useContext(Context);
    
    return (
        <div className='personal'>
            {store.user.profile ?
                <>
                    <Patient/>
                </>
                :
                <SetProfile/>
            }
        </div>
    );
}

export default Personal;
