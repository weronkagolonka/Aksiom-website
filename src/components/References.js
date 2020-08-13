import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import { useSpring, animated, config } from "react-spring";

const slideImages = [];

const References = () => {
    const slideAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 150,
        config: config.gentle,
    });

    return (
        <div>
            <Title>Zaufali nam</Title>
            <Slide>
                <Slide1>
                    <Person>Janek</Person>
                </Slide1>
                <Slide2>
                    <Person>Franek</Person>
                </Slide2>
                <Slide3>
                    <Person>Boguś</Person>
                </Slide3>
            </Slide>
        </div>
    );
}

export default References

const Title = styled.h1`
    text-align: center;
    margin: 48px;
    margin-top: 72px;
`;

const Person = styled.h1`
    color: #D5992E;
    text-align: center;
`;

const Slide1 = styled.div`
    display: flex;
    height: 560px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Slide2 = styled.div`
    display: flex;
    height: 560px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Slide3 = styled.div`
    display: flex;  
    height: 560px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

