import styled from 'styled-components'

const Input = styled.input`
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
  height: 2.75rem;

  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  font-size: 0.9rem;

  &:focus {
    border-color: #a3a9e7;
    box-shadow: 0 0 0 1px #a3a9e7;
  }
`

export default Input
