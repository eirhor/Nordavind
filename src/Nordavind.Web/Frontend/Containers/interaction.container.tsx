import * as React from 'react';
import {InteractionPresentation} from "../Presentations/interaction.presentation";

enum interactionTypes {
    Facebook,
    Twitter,
    Instagram,
    Steam,
    Phone,
    Mail,
    GooglePlus,
    YouTube,
    Twitch,
    Github,
    Npm,
    Tumblr,
    Skype,
    Reddit,
    Linkedin,
    Pinterest,
}

export interface IIinteractionContainerProps {
    Type: interactionTypes;
    Value: string;
}

export const interactionContainerDefaultProps: IIinteractionContainerProps = {
    Type: interactionTypes.Facebook,
    Value: 'https://www.facebook.com/ola.nordmann',
};

export class InteractionContainer extends React.Component<IIinteractionContainerProps, any> {
    public static defaultProps = interactionContainerDefaultProps;
    
    public render() {
        return (
            <InteractionPresentation IconClassName={this.getIconClassName()} Link={this.getLink()}/>
        );
    }

    private getIconClassName = () => {
        const { Type } = this.props;

        if (Type === interactionTypes.GooglePlus) {
            return '.icon--google-plus';
        }

        if (Type === interactionTypes.Mail) {
            return '.icon--envelop';
        }

        return `.icon--${interactionTypes[Type].toLowerCase()}`;
    }

    private getLink = () => {
        const { Type, Value} = this.props;

        if (Type === interactionTypes.Mail) {
            return `mailto:${Value}`;
        }

        if (Type === interactionTypes.Phone) {
            return `tel:${Value}`;
        }

        return Value;
    }
}