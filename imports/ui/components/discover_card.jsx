import React, { Component, PropTypes } from 'react';

export default class DiscoverCard extends Component {
  render() {
    return (
      <div className="card profile-photo">
        <div className="card-image waves-effect waves-block waves-light">
          <img class="responsive-img" src= {this.props.imgSrc ? this.props.imgSrc : "img_not_find.jpg"} />
        </div>

        <div className="card-content profile-name">
          <label>Name</label>
          <div>
            <span className="card-title grey-text text-darken-4">{this.props.name}</span>
          </div>
        </div>
      </div>
    )
  }
}

DiscoverCard.propTypes = {
  imgSrc: PropTypes.string,
};