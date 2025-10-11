import styled from "styled-components";
import React, { Ref, useEffect, useState } from "react";
import { colors, sizes } from "../styles/constants";

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
            <PopUpContainer className="popup-container">
                <PopUp ref={wrapperRef}>
                    <h2>Popup Content</h2>
                    <p>This is the content of the popup.</p>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </PopUp>
            </PopUpContainer>
        )
    }
    return null;
}

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
    background-color: white;
    padding: 24px;
    border-radius: ${sizes.BORDER_RADIUS};
    border: 5px solid ${colors.MAIN_YELLOW};
    box-shadow: -20px 20px ${colors.MAIN_YELLOW};
`