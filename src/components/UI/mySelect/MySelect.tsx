import React, { FC, useRef, useState } from 'react';
import './mySelect.scss';

interface Props {
    children?: any;
    value: string;
    style?: any;
    setAction?: any;
}

const MySelect: FC<Props> = ({children, value, setAction, ...props}) => {

    const [isOpen, setIsOpen] = useState(false);

    const onOptionClicked = (value: any) => () => {
        setAction(value);
    };

    function trigger(e: any) {
        if (e.target.closest('.active')) { 
            return;
        }
        setIsOpen(false);
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
        document.addEventListener('click', (e) => trigger(e), {
            capture: true,
            once: true
        })
    }

    return (
        <div {...props} className={isOpen ? 'select active' : 'select'} onClick={(e) => handleClick()} >
            <div className="select__header">
                {value}
            </div>
            {isOpen &&
                <div className="select__list">
                    <ul className="select__inner">
                        {children.map((option: any) => {
                            if (value === option.props.children) {
                                return <li key={option.props.children} onClick={onOptionClicked(option.props.children)} className="select__item active">{option.props.children}</li>
                            }
                            return <li key={option.props.children} onClick={onOptionClicked(option.props.children)} className="select__item">{option.props.children}</li>
                        })}
                    </ul>
                </div>
            }
        </div>
    );
}

export default MySelect;
