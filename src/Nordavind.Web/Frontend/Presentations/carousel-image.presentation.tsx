import * as React from 'react';
import '../Styles/carousel-image.scss';

export interface ICarouselImagePresentationProps {
    ImageUrl: string;
    ClassName?: string;
    ImageClassName?: string;
    Href: string;
}

export const carouselImagePresentationDefaultProps: ICarouselImagePresentationProps = {
    ImageUrl: 'https://bx3ek.no/dist/img/partners/hyperx.png',
    Href: '#',
};

export const CarouselImagePresentation = (props = carouselImagePresentationDefaultProps) => (
    <a className={`carousel-image ${props.ClassName}`} href={props.Href}>
        <img className={`carousel-image__image ${props.ImageClassName}`} src={props.ImageUrl} />
    </a>
);