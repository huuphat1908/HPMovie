import React from 'react';
import PropTypes from 'prop-types';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

//styled
import { Wrapper, Content } from './Slider.styles';

const Slider = ({ title, children }) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };
    return (
        <Wrapper>
            <Content>
                <h1>{title}</h1>
                <Carousel responsive={responsive} partialVisible={true}>
                    {children}
                </Carousel>
            </Content>
        </Wrapper>
    )
}

Slider.propTypes = {
    title: PropTypes.string,
    children: PropTypes.array,
}

export default Slider;