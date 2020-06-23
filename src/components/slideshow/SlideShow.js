import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import katowice from '../../images/katowice.jpg';
import work from '../../images/work.jpg';
import electrician from '../../images/electrician.jpg';

const slideImages = [
    katowice,
    work,
    electrician
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {


    return (
        <SlideContainer>
            <Slide {...properties}>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${slideImages[0]})`,
                        'height': '450px',
                        'width': '1440px',
                        'backgroundPosition': 'center',
                        'backgroundSize': 'cover',
                    }}>
                        <span>Slide 1</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{
                        'backgroundImage': `url(${slideImages[1]})`,
                        'height': '450px',
                        'width': '1440px',
                        'backgroundPosition': 'center',
                        'backgroundSize': 'cover',
                    }}>
                        <span>Slide 2</span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})`, 'height': '400px' }}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </SlideContainer>
    )
}

export default Slideshow

const SlideContainer = styled.div`
    margin: 8.5rem auto;
    height: 40%;
    width: 100%;
`;
