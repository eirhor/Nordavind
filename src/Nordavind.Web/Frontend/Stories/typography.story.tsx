import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import '../Styles/typography.scss';

const getAlphabet = () => {
    return 'A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  Æ  Ø  Å';
}

interface ISpacerProps {
    Text: string;
}

const spacerStyle: React.CSSProperties = {
    backgroundColor: '#000000',
    padding: '20px',
}

const Spacer = (props: ISpacerProps) => (
    <h1 className="text--blue" style={spacerStyle}>
        {props.Text}
    </h1>
)

storiesOf('Typography', module)
    .addDecorator(withKnobs)
    .add('Heading 1', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h1>{text('Default', getAlphabet())}</h1>
            <Spacer Text="Variations" />
            <h1 className="text text--bold-italic">{text('Italic', getAlphabet())}</h1>
            <Spacer Text="Color variations" />
            <h1 className="text--black">{text('Black', getAlphabet())}</h1>
            <h1 className="text--blue">{text('Blue', getAlphabet())}</h1>
            <h1 className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</h1>
        </React.Fragment>
    ))
    .add('Heading 2', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h2>{text('Default', getAlphabet())}</h2>
            <Spacer Text="Variations" />
            <h2 className="text text--bold-italic">{text('Italic', getAlphabet())}</h2>
            <Spacer Text="Color variations" />
            <h2 className="text--black">{text('Black', getAlphabet())}</h2>
            <h2 className="text--blue">{text('Blue', getAlphabet())}</h2>
            <h2 className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</h2>
        </React.Fragment>
    ))
    .add('Heading 3', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h3>{text('Default', getAlphabet())}</h3>
            <Spacer Text="Variations" />
            <h3 className="text text--bold-italic">{text('Italic', getAlphabet())}</h3>
            <Spacer Text="Color variations" />
            <h3 className="text--black">{text('Black', getAlphabet())}</h3>
            <h3 className="text--blue">{text('Blue', getAlphabet())}</h3>
            <h3 className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</h3>
        </React.Fragment>
    ))
    .add('Heading 4', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h4>{text('Default', getAlphabet())}</h4>
            <Spacer Text="Variations" />
            <h4 className="text text--bold-italic">{text('Italic', getAlphabet())}</h4>
            <Spacer Text="Color variations" />
            <h4 className="text--black">{text('Black', getAlphabet())}</h4>
            <h4 className="text--blue">{text('Blue', getAlphabet())}</h4>
            <h4 className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</h4>
        </React.Fragment>
    ))
    .add('Heading 5', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h5>{text('Default', getAlphabet())}</h5>
            <Spacer Text="Variations" />
            <h5 className="text text--bold-italic">{text('Italic', getAlphabet())}</h5>
            <Spacer Text="Color variations" />
            <h5 className="text--black">{text('Black', getAlphabet())}</h5>
            <h5 className="text--blue">{text('Blue', getAlphabet())}</h5>
            <h5 className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</h5>
        </React.Fragment>
    ))
    .add('Heading 6', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h6>{text('Default', getAlphabet())}</h6>
            <Spacer Text="Variations" />
            <h6 className="text text--bold-italic">{text('Italic', getAlphabet())}</h6>
            <Spacer Text="Color variations" />
            <h6 className="text--black">{text('Black', getAlphabet())}</h6>
            <h6 className="text--blue">{text('Blue', getAlphabet())}</h6>
            <h6 className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</h6>
        </React.Fragment>
    ))
    .add('Paragraph', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <p>{text('Default', getAlphabet())}</p>
            <Spacer Text="Variations" />
            <p className="text text--bold">{text('Bold', getAlphabet())}</p>
            <p className="text text--bold-italic">{text('Bold-Italic', getAlphabet())}</p>
            <p className="text text--medium">{text('Medium', getAlphabet())}</p>
            <p className="text text--italic">{text('Italic', getAlphabet())}</p>
            <Spacer Text="Color variations" />
            <p className="text--black">{text('Black', getAlphabet())}</p>
            <p className="text--blue">{text('Blue', getAlphabet())}</p>
            <p className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</p>
        </React.Fragment>
    ))
    .add('Anchor', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <a href="#">{text('Default', getAlphabet())}</a>
            <Spacer Text="Variations" />
            <a href="#" className="text text--bold">{text('Bold', getAlphabet())}</a>
            <br />
            <a href="#" className="text text--bold-italic">{text('Bold-Italic', getAlphabet())}</a>
            <br />
            <a href="#" className="text text--medium">{text('Medium', getAlphabet())}</a>
            <br />
            <a href="#" className="text text--italic">{text('Italic', getAlphabet())}</a>
            <Spacer Text="Color variations" />
            <a href="#" className="text--black">{text('Black', getAlphabet())}</a>
            <br />
            <a href="#" className="text--blue">{text('Blue', getAlphabet())}</a>
            <br />
            <a href="#" className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</a>
        </React.Fragment>
    ))
    .add('Span', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <span>{text('Default', getAlphabet())}</span>
            <Spacer Text="Variations" />
            <span className="text text--bold">{text('Bold', getAlphabet())}</span>
            <br />
            <span className="text text--bold-italic">{text('Bold-Italic', getAlphabet())}</span>
            <br />
            <span className="text text--medium">{text('Medium', getAlphabet())}</span>
            <br />
            <span className="text text--italic">{text('Italic', getAlphabet())}</span>
            <Spacer Text="Color variations" />
            <span className="text--black">{text('Black', getAlphabet())}</span>
            <br />
            <span className="text--blue">{text('Blue', getAlphabet())}</span>
            <br />
            <span className="text--white" style={{backgroundColor: '#000000'}}>{text('White', getAlphabet())}</span>
        </React.Fragment>
    ));