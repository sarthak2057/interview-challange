import styled from "styled-components";

const Wrapper  = styled.div`
display: flex;
justify-content: center;
align-items: center;
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
  margin-top: 12rem;
  width: 150px;
  height: 150px;
  border: 10px solid var(--font-highlight-primary); /* Light grey */
  border-top: 10px solid var(--font-highlight-primary); /* Black */
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
}
`

export default Wrapper;