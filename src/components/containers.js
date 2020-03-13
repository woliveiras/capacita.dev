import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 1.45rem;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`
