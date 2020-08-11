import React, { Component } from 'react';
import axios from 'axios';
import { Reset } from 'styled-reset';
import RangeMediaGrid from './RangeMediaGrid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isCollapsed: true,
      productId: 1,
    };
    this.getImages = this.getImages.bind(this);
    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    const { productId } = this.state;
    axios.get(`/${productId}`)
      .then((response) => {
        response.data.forEach((imageObj) => {
          this.setState(({ images }) => ({
            images: images.concat(imageObj),
          }
          ));
        });
      });
  }

  handleShowMoreClick(e) {
    e.preventDefault();
    this.setState(({ isCollapsed }) => ({
      isCollapsed: !isCollapsed,
    }));
  }

  render() {
    const { images, isCollapsed } = this.state;
    return (
      <div>
        <Reset />
        <RangeMediaGrid
          images={
            isCollapsed ? images.slice(0, 4) : images
          }
          handleClick={this.handleShowMoreClick}
        />
      </div>
    );
  }
}

export default App;
