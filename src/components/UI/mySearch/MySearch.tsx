import React, { ChangeEvent, FC, memo, useMemo } from 'react';
import { throttle } from '../../../tools/throttle';
import classes from './mySearch.module.css';

interface Props {
    placeholder: string;
    search: string;
    setAction: (e: any) => void;
    style?: any;
    actionSearch: any;
}

const MySearch: FC<Props> = ({placeholder, search, setAction, actionSearch, children, ...props}) => {

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setAction(e.target.value);
        actionSearch(search);
    }

    return (
        <div {...props} className={classes.search}>
            <input className={classes.input} placeholder="Заболевание" value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => changeHandler(e)} type="search" name="search" />     
            {search && 
                <div className={classes.list}>
                    {children}
                </div>
            }               
        </div>
    );
}

export default MySearch;
