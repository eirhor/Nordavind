import { storiesOf } from '@storybook/react';
import * as React from 'react';
import '../Core/typography.scss';

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
    .add('Heading 1', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h1>{getAlphabet()}</h1>
            <Spacer Text="Variations" />
            <h1 className="text text--bold-italic">{getAlphabet()}</h1>
            <Spacer Text="Color variations" />
            <h1 className="text--black">{getAlphabet()}</h1>
            <h1 className="text--blue">{getAlphabet()}</h1>
            <h1 className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</h1>
        </React.Fragment>
    ))
    .add('Heading 2', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h2>{getAlphabet()}</h2>
            <Spacer Text="Variations" />
            <h2 className="text text--bold-italic">{getAlphabet()}</h2>
            <Spacer Text="Color variations" />
            <h2 className="text--black">{getAlphabet()}</h2>
            <h2 className="text--blue">{getAlphabet()}</h2>
            <h2 className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</h2>
        </React.Fragment>
    ))
    .add('Heading 3', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h3>{getAlphabet()}</h3>
            <Spacer Text="Variations" />
            <h3 className="text text--bold-italic">{getAlphabet()}</h3>
            <Spacer Text="Color variations" />
            <h3 className="text--black">{getAlphabet()}</h3>
            <h3 className="text--blue">{getAlphabet()}</h3>
            <h3 className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</h3>
        </React.Fragment>
    ))
    .add('Heading 4', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h4>{getAlphabet()}</h4>
            <Spacer Text="Variations" />
            <h4 className="text text--bold-italic">{getAlphabet()}</h4>
            <Spacer Text="Color variations" />
            <h4 className="text--black">{getAlphabet()}</h4>
            <h4 className="text--blue">{getAlphabet()}</h4>
            <h4 className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</h4>
        </React.Fragment>
    ))
    .add('Heading 5', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h5>{getAlphabet()}</h5>
            <Spacer Text="Variations" />
            <h5 className="text text--bold-italic">{getAlphabet()}</h5>
            <Spacer Text="Color variations" />
            <h5 className="text--black">{getAlphabet()}</h5>
            <h5 className="text--blue">{getAlphabet()}</h5>
            <h5 className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</h5>
        </React.Fragment>
    ))
    .add('Heading 6', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <h6>{getAlphabet()}</h6>
            <Spacer Text="Variations" />
            <h6 className="text text--bold-italic">{getAlphabet()}</h6>
            <Spacer Text="Color variations" />
            <h6 className="text--black">{getAlphabet()}</h6>
            <h6 className="text--blue">{getAlphabet()}</h6>
            <h6 className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</h6>
        </React.Fragment>
    ))
    .add('Paragraph', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <p>{getAlphabet()}</p>
            <Spacer Text="Variations" />
            <p className="text text--bold">{getAlphabet()}</p>
            <p className="text text--bold-italic">{getAlphabet()}</p>
            <p className="text text--medium">{getAlphabet()}</p>
            <p className="text text--italic">{getAlphabet()}</p>
            <Spacer Text="Color variations" />
            <p className="text--black">{getAlphabet()}</p>
            <p className="text--blue">{getAlphabet()}</p>
            <p className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</p>
        </React.Fragment>
    ))
    .add('Anchor', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <a href="#">{getAlphabet()}</a>
            <Spacer Text="Variations" />
            <a href="#" className="text text--bold">{getAlphabet()}</a>
            <br />
            <a href="#" className="text text--bold-italic">{getAlphabet()}</a>
            <br />
            <a href="#" className="text text--medium">{getAlphabet()}</a>
            <br />
            <a href="#" className="text text--italic">{getAlphabet()}</a>
            <Spacer Text="Color variations" />
            <a href="#" className="text--black">{getAlphabet()}</a>
            <br />
            <a href="#" className="text--blue">{getAlphabet()}</a>
            <br />
            <a href="#" className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</a>
        </React.Fragment>
    ))
    .add('Span', () => (
        <React.Fragment>
            <Spacer Text="Default" />
            <span>{getAlphabet()}</span>
            <Spacer Text="Variations" />
            <span className="text text--bold">{getAlphabet()}</span>
            <br />
            <span className="text text--bold-italic">{getAlphabet()}</span>
            <br />
            <span className="text text--medium">{getAlphabet()}</span>
            <br />
            <span className="text text--italic">{getAlphabet()}</span>
            <Spacer Text="Color variations" />
            <span className="text--black">{getAlphabet()}</span>
            <br />
            <span className="text--blue">{getAlphabet()}</span>
            <br />
            <span className="text--white" style={{backgroundColor: '#000000'}}>{getAlphabet()}</span>
        </React.Fragment>
    ));