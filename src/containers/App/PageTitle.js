import React, { Component } from 'react';


export default class PageTitle extends Component {


  goNext = () => {
    const navdots = document.querySelectorAll('.nav-dot');
    navdots[1].click();
  }

  render() {
    return (
      <section className="page" id="PageTitle">
        <div className="container">
          <h1>Hi, my name is Kanboo</h1>
          <p>Welcome to here.</p>

          <div className="scrollDown bounce" >
            <button onClick={() => this.goNext()}>▼</button>
          </div>

        </div>
      </section>
    );
  }
}
