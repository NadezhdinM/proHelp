import React, { FC } from 'react';
import './myButton.scss';
import classes from './myButton.module.css';

interface Props {
    children?: React.ReactNode;
    onClick?: any;
    className?: string;
    style?: any;
}

const MyButton: FC<Props> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myButton}>
            {children}
        </button>
    );
}

export default MyButton;
