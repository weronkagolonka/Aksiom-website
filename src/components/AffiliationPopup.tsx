import styled from "styled-components";
import React, { Ref, useEffect, useState } from "react";
import { colors, sizes } from "../styles/constants";
import { config } from "../config";
import { mq } from "../breakpoints";
import BankLogo from "../assets/alior-logo.svg";
import { IconBase } from "react-icons";

function onClickOutside(ref: React.RefObject<any>, onClickOutside: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export const AffiliationPopup = () => {
    const wrapperRef = React.useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const delayInSeconds = 1.25;

    onClickOutside(wrapperRef, () => setShowPopup(false));

    useEffect(() => {
        const delay = delayInSeconds * 1000;
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delayInSeconds]);

    if (showPopup) {
        return (
            <PopUpContainer>
                <PopUp ref={wrapperRef}>
                    <Logo src={BankLogo} />

                    <h2>Szukasz oferty bankowej dla swojej firmy?</h2>
                    <p>
                        Biuro Rachunkowe Aksiom współpracuje z Alior Bank,
                        oferując swoim klientom korzystne warunki na wybrane
                        produkty:
                    </p>

                    <ButtonContainer>
                        <ActionButton
                            onClick={() =>
                                window.open(
                                    config.aliorAfilliation.iKontoBiznes,
                                    "_blank"
                                )
                            }
                        >
                            Załóż iKontoBiznes
                        </ActionButton>
                        <ActionButton
                            onClick={() =>
                                window.open(
                                    config.aliorAfilliation.biznesKredyt,
                                    "_blank"
                                )
                            }
                        >
                            Weź BiznesKredyt
                        </ActionButton>
                        <CloseButton onClick={() => setShowPopup(false)}>
                            Nie teraz
                        </CloseButton>
                    </ButtonContainer>
                </PopUp>
            </PopUpContainer>
        );
    }
    return null;
};

const Logo = styled.img`
    margin-right: auto;
    ${mq({
        height: ["42.5px", "42.5px", "85px", "85px"],
    })};
`;

const ButtonContainer = styled.div`
    margin-top: 0.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const ActionButton = styled.button`
    color: white;
    background: ${colors.ALIOR.PURPLE};
    border: 2px solid ${colors.ALIOR.PURPLE};
    border-radius: ${sizes.BORDER_RADIUS};
    padding: 0.25rem 2rem;
    ${mq({
        fontSize: ["0.75rem", "0.75rem", "1.5rem", "1.5rem"],
    })};
    &:hover {
        cursor: pointer;
    }
`;

const CloseButton = styled.button`
    color: ${colors.ALIOR.PURPLE};
    background: none;
    border: 2px solid ${colors.ALIOR.PURPLE};
    border-radius: ${sizes.BORDER_RADIUS};
    padding: 0.25rem 2rem;
    ${mq({
        fontSize: ["0.75rem", "0.75rem", "1.5rem", "1.5rem"],
    })};
    &:hover {
        cursor: pointer;
    }
`;

const PopUpContainer = styled.div`
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopUp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding: 2.5rem;
    border-radius: ${sizes.BORDER_RADIUS};
    border: 5px solid ${colors.ALIOR.PURPLE};
    max-width: 600px;
    text-align: left;
    margin: 1rem;
    ${mq({
        gap: ["1rem", "1rem", "1.5rem", "1.5rem"],
        padding: ["1.25rem", "1.25rem", "2.5rem", "2.5rem"],
    })};
`;
