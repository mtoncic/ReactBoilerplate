import React from 'react';
import style from './button.component.css';

export default function Button(props){
    return <a href='#' className={'btn success'} onClick={props.handleButtonClick}>Click me!</a>
}