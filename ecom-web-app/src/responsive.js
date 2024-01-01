import { css } from "styled-components";

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 390px) {
        ${props}
    }
 `;
};

export const biggerDevices = (props) => {
    return css`
    @media only screen and (min-width: 391px) {
        ${props}
    }
 `;
};