export default {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif'
  },
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#20232a',
    secondary: '#5E2A85',
    white: '#fff'
  },
  space: [0, 8, 16, 32, 64],
  breakpoints: ['768px', '1025px', '1290px'],
  links: {
    cta: {
      fontWeight: 'bold',
      textDecoration: 'none',
      border: '1px solid',
      borderColor: 'secondary',
      borderRadius: '4px',
      paddingTop: '.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      paddingBottom: '.5rem',
      textTransform: 'uppercase',
      '&:hover': {
        color: 'white',
        bg: 'secondary'
      }
    }
  }
}
