import styled from 'styled-components'

export const ImageContainer = styled.div`
height:100px;
width:140px;
margin-right:18px;
margin-top:15px;
border-radius:8px;
text-align:center;
padding:15px;
border:2px solid ${props => props.isAchieved ? '#53D149' : '#EF4437'};
background-color:${props => props.isAchieved ? '#4A8F48' : '#3E2444'};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`