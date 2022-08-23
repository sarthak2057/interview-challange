import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:550px;
    margin-left: 2rem;
    

    .main_img{
        width:400px;
        height:400px;
        
        img{
            width:100%;
            height:100%;
        }
    }
    .angle_imgs{
        width:400px;
        margin-top: 2rem;
        img{
            width:63px;
        }
    }

    @media (max-width:750px){
        justify-content: center;
        .main_img{
            margin: 0 auto;
        }
        .angle_imgs{
            margin: 0 auto;
        }
    
}
`;

export default Wrapper;