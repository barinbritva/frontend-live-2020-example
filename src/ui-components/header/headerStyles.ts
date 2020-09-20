import CSS from 'csstype';

export const container: CSS.Properties = {
  borderBottom: '1px solid #999'
}

export const content: CSS.Properties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '980px',
  margin: '0 auto',
  alignItems: 'center',
  padding: '10px 0'
}

export const heading: CSS.Properties = {
  fontWeight: 600,
  fontSize: '20px'
}

export const userContainer: CSS.Properties = {
  display: 'flex',
  width: '150px',
  justifyContent: 'space-between',
  alignItems: 'center'
}

export const avatarImage: CSS.Properties = {
  width: '50px',
  height: '50px',
  borderRadius: '50%'
}
