import * as React from 'react';
import '../Styles/button.scss';

export interface IButtonPresentationProps {
    Href?: string;
    Text: string;
    ClassName?: string;
    OnClick?: (e: any) => void;
}

export const buttonPresentationDefaultProps: IButtonPresentationProps = {
    Text: 'Button',
};

export const ButtonPresentation = (props = buttonPresentationDefaultProps) => (
    <a href={props.Href} className={`button text--white ${props.ClassName}`} onClick={props.OnClick}>
        <span className="button__text">{props.Text}</span>
    </a>
);