import React from 'react';
import styled from 'styled-components';
import katowice from '../../images/katowice.jpg';
import { animated } from "react-spring";


const Slideshow = () => {
    /*
    const slideAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 150,
        config: config.gentle,
    });
    */

    return (
        <SlideContainer>
            <div style={{
                'backgroundImage': `url(${katowice})`,
                'height': '560px',
                'width': '1440px',
                'backgroundPosition': 'center',
                'backgroundSize': 'cover',
            }}>
                <TextBox>
                    <TitleSlide>Profesjonalne usługi księgowe</TitleSlide>
                    <SubtitleSlide>Lokalnie. Na Śląsku.</SubtitleSlide>
                </TextBox>

            </div>
        </SlideContainer>
    )
}

export default Slideshow

const SlideContainer = styled(animated.div)`
    
`;

const TextBox = styled.div`
   margin: 6.5rem auto;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const TitleSlide = styled.h1`
    text-align: center;
    color: white;
`;

const SubtitleSlide = styled.p`
    text-align: center;
    color: white;
`; 
