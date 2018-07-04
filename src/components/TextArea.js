import styled from 'styled-components'

const TextArea = styled.textarea`
  appearance: none;
  background: transparent;
  border-radius: 0.325rem;
  border: solid 1px;
  border-color: #dde1eb;
  color: rgb(122, 125, 134);
  display: block;
  outline: 0;
  padding: 0 1rem;
  text-decoration: none;
  width: 100%;
  padding: 0.75rem 1rem;

  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  font-size: 0.9rem;

  &:focus {
    border-color: #a3a9e7;
    box-shadow: 0 0 0 1px #a3a9e7;
  }
`

export default TextArea
