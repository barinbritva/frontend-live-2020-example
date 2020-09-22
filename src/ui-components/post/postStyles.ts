import CSS from 'csstype';

export const container: CSS.Properties = {
  borderRadius: '3px',
  border: '1px solid rgb(153 153 153 / 28%)',
  marginBottom: '20px'
}

export const userContainer: CSS.Properties = {
  display: 'flex',
  alignItems: 'center',
  padding: '5px 10px 20px'
}

export const userContainerInfo: CSS.Properties = {
  marginLeft: '15px',
  lineHeight: '20px'
}

export const avatar: CSS.Properties = {
  width: '50px',
  height: '50px',
  borderRadius: '50%'
}

export const postAuthor: CSS.Properties = {
  fontWeight: 600,
  color: '#000',
  textDecoration: 'none'
}

export const postData: CSS.Properties = {
  fontSize: '14px',
  color: '#999'
}

export const postText: CSS.Properties = {
  marginBottom: '20px',
  marginLeft: '10px',
  lineHeight: '20px'
}

export const postImage: CSS.Properties = {
  width: '100%'
}
