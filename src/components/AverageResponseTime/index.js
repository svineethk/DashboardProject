import { Container, ContinueContainer, Header, NameHeader, NameParagraph, PercentageContainer, StatusContainer
    ,HourElement,ImageContainer
 } from "./styledComponent"
 import { BiSolidUpArrow,BiSolidDownArrow  } from "react-icons/bi";

const AverageResponseTime = (props) => {

    const {averageResponseTimeData} = props
    const {lastMonth,currentMonth}  = averageResponseTimeData

    const lastMonthTime = String(lastMonth).split(".")
    const currentMonthTime = String(currentMonth).split(".")

    
    const betweenTime = Math.round((currentMonth - lastMonth) * 100) / 100
    const inBetweenTime = String(betweenTime).split(".")
    const isAchieved = betweenTime > 0 ? true : false
    
    

    return (
        <Container>
            <Header>Average Response Time</Header>
            <StatusContainer>
                <PercentageContainer>
                    <ContinueContainer>
                    <NameHeader>{`${lastMonthTime[0]}:${lastMonthTime[1]}`}</NameHeader>
                    <HourElement>hr</HourElement>
                    </ContinueContainer>
                    <NameParagraph>Last Month</NameParagraph>
                    <ContinueContainer>
                        <NameHeader>{`${currentMonthTime[0]}:${currentMonthTime[1]}`}</NameHeader>
                        <HourElement>hr</HourElement>
                    </ContinueContainer>
                    <NameParagraph>Current Month</NameParagraph>
                </PercentageContainer>
                <ImageContainer isAchieved={isAchieved}>
                {isAchieved ? (<BiSolidUpArrow size={45} color="#53D149"/>) : (<BiSolidDownArrow size={45} color="#EF4437"/>)}
                <NameHeader>{`${inBetweenTime[0]}:${inBetweenTime[1]}`}</NameHeader>
                </ImageContainer>
            </StatusContainer>
        </Container>
    )

}

export default AverageResponseTime