import { Container, ContinueContainer, Header, HourElement, NameHeader, NameParagraph, PercentageContainer, StatusContainer } from "../AverageResponseTime/styledComponent"
import { ImageContainer } from "./styledComponent"


const CustomerSatisfactionScore = props => {

    const {CustomerSatisfactionData} = props
    const {lastMonth,currentMonth} = CustomerSatisfactionData

    const isAchieved = lastMonth < currentMonth ? true : false


    return(
        <Container>
            <Header>Customer Satisfaction Score (CSAT)</Header>
            <StatusContainer>
                <PercentageContainer>
                    <ContinueContainer>
                        <NameHeader>{lastMonth}</NameHeader>
                        <HourElement>%</HourElement>
                    </ContinueContainer>
                    <NameParagraph>Last Month</NameParagraph>
                    <ContinueContainer>
                        <NameHeader>{currentMonth}</NameHeader>
                        <HourElement>%</HourElement>
                    </ContinueContainer>
                    <NameParagraph>Current Month</NameParagraph>
                </PercentageContainer>
                <ImageContainer isAchieved={isAchieved}>
                    <ContinueContainer>
                    <NameHeader>{currentMonth}</NameHeader>
                    <HourElement>%</HourElement>
                    </ContinueContainer>
                </ImageContainer>
            </StatusContainer>
        </Container>
    )




}

export default CustomerSatisfactionScore