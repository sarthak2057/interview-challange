import styled from "styled-components";

const Container = styled.div`
    margin: 2rem 4rem;
    display: flex;
    flex-direction: row;

    @media (max-width:750px){
        flex-direction: column;
        margin:2rem 0;
}
`

export default Container;