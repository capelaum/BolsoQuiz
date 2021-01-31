import styled from 'styled-components';

const Widget = styled.div`
  margin-bottom: 32px;
  /* padding-bottom: 16px; */
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
  .loading-container{
    text-align: center;
  }

  .loading-container img{
    width: 100px;
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
    color: #FFF;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Widget;
