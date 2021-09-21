import React, { FC, useRef, useState } from 'react';
import './mySelect.scss';

interface Props {
    children?: any;
    value: string;
    style?: any;
    setAction?: any;
}

const MyInput: FC<Props> = ({children, value, setAction, ...props}) => {

    const [isOpen, setIsOpen] = useState(false);

    const onOptionClicked = (value: any) => () => {
        setAction(value);
        setIsOpen(false);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);          
    }

    return (
        <div {...props} className='select'>
            <div className="select__header" onClick={handleClick}>
                {value}
            </div>
            {isOpen &&
                <div className="select__list">
                    <ul className="select__inner">
                        {children.map((option: any) => {
                            if (value === option) {
                                return (value === option) && <li key={option.props.children} onClick={onOptionClicked(option.props.children)} className="select__item">{option.props.children}</li>
                            }
                            return <li key={option.props.children} onClick={onOptionClicked(option.props.children)} className="select__item">{option.props.children}</li>
                        })}
                    </ul>
                </div>
            }
        </div>
    );
}

export default MyInput;
