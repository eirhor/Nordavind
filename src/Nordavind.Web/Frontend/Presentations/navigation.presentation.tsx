import * as React from 'react';
import '../Styles/navigation.scss';

export interface INavigationPresentationProps {
    LogoUrl: string;
    children?: React.ReactNode;
    ItemsClassName?: string;
    ClassName?: string;
    ButtonClassName?: string;
}

export const navigationPresentationDefaultProps: INavigationPresentationProps = {
    LogoUrl: require('../Images/logo.png'),
};

export const NavigationPresentation = (props = navigationPresentationDefaultProps) => (
    <nav className={`navigation ${props.ClassName}`}>
        <div className="navigation__wrapper">
            <div className="navigation__image">
                <img src={props.LogoUrl} className="navigation__logo" />
            </div>
            <button className={`navigation__button ${props.ButtonClassName}`}>
                <span className="navigation__button-line" />
                <span className="navigation__button-line" />
                <span className="navigation__button-line" />
            </button>
            <ul className={`navigation__items ${props.ItemsClassName}`}>
                {props.children}
            </ul>
        </div>
    </nav>
);