import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class PageTitle extends Component {


  goNext = () => {
    const navdots = document.querySelectorAll('.nav-dot');
    navdots[1].click();
  }

  render() {
    return (
      <section className="page" id="PageTitle">
        <div className="container">

          <h1>Hi, my name is <span className="myname">Kanboo</span></h1>
          <p>Welcome to here.</p>

          <div className="scrollDown bounce" >
            <button onClick={() => this.goNext()}>
              <FontAwesomeIcon icon="arrow-down" size="1x" />
            </button>
          </div>

        </div>
      </section>
    );
  }
}
