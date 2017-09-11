import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'theming';

import Home from './views/Home';
import List from './views/List';
import ItemDetails from './views/ItemDetails';

class Main extends React.Component {
    getRouter = () =>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/list/:id" component={ItemDetails} />
        </Switch>;

    render() {
        return (
            <ThemeProvider theme={{ primaryColor: 'red' }}>
                <BrowserRouter>
                    {this.getRouter()}
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default Main;
