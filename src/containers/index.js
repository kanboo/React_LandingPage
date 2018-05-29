import React, { Component } from 'react';
import PureFullPage from './fullpagePackage/pureFullPage';
import PageTitle from './App/PageTitle';

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
        <section className="page">
          <p> Page 2 </p>
        </section>
        <section className="page">
          <p> Page 3 </p>
        </section>
      </div>
    );
  }
}
