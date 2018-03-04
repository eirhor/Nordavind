import * as React from 'react';
import '../Styles/interaction.scss';

export interface IInteractionPresentationProps {
    ClassName: string;
    Link: string;
}

export const interactionPresentationDefaultProps: IInteractionPresentationProps = {
    ClassName: 'interaction--facebook',
    Link: 'ola.nordmann',
};

export const InteractionPresentation = (props = interactionPresentationDefaultProps) => (
    <a href={props.Link} className={`interaction ${props.ClassName}`} />
);