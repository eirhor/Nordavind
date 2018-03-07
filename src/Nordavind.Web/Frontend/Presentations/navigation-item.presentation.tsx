import * as React from 'react';
import '../Styles/navigation-item.scss';

export interface INavigationItemPresentationProps {
    OnClick?: (e: any) => void;
    Text: string;
}

export const navigationItemPresentationDefaultProps: INavigationItemPresentationProps = {
    Text: 'Banner',
};

export const NavigationItemPresentation = (props = navigationItemPresentationDefaultProps) => (
    <li className="navigation-item">
        <a className="navigation-item__link" onClick={props.OnClick} href="#">{props.Text}</a>
    </li>
);