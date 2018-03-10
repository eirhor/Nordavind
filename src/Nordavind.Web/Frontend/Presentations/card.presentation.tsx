import * as React from 'react';
import '../Styles/card.scss';
import '../Styles/grid.scss';

export interface ICardPresentation {
    children?: React.ReactNode;
    ImageStyle: React.CSSProperties;
    Name: string;
    NickName: string;
    ClassName?: string;
}

export const cardPresentationDefaultProps: ICardPresentation = {
    ClassName: '',
    ImageStyle: { backgroundImage: `url(https://developmentseed.org/images/team/avatar-placeholder.png)`},
    Name: 'Ola Nordmann',
    NickName: 'Typen',
};

export const CardPresentation = (props = cardPresentationDefaultProps) => (
    <article className={`card ${props.ClassName}`}>
        <div className="card__container">
            <div className="card__image" style={props.ImageStyle} />
            <div className="card__interactions grid">
                {props.children}
            </div>
        </div>
        <h3 className="card__nick">{props.NickName}</h3>
        <h4 className="card__text text--blue">{props.Name}</h4>
    </article>
);