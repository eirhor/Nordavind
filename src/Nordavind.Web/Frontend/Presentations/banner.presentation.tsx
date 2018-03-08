import * as React from 'react';
import '../Styles/banner.scss';

export interface IBannerPresentationProps {
    ImageUrl: string;
}

export const bannerPresentationDefaultProps: IBannerPresentationProps = {
    ImageUrl: require('../Images/film.gif'),
};

export const BannerPresentation = (props = bannerPresentationDefaultProps) => (
    <section className="banner">
        <img className="banner__image" src={props.ImageUrl} />
    </section>
);