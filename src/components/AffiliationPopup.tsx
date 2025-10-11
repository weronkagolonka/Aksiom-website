import styled from "styled-components";
import React, { Ref, useEffect, useState } from "react";
import { colors, sizes } from "../styles/constants";
import { config } from "../config";
import { mq } from "../breakpoints";

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
                    <h2>Popup Content</h2>
                    <p>This is the content of the popup.</p>
                    <ButtonContainer>
                        <ActionButton onClick={() => window.open(config.collaboration.iKontoBiznes, "_blank")}>
                            Załóż iKontoBiznes
                        </ActionButton>
                        <ActionButton onClick={() => window.open(config.collaboration.biznesKredyt, "_blank")}>
                            Weź BiznesKredyt
                        </ActionButton>
                        <CloseButton onClick={() => setShowPopup(false)}>Nie teraz</CloseButton>
                    </ButtonContainer>
                </PopUp>
            </PopUpContainer>
        )
    }
    return null;
}

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 48px;
`

const ActionButton = styled.button`
    color: white;
    background: ${colors.MAIN_YELLOW};
    border: 2px solid ${colors.MAIN_YELLOW};
    border-radius: ${sizes.BORDER_RADIUS};
    padding: 0 48px;
    ${mq({
        fontSize: ['0.5rem', '0.5rem', '1.5rem', '1.5rem']
    })}
`

const CloseButton = styled.button`
    color: ${colors.MAIN_YELLOW};
    background: none;
    border: 2px solid ${colors.MAIN_YELLOW};
    border-radius: ${sizes.BORDER_RADIUS};
    padding: 0 48px;
     ${mq({
        fontSize: ['0.5rem', '0.5rem', '1.5rem', '1.5rem']
    })}
`

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
`

const PopUp = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 48px;
    border-radius: ${sizes.BORDER_RADIUS};
    border: 5px solid ${colors.MAIN_YELLOW};
    box-shadow: -20px 20px ${colors.MAIN_YELLOW};
`