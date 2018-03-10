import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { host } from 'storybook-host';
import { CarouselImagePresentation, carouselImagePresentationDefaultProps } from '../Presentations/carousel-image.presentation';
import { PartnersPresentation, partnersPresentationDefaultProps } from '../Presentations/partners.presentation';

const getSliderAmount = () => {
    if (!window || !screen) {
        return 2;
    }

    if ((screen.width <= 980) || (window.matchMedia && window.matchMedia('only screen and (min-width: 640px)').matches)) {
        return 3;
    }

    return 2;
};

const getCarouselSettings = () => {
    const duplicate = partnersPresentationDefaultProps.CarouselSettings;

    duplicate.slidesToShow = getSliderAmount();

    return duplicate;
};

storiesOf('Partners', module)
    .addDecorator(withKnobs)
    .addDecorator(host({
        align: 'center top',
        width: '100%',
        height: 300,
    }))
    .add('Default', () => (
        <PartnersPresentation {...partnersPresentationDefaultProps} CarouselSettings={getCarouselSettings()} MainImageUrl={text('Main partner image url', partnersPresentationDefaultProps.MainImageUrl)}>
            <CarouselImagePresentation {...carouselImagePresentationDefaultProps} ImageUrl={text('Carousel partner 1', carouselImagePresentationDefaultProps.ImageUrl)}/>
            <CarouselImagePresentation {...carouselImagePresentationDefaultProps} ImageUrl={text('Carousel partner 2', carouselImagePresentationDefaultProps.ImageUrl)}/>
            <CarouselImagePresentation {...carouselImagePresentationDefaultProps} ImageUrl={text('Carousel partner 3', carouselImagePresentationDefaultProps.ImageUrl)}/>
            <CarouselImagePresentation {...carouselImagePresentationDefaultProps} ImageUrl={text('Carousel partner 4', carouselImagePresentationDefaultProps.ImageUrl)}/>
            <CarouselImagePresentation {...carouselImagePresentationDefaultProps} ImageUrl={text('Carousel partner 5', carouselImagePresentationDefaultProps.ImageUrl)}/>
            <CarouselImagePresentation {...carouselImagePresentationDefaultProps} ImageUrl={text('Carousel partner 6', carouselImagePresentationDefaultProps.ImageUrl)}/>
        </PartnersPresentation>
    ));