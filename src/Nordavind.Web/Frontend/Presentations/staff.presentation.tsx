import * as React from 'react';
import '../Styles/players.scss';

export interface IStaffPresentationProps {
    children?: React.ReactNode;
    Heading: string;
}

export const staffPresentationDefaultProps: IStaffPresentationProps = {
    Heading: 'Staff',
};

export const StaffPresentation = (props = staffPresentationDefaultProps) => (
    <section className="staff">
        <div className="staff__wrapper">
            <h2 className="staff__heading text--black">{props.Heading}</h2>
            <div className="staff__cards grid">
                {props.children}
            </div>
        </div>
    </section>
);