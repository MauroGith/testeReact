import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }

`;

export const Content = styled.div`
  margin-top: 50px;

  h2 {
    text-align: center;
    margin: 20px 0 40px;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary.background};
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  max-width: max(1280px, 80vw);
  margin: 0 auto;
  padding: 0 max(20px, 1vw);

   @media (max-width: 768px) {
    flex-direction: column;
  }

  label {
    height: 70px;
    width: 100%;
    border: 2px solid #3F3D5660;
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-right: 30px;

    input {
      border: none;
      outline: none;
      background-color: transparent;
      height: 70px;
      width: 100%;
      color: #3F3D5680;
      font-size: 22px;
      padding-left: 30px;
      font-weight: 500;

      ::placeholder {
          color: #3F3D5680;
        }
    }

    > button {
      width: 65px;
      height: 65px;
      border: none;
      background-color: transparent;
    }
  }

  div{
    width: 300px;
  }
`;

export const CardList = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  margin-bottom: 100px;
`;
