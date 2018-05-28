import React, { Component } from 'react';
import PureFullPage from './pureFullPage';

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
        <div className="page">
          <p> Page 1 </p>
        </div>
        <div className="page">
          <p> Page 2 </p>
        </div>
        <div className="page">
          <p> Page 3 </p>
        </div>
      </div>
    );
  }
}
