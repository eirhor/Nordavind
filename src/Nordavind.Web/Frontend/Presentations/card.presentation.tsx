import * as React from 'react';
import '../Styles/card.scss';

export interface ICardPresentation {
    children?: React.ReactNode;
    ImageUrl: string;
    Name: string;
}

export const cardPresentationDefaultProps: ICardPresentation = {
    ImageUrl: 'https://developmentseed.org/images/team/avatar-placeholder.png',
    Name: 'Ola Nordmann',
}

export const CardPresentation = (props = cardPresentationDefaultProps) => (
    <article className="card">
        <div className="card__container">
            <img src={props.ImageUrl} />
            {props.children}
        </div>

        <h4>{props.Name}</h4>
    </article>
);