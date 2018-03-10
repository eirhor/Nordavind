import * as React from 'react';
import '../Styles/partners.scss';
const Carousel = require('nuka-carousel');

export interface IPartnersPresentationProps {
    CarouselSettings: any;
    MainImageUrl: string;
    MainImageLink: string;
    children?: React.ReactNode;
}

export const partnersPresentationDefaultProps: IPartnersPresentationProps = {
    CarouselSettings: {
        autoplay: true,
        autoplayInterval: 2000,
        slidesToShow: 2,
        cellAlign: 'left',
        cellSpacing: 20,
        dragging: true,
        easing: 'easeInOutElastic',
        edgeEasing: 'easeOutCirc',
        decorators: [],
        wrapAround: true,
    },
    MainImageLink: '#',
    MainImageUrl: 'https://bx3ek.no/dist/img/partners/komplett.png',
};

export const PartnersPresentation = (props = partnersPresentationDefaultProps) => (
    <section className="partners">
        <div className="partners__wrapper">
            <div className="partners__main">
                <a href={props.MainImageLink}>
                    <img className="partners__mainimage" src={props.MainImageUrl} />
                </a>
            </div>
            <div className="partners__carousel">
                <Carousel {...props.CarouselSettings}>
                    {props.children}
                </Carousel>
            </div>
        </div>
    </section>
);