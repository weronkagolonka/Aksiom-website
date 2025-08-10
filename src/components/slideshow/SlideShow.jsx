import React from 'react';
import styled from 'styled-components';
import katowice from '../../images/katowice.jpg';
import scanye from '../../images/scanye.png';
import { mq } from '../../breakpoints';
import { useSpring, animated } from 'react-spring';
import { config } from '../../config';

import { sizes } from '../../styles/constants';

const Slideshow = () => {
    const slideAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 150,
        config: config.gentle,
    });


    return (
        <HeroBanner style={slideAnimation}>
            <HeroBannerImage />
            <TextBox>
                {/*<h2>Profesjonalne usługi księgowe</h2>*/}
                <HeroText>PROFESJONALNE</HeroText>
                <HeroText>USŁUGI</HeroText>
                <HeroText>KSIĘGOWE.</HeroText>
                <p style={{marginTop: '24px'}}>Lokalnie. Na Śląsku.</p>
                <ActionButton href={config.scanyeUrl} target='blank'>
                    <img src={scanye} style={{'height': '100px'}} alt='scanye' />
                </ActionButton>
            </TextBox>
        </HeroBanner>
    )
}

export default Slideshow

const HeroText = styled.div`
${mq({
    fontSize: ['2rem', '2rem', '2.5rem', '3rem']
})}
    font-weight: 900;
    font-size: 3rem;
`

const HeroBanner = styled(animated.div)`
    ${mq({
    height: [
        `${sizes.HERO_BANNER_HEIGHT_MOBILE}`, 
        `${sizes.HERO_BANNER_HEIGHT_MOBILE}`, 
        `${sizes.HERO_BANNER_HEIGHT_MOBILE}`, 
        `${sizes.HERO_BANNER_HEIGHT_DESKTOP}`
    ],
    marginTop: [
        '144px', 
        '144px', 
        `${sizes.NAVBAR_HEIGHT_DESKTOP}`, 
        `${sizes.NAVBAR_HEIGHT_DESKTOP}`
    ],
    marginRight: ['0', '0', '0', '0', '300px'],
    display: 'flex',
    flexDirection: ['column', 'column', 'column', 'row'],
})};
    `;


const HeroBannerImage = styled('div')`
    background-image: url(${katowice});
    background-size: cover;
    flex: 2;
    background-position: left;
`;

const TextBox = styled('div')`
    ${mq({
    margin: ['2rem 1rem', '2rem 1rem', '2rem 1rem', '6.5rem auto 1rem auto'],
    paddingLeft: ['24px', '24px', '12px', '4rem'],
    paddingRight: ['24px', '24px', '12px', '6.5rem']
})};
   display: flex;
   background-color: white;
   flex-direction: column;
   align-items: left;
   justify-content: flex-start;
   color: black;
`;

const ActionButton = styled.a`
    background-color: transparent;
    border: none;
    text-align: left;
    margin-top: auto;
    margin-left: -32px;
    cursor: pointer;
`;
