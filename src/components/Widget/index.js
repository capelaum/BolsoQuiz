import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: rgba(23, 27, 53, 0.9);
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
  a:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

Widget.Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-top: 8px;
`;

Widget.Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 12px;
  margin-top: 16px;
  font-size: 20px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFF;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.8;
    color: #000;
  }
`;

export default Widget;
