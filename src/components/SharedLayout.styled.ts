import styled from "styled-components";

const Badge = styled.span<{ empty: boolean }>`
    display: ${props => props.empty ? "none" : "inline-block"};
    position: fixed;
`


export default {
    Wrapper: styled.div`
        
    `,
    Navbar: styled.nav`
    
    `,
    CartCountBadge: styled(Badge)`
    `
}