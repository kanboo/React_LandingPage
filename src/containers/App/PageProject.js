import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Card from './Card';

import projectJson from './project.json';

export default class PageProject extends Component {

  render() {
    return (
      <section className="page" id="PageProject">
        <div className="container">
          <div className="cards">
            {
              projectJson.map(data =>
                (<Card
                  {...data}
                />))
            }
          </div>
        </div>
      </section>
    );
  }
}
