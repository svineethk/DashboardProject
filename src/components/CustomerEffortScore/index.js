
import { Container,Header,SpeedometerContainer } from "../CustomerEffortScore/styledComponent"
import SpeedometerPiechart from '../SpeedometerPiechart'

const CustomerEffortScore = props => {
    const {CustomerEffortScore} = props

    return(
        <Container>
            <Header>Customer Effort Score (CES)</Header>
            <SpeedometerContainer>
                <SpeedometerPiechart CustomerEffortScore={CustomerEffortScore}/>
            </SpeedometerContainer>
        </Container>
    )
}

export default CustomerEffortScore