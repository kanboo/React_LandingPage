import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Card from './Card';

export default class DailyUI extends Component {
  goNext = () => {
    const navdots = document.querySelectorAll('.nav-dot');
    navdots[1].click();
  };

  render() {
    return (
      <section className="page" id="DailyUI">
        <div className="container">
          <div className="cards">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    );
  }
}
