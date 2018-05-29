import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Card extends Component {
  // static propTypes = {
  //   name: PropTypes.string,
  //   description: PropTypes.string,
  //   img: PropTypes.string,
  //   demoUrl: PropTypes.string,
  //   repoUrl: PropTypes.string,
  // }

  render() {
    // const {
    //   name,
    //   description,
    //   img,
    //   demoUrl,
    //   repoUrl,
    // } = this.props;

    return (
      <div className="card">
        <a href="aaa" className="image">
          <img
            src="https://images.unsplash.com/photo-1509890078470-aa80385aee41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff67e8117e302b0884b183c5bbb07561&auto=format&fit=crop&w=500&q=60"
            alt="aaa"
          />
        </a>
        <h3 className="major">Sed lorem</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla
          dignissim dapibus ultrices.
        </p>
        <a href="aaa" className="link">
          <FontAwesomeIcon icon="desktop" size="2x" />
        </a>
        <a href="aaa" className="link">
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
        <a href="aaa" className="link">
          <FontAwesomeIcon icon={['fab', 'wpforms']} size="2x" />
        </a>
      </div>
    );
  }
}
