import styled from 'styled-components';

const Page = styled.div`
  position: relative;
  border: 3px solid #3878de;
  border-radius: 10px;
  background: #fff;
  height: 450px;
  width: 350px;

  & form {
    margin: 10px;
    padding-bottom: 15px;

    & label {
      font-size: 12px;
      font-style: italic;
    }

    & button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;
export default Page;
