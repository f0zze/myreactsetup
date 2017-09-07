import React from 'react';
import styled from 'emotion/react';
import { ThemeProvider } from 'theming';
import { withState } from 'recompose';
import { ellipsis } from './emotion/mixins';
import { H1, H2 } from './emotion/typography';
import Select from './Select';
import Ball from './Ball';
import Cat from './components/Cat';

const Description = styled(H2)`
    composes: ${ellipsis};
    width: 500px;
    display: inline-block;
`;

const Main = props => {
    const Hello = `Home Page`;
    return (
        <ThemeProvider theme={{ primaryColor: props.color }}>
            <div>
                <Select
                    value={props.color}
                    onValueChange={props.setColor}
                    options={['red', 'violet', 'black', 'green']}
                />
                <H1>
                    {Hello}
                </H1>
                <br />
                <Description color="grey">
                    There sits the only king I mean to bend my knee to: the King in the North!
                </Description>
                <br />
                <Cat />
                <Ball speed="2s" />
                <Ball speed="4s" />
                <Ball speed="3s" />
            </div>
        </ThemeProvider>
    );
};

Main.propTypes = {
    color: React.PropTypes.string.isRequired,
    setColor: React.PropTypes.func.isRequired
};

export default withState('color', 'setColor', 'violet')(Main);
