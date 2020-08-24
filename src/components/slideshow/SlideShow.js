import React from 'react';
import styled from 'styled-components';
import katowice from '../../images/katowice.jpg';
import { animated } from "react-spring";
import { mq } from '../../breakpoints';

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
            <TextBox>
                <TitleSlide>Profesjonalne usługi księgowe</TitleSlide>
                <SubtitleSlide>Lokalnie. Na Śląsku.</SubtitleSlide>
            </TextBox>
        </SlideContainer>
    )
}

export default Slideshow


const SlideContainer = styled(animated.div)`
    ${mq({
    backgroundImage: `url(${katowice})`,
    height: ['420px', '420px', '560px', '560px'],
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginTop: ['144px', '144px', '0px', '0px'],
    position: 'block',
})};
    `;

const TextBox = styled('div')`
    ${mq({
    margin: ['5rem auto', '5rem auto', '6.5rem auto', '6.5rem auto'],
})};
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const TitleSlide = styled.h1`
    ${mq({
    margin: ['24px', '24px', '48px', '48px']
})};
    text-align: center;
    color: white;
`;

const SubtitleSlide = styled.p`
    text-align: center;
    color: white;
`; 
