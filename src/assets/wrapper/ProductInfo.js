import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 4.5rem;
  .title {
    padding-bottom: 2rem;
    position: relative;
    .add-to-wish {
      width: 20%;
      position: absolute;
      border: none;
      padding: 0.4rem;
      border-radius: 1rem;
      bottom: 0;
      right: 0;
      color: var(--font-hightlight-secondary);
      background-color: var(--wishlist-bg);
      transition: 0.5s ease-in;
    }
    .add-to-wish:hover {
      transform: scale(1.1);
      cursor: pointer;
      color: var(--bg-primary);
      background-color: var(--font-highlight-secondary);
    }
  }
  h1 {
    font-size: 1.8rem;
    font-weight: 100;
  }
  .badge {
    font-size: 1rem;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    background-color: #000;
    color: #fff;
  }
  hr {
    height: 2px;
    margin: 1.5rem 0;
    background-color: lightgrey;
    opacity: 0.8;
  }
  .variant-info {
    display: flex;
    flex-direction: column;
    .variant-imgs {
      margin: 1rem 0 0 0;
      img {
        margin-right: 1rem;
      }
    }
  }
  .pricing-info {
    .mrp {
      color: lightgray;
      font-size: 0.9rem;
      text-decoration: line-through;
    }
    .pricing-cart {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .sp {
        margin: 1rem 0;
        font-weight: 300;
        font-size: 2rem;
      }
    }
  }
  .offer-info {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    .offer {
      background-color: #fdf4e6;
      font-weight: bold;
      padding: 0.4rem 1rem;
      border-radius: 2rem;
      margin-right: 1rem;
    }
    .save-info {
      color: #ef9d22;
    }
  }

  .about {
    font-size: 1rem;
    line-height: 2rem;
    h2 {
      font-weight: 500;
    }
  }

  .search-query {
    margin: 2rem 0;
    p {
      font-size: 1.2rem;
    }
    .input-value {
      margin-top: 0.5rem;
      background-color: #f2f2f2;
      width: 22rem;
      display: flex;
      font-size: 1.5rem;
      padding: 0.5rem;
      align-items: center;
      input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 1280px) {
    .title {
      .add-to-wish {
        position: relative;
        margin-top: 1rem;
        width: 30%;
      }
    }
    .pricing-info {
    .mrp {
      font-size: 0.8rem;
    }
    .pricing-cart {
      display: flex;
      flex-direction: row;
      align-items: center;

      .sp {
        margin: 1rem 0;
        font-weight: 200;
        font-size: 1.2rem;
      }
    }

}
.offer-info {
  font-size: 0.7rem;
}
.about {
  font-size: 1rem;
  line-height: 1.5rem;
}
.search-query{
    p{
        font-size: 1rem;
    }
    .input-value{
        width: 17rem;
        font-size: 1.2rem;
    }
}
  }

  @media (max-width:750px){
    .about{
        font-size: 0.8rem;
        line-height: 1.2rem;
    }
  }
 
`;

export default Wrapper;
