import React from 'react';
import style from './button.component.css';

export default function Button(props){

    let style = {
        backgroundColor: props.color
    }

    return <a href='#' style={style} className={'btn success'} onClick={props.handleButtonClick}>Click me!</a>
}