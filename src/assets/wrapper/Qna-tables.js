import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    text-align: left;
    grid-column-gap: 1.5rem;
    table{
        tr:nth-child(even){
            background-color: #f5f5f5;
        }
        th,td{
            padding: 0.6rem;
        }
    }
    @media (max-width:750px){
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
}
`;

export default Wrapper;

