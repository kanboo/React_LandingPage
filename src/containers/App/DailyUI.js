import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Card from './Card';

export default class DailyUI extends Component {


  goNext = () => {
    const navdots = document.querySelectorAll('.nav-dot');
    navdots[1].click();
  }

  render() {
    return (
      <section className="page" id="DailyUI">
        <div className="container">

          <div className="sectionTitle">
            <div className="blur" />
            <div className="titleText">
              <h2>Tools</h2>
              <p>製作簡單、方便、好用的小工具可以幫助很多剛開始踏入 React 的新手快速的熟悉，像是 StartKit 就是我們想讓大家可以快速上手的所搭件的橋樑</p>
              <button className="more">More</button>
            </div>
          </div>

          <div className="cards">
            <Card />
          </div>


        </div>
      </section>
    );
  }
}
