import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    align-self: center;

    button {
      border: none;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${props => (props.available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: 400;
  }

  span {
    display: block;
    color: ${props => (props.available ? '#999' : '#666')};
    margin-top: 3px;
  }
`;
