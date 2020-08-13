import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Slide from './Slide';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: landingData.length,
    };
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  goToNextSlide() {
    let { activeIndex } = this.state;
    activeIndex = activeIndex < 1 ? 0 : activeIndex += 1;
    this.setState({ activeIndex });
  }

  goToPreviousSlide() {
    let { activeIndex } = this.state;
    activeIndex = activeIndex < 1 ? 0 : activeIndex -= 1;
    this.setState({ activeIndex });
  }

  render() {
    const activeIndex = this.state;
    return (
      <div className="slider">
        <div>
          <LeftArrow goToPreviousSlide={() => this.goToPreviousSlide()} />
        </div>
        <div>
          <Slide activeIndex={activeIndex} />
        </div>
        <div>
          <RightArrow goToNextSlide={() => this.goToNextSlide()} />
        </div>
      </div>
    );
  }
}
Slider.propTypes = {
  goToNextSlide: PropTypes.instanceOf(Function).isRequired,
  goToPreviousSlide: PropTypes.instanceOf(Function).isRequired,
};

export default Slider;
