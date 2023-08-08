import { styled } from "styled-components";
import logo from "../../images/twemoji_shorts.png"

export default function Logo() {
    return (
        <StyledLogo>
            <h1>Shortly</h1>
            <img src={logo} alt="Shortly logo" />
        </StyledLogo>
    );
}

const StyledLogo = styled.div`
    display: flex;
    gap: 8px;
    
    h1 {
        font-size: 64px;
        font-weight: 200;
        line-height: 80px;
    }
`;