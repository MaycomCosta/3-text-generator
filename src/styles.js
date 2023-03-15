import styled from 'styled-components'

export const Section = styled.section`
  width: 90vw;
  margin: 0 auto;
  max-width: 40rem;
  margin-top: 5rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }

  h3 {
  text-transform: uppercase;
  color:     hsl(205, 86%, 17%);
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;

  @media screen and (min-width: 800px) {
    font-size: 1.75rem;
    line-height: 1;  
}
  }
`
export const Form = styled.form`
    text-transform: capitalize;
  letter-spacing: 0.1rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
    padding: 0.25rem 0.5rem;
  width: 4rem;
  border-radius: 0.25rem;
  border: none;
  margin: 0 0.5rem;
  font-size: 1.25rem;
`
export const LoremIpsumText = styled.article`
  p{
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
  }
`
export const Label = styled.label`
    font-size: 1.25rem;
  color: hsl(205, 86%, 17%);
`
export const Button = styled.button`
  text-transform: uppercase;
  background: hsl(205, 78%, 60%);
  color: hsl(205, 86%, 17%);
  padding: 0.375rem 0.75rem;
  letter-spacing: 1px;
  display: inline-block;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid hsl(205, 78%, 60%);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;

  :hover {
    color: hsl(205, 78%, 60%);
  background: hsl(205, 86%, 81%);
  border-color: hsl(205, 86%, 81%);
  }
`
// export const Container = styled.div`
  
// `
