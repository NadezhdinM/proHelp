import React, { Dispatch, FC, SetStateAction, useContext} from 'react';
import { Context } from '../../..';
import classes from './myPopup.module.css';

interface Props {
    children?: React.ReactNode;
    isPopup: Boolean;
}

const MyPopup: FC<Props> = ({children, isPopup, ...props}) => {
    const { store } = useContext(Context);
    return (
        <div className={isPopup ? classes.active : classes.popup} onClick={() => store.setIsPopup(false)} >
            <div className={classes.inner} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyPopup;
