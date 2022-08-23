import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 9rem;
  .product-quantity {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem 0;
    button {
      padding: 0.6rem;
      border: none;
      background-color: #fdf4e6;
      cursor: pointer;
    }
    span {
      margin: 0 1rem;
    }
    .add-cart {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 1.2rem;
      color: white;
      margin-left: 1rem;
      background-color: #ef9d22;
      padding: 0.5rem 3rem;
      transition: 0.5s ease-in-out;

      p {
        margin-left: 0.5rem;
      }
    }
    .add-cart:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }

  @media (max-width:1280px) {
    margin-left: 9rem;
    .product-quantity{
      .add-cart{
        font-size: 0.8rem;
        padding: 0.5rem 2rem;
      }
    }
  }
  @media (max-width:750px){
    margin-left : 5rem;
  }
`;

export default Wrapper;
