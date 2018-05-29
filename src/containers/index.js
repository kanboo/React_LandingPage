import React, { Component } from 'react';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solids from '@fortawesome/fontawesome-free-solid';

import 'animate.css/animate.min.css';
import './scss/style.scss';

import PureFullPage from './FullPagePackage/pureFullPage';
import PageTitle from './App/PageTitle';
import DailyUI from './App/DailyUI';

fontawesome.library.add(brands, solids);

export default class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      // todos: []
    };
  }

  componentDidMount() {
    new PureFullPage().init();
  }

  render() {
    return (
      <div id="pureFullPage">
        <PageTitle />
        <DailyUI />

        <section className="page">
          <p> Page 3 </p>
        </section>
      </div>
    );
  }
}
