import { Header } from "../AverageResponseTime/styledComponent"
import { Container,PiechartContainer } from "./styledComponent"
import Piechart from '../Piechart'



const CustomerSatisfactionChart = (props) => {

    const {CustomerSatisfactionChartData} = props
    

    return(
        <Container>
            <Header>Customer Satisfaction <br/> Score (CSAT)</Header>
            <PiechartContainer>
                <Piechart data={CustomerSatisfactionChartData}/>
            </PiechartContainer>
        </Container>
    )
}

export default CustomerSatisfactionChart