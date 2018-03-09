import * as React from 'react';
import '../Styles/footer.scss';

export interface IFooterPresentationProps {
    children?: React.ReactNode;
    Year: string | number;
    SocialText: string;
}

export const footerPresentationDefaultProps: IFooterPresentationProps = {
    Year: 2018,
    SocialText: 'Connect',
};

export const FooterPresentation = (props = footerPresentationDefaultProps) => (
    <footer className="footer">
        <div className="footer__wrapper">
            <section className="footer__social">
                <h5 className="footer__connect text--white">{props.SocialText}</h5>
                <div className="grid">
                    {props.children}
                </div>
            </section>
            <section className="footer__copyright">
                <p className="footer__text text--white text--italic">Copyright {props.Year} Nordavind EK, all rights reserved</p>
            </section>
        </div>
    </footer>
);