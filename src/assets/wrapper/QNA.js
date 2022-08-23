import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  .qna-titles {
    .title {
      margin-left: 2rem;
      text-decoration: none;
      color: #000;
      font-size: 1.5rem;
    }
    hr{
        width: 70vw;
    }
    .title.active {
      color: #ef9d22;
      width: 100%;
      border-bottom: 3px solid #ef9d22;
    }
  }
  @media (max-width:750px){
    margin:0.5rem;
    .qna-titles{
      .title{
        margin-left: 1.5rem;
        font-size: 1rem;
      }
      hr{
        width: 90vw;
      }
    }
  }
`;

export default Wrapper;
