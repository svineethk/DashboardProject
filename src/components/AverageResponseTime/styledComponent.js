import styled from 'styled-components'

export const Container = styled.div`
height:215px;
width:420px;
padding:8px;
padding-top:15px;
background-color:#2A2852;
font-family:sans-serif;
color:#646678;
margin-right:20px;`

export const Header = styled.h1`
font-family:sans-serif;
font-weight:bold;
color:#ffffff; 
font-size:22px;
margin:0px;
padding-left:18px;`


export const StatusContainer = styled.div`
height:160px;
width:420px;
margin:0px;
padding:0px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;`

export const PercentageContainer = styled.div`
height:160px;
width:200px;
padding-left:18px;
`

export const NameHeader = styled.h1`
font-family:sans-serif;
font-weight:bold;
color:#ffffff;
margin-right:8px; `


export const HourElement = styled.p`
font-family:sans-serif;
font-size:24px;
color:#A7A7C4;
padding:0px;
margin:0px;`

export const NameParagraph = styled.p`
font-family:sans-serif;
font-size:16px;
color:#646678;
padding:0px;
margin:0px;`

export const ContinueContainer = styled.div`
height:45px;
display:flex;
flex-direction:row;
align-items:center;
margin-top:10px;`

export const ImageContainer = styled.div`
height:120px;
width:200px;
margin-right:18px;
margin-top:15px;
border-radius:8px;
text-align:center;
padding:15px;
border:2px solid ${props => props.isAchieved ? '#53D149' : '#EF4437'};
background-color:${props => props.isAchieved ? '#4A8F48' : '#3E2444'};
`