
import { Container,Header, SpeedometerContainer } from "../CustomerEffortScore/styledComponent"
import NetSpeedometerPieChart from '../NetSpeedometerPieChart'


const NetPromoterScore = props => {
    const {NetPromoterScore} = props

    return(
        <Container>
            <Header>Net Promoter Score (NPS)</Header>
            <SpeedometerContainer>
                <NetSpeedometerPieChart NetPromoterScore={NetPromoterScore}/>
            </SpeedometerContainer>
        </Container>
    )

}
export default NetPromoterScore