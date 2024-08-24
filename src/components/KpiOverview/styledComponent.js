import styled from 'styled-components'

export const AppContainer  = styled.div`
height:100vh;
width:100vw;
padding-left:30px;
padding-right:30px;
padding-top:10px;
padding-right:10px;
background-color:#ffffff;`

export const Header = styled.h1`
font-family:Arial;
padding:0px;
margin:0px;
margin-left:60px;
margin-bottom:10px;
`

export const DetailsContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding-left:40px;`

export const SeparateContainer = styled.div`
height:330px;
width:800px;
margin-left:20px;
margin-right:70px;
margin-bottom:10px;
background-color:#f8f8f8;
display:flex;
flex-direction:row;
align-items:center;
`

export const DataContainer = styled.div`
height:270px;
width:350px;`

export const ChartHeader = styled.p`
font-family:Arial;
font-weight:600;
margin-bottom:20px;
`
export const ChartNumber  = styled.h1`
font-family:Arial;
font-weight:400;
color:#747474;
margin-left:25px;
margin-right:25px;
`
export const ChartTargetName = styled.p`
font-family:Arial;
color:#9d9d9d;
font-weight:500;
`
export const ChartContinueContainer = styled.div`
display:flex;
flex-direction:row;
margin-bottom:5px;`

export const PercentageContainer = styled.div`
height:40px;
width:300px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;`

export const ChartContainer = styled.div`
height:270px;
width:450px;
`

export const ChartCustomNumber =styled.h1`
font-family:Arial;
font-weight:400;
color:#747474;
margin-left:90px;
margin-right:60px;
`
export const PercentageRevenueContainer = styled.div`
height:40px;
width:340px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`

export const PercentageCostContainer = styled.div`
height:40px;
width:300px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
margin-left:10px;`

export const OverallContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-left:55px;
margin-top:15px;`

export const TotalSeparateContainer = styled.div`
height:160px;
width:350px;
margin-right:95px;
background-color:#f8f8f8;
text-align:center;`

export const TopContainer = styled.div`
height:35px;
width:350px;
background-color:${props => props.color};
margin:0px;
padding:0px;`

export const TopContainerHeader = styled.p`
font-family:Arial;
margin:0px;
padding:0px;
padding-top:5px;
font-size:23px;
color:#ffffff`

export const TotalDataContainer = styled.div`
padding-top:20px;
height:120px;
width:350px;`

export const TotalDatas = styled.h1`
font-family:Arial;
font-weight:600;`

export const HeaderContainer = styled.div`
height:20px;
width:96vw;
display:flex;
margin-top:15px;
margin-bottom:15px;
flex-direction:row;
justify-content:space-between;
align-items:center;`

export const LogoutButton = styled.button`
height:40px;
width:90px;
background-color:#f73531;
color:#ffffff;
border-radius:6px;
outline:none;
border-color:#c9818d;
`