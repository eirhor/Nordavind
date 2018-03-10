import * as React from 'react';
import '../Styles/players.scss';

export interface IPlayersPresentationProps {
    children?: React.ReactNode;
    Heading: string;
    Buttons?: React.ReactNode;
}

export const playersPresentationDefaultProps: IPlayersPresentationProps = {
    Heading: 'Players',
};

export const PlayersPresentation = (props = playersPresentationDefaultProps) => (
    <section className="players">
        <div className="players__wrapper">
            <h2 className="players__heading text--black">{props.Heading}</h2>
            <div className="players__teams">
                {props.Buttons}
            </div>
            <div className="players__cards grid">
                {props.children}
            </div>
        </div>
    </section>
);