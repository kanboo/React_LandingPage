import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default class Card extends Component {
  // 設定型別
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    demoUrl: PropTypes.string,
    repoUrl: PropTypes.string,
    blogUrl: PropTypes.string,
  }

  // 設定 default 值
  static defaultProps = {
    title: '',
    description: '',
    imgUrl: 'https://images.unsplash.com/photo-1509890078470-aa80385aee41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff67e8117e302b0884b183c5bbb07561&auto=format&fit=crop&w=500&q=60',
    demoUrl: 'aa',
    repoUrl: 'bb',
    blogUrl: 'cc',
  }


  render() {
    const {
      title,
      description,
      imgUrl,
      demoUrl,
      repoUrl,
      blogUrl,
    } = this.props;

    return (
      <div className="card">
        <a href="aaa" className="image">
          <img
            src={imgUrl}
            alt={title}
          />
        </a>

        <h2 className="title">{title}</h2>
        <p className="desc">
          {description}
        </p>

        <div className="links">
          {demoUrl &&
            <a href={demoUrl} className="link" target="_blank">
              <div className="circle">
                <FontAwesomeIcon icon={['fas', 'desktop']} size="2x" />
              </div>
            </a>
          }

          {repoUrl &&
            <a href={repoUrl} className="link" target="_blank">
              <div className="circle">
                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
              </div>
            </a>
          }

          {blogUrl &&
            <a href={blogUrl} className="link" target="_blank">
              <div className="circle">
                <FontAwesomeIcon icon={['fab', 'wpforms']} size="2x" />
              </div>
            </a>
          }
        </div>
      </div>
    );
  }
}
