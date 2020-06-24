import React from 'react';
import styled from 'styled-components';
import placeholder from '../images/placeholder.jpg';

const About = () => {
    return (
        <AboutBox>
            <PicContainer />
            <Spacer />
            <TextContainer>
                <p>Etiam volutpat dui ac ligula cursus vehicula. Maecenas velit massa, ornare at sapien in, fringilla porttitor mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc et lorem eget magna dignissim dignissim. Maecenas neque nunc, ornare eget faucibus vel, semper ac elit. Nulla lectus lacus, faucibus a ligula nec, euismod egestas nisi. Aliquam erat volutpat. Donec et volutpat nulla. Integer placerat cursus massa vitae ullamcorper. Curabitur lobortis sapien fermentum velit tincidunt, a tristique metus condimentum. Sed laoreet elementum nisi a eleifend. Vivamus leo mauris, sollicitudin ac arcu ut, mollis dapibus orci. Suspendisse malesuada dolor mauris, vitae pellentesque nisi dictum vitae. Suspendisse ipsum velit, scelerisque sit amet turpis aliquet, facilisis commodo dolor. In ac libero dolor.</p>
            </TextContainer>
        </AboutBox>
    );
}

export default About

const AboutBox = styled.div`
    padding-left: 48px;
    padding-right: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    height: 675px;
`;

const PicContainer = styled.div`
    order: 1;
    width: 30%;
    background-image: url(${placeholder});
    background-position: center;
    background-size: cover;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 3;
    width: 40%;
`;

const Spacer = styled.div`
    order: 2;
    width: 20%;
`;



