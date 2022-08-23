import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  margin: 0;
  padding: 0 2rem 2rem 2rem;
  .footer-links {
    margin: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    .footer-item {
      margin-top: 2rem;
      display: flex;
      line-height: 2rem;
      flex-direction: column;
      .link {
        text-decoration: none;
        color: #fff;
        cursor: pointer;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        span {
          margin-left: 0.5rem;
        }
      }
      .link:hover {
        color: #ef9d22;
      }
      .title {
        text-transform: uppercase;
      }
      .title.download {
        margin-top: 0.4rem;
      }
      .icons {
        margin-top: 0.4rem;
        color: #ef9d22;
        font-size: 1.2rem;
        span:not(:first-child) {
          margin-left: 0.7rem;
        }
      }
    }
  }
  .subscribe {
    margin:4rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1.2rem;
    }
    .input-value {
      margin-top: 0.5rem;
      background-color: #f2f2f2;
      width: 20rem;
      font-size: 1.5rem;
      padding: 0.5rem;
      input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 1rem;
      }
    }
  }
  @media (max-width:750px){
    .footer-links{
      grid-template-columns: 1fr;
    }
  }
`;

export default Wrapper;
