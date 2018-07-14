import * as React from 'react';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, About, PageNotFound } from '../pages';

export type Props = {};

export class Main extends Component {
    public render(): any {
        return (
            <main>
                <Switch>
                    {/* <Route exact path='/' component={ Home }/>
                        <Route path='home' component={ Home }/>
                        <Route path='about' component={ About }/>
                    <Route/> */}
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    {/* <Route/> */}
                </Switch>
            </main>
        );
    }
}
