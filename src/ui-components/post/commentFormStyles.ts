import CSS from 'csstype';

export const container: CSS.Properties = {
  display: 'flex',
  marginTop: '20px'
}

export const input: CSS.Properties = {
  width: '80%',
  height: '35px',
  border: '1px solid rgb(153 153 153 / 28%)',
  borderRight: 'none',
  borderBottom: 'none',
  borderLeft: 'none',
  padding: '1px 10px'
}

export const button: CSS.Properties = {
  width: '20%',
  textTransform: 'uppercase',
  background: 'transparent',
  border: '1px solid rgb(153 153 153 / 28%)',
  borderBottom: 'none',
  borderRight: 'none',
  cursor: 'pointer'
}
