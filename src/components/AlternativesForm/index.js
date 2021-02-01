import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: #000;
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
        color: #FFF;
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
        color: #FFF;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }

  p .submit-result .correct {
      background-color: ${({ theme }) => theme.colors.success};
    }

  p {
    padding: 8px;
    display: inline-block;
    font-size: 18px;
    width: 100%;
    text-align: center;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;