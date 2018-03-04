import * as React from 'react';
import '../Styles/interaction.scss';

export interface IInteractionPresentationProps {
    ClassName?: string;
    IconClassName: string;
    Link: string;
}

export const interactionPresentationDefaultProps: IInteractionPresentationProps = {
    ClassName: '',
    IconClassName: 'icon--facebook',
    Link: 'ola.nordmann',
};

export const InteractionPresentation = (props = interactionPresentationDefaultProps) => (
    <a href={props.Link} className={`interaction ${props.ClassName}`}>
        <i className={`icon ${props.IconClassName}`} />
    </a>
);