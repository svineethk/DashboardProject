    import { useNavigate } from 'react-router-dom';
    import Cookies from 'js-cookie'
    import AverageResponseTime from '../AverageResponseTime'
    import CustomerSatisfactionScore from '../CustomerSatisfactionScore'
    import CustomerSatisfactionChart from '../CustomerSatisfactionChart'
    import CustomerEffortScore from '../CustomerEffortScore'
    import NetPromoterScore from '../NetPromoterScore'
    import Barchart from '../Barchart'
    import AverageResponseTimeChart from '../AverageResponseTimeChart'
    import CSATChart from '../CSATChart'
    import { BoardContainer, ChartHeader, ChartsContainer, DashboardContainer, EmojiContainer, Header, HeaderContainer, InformationContainer, LogoutButton, NameHeader, NameParagraph, PerformanceContainer, ProductNameContainer, ScoreContainer, SeparateChartContainer, SeparateContainer } from "./styledComponent"
    import { FaRegFaceSmileBeam } from "react-icons/fa6";
    import { BsEmojiNeutral } from "react-icons/bs";
    import { PiSmileySadThin } from "react-icons/pi";
    import { ContinueContainer} from '../AverageResponseTime/styledComponent';
    import {DataHeader,DataParagraph} from '../Dashboard/styledComponent'


    const dashboardData = {
        averageResponseTime : {
            "lastMonth" : 11.24,
            "currentMonth" : 8.11
        },
        CustomerSatisfactionData : {
            "lastMonth" : 73,
            "currentMonth" : 65
        },
        CustomerSatisfactionChartData : [
            { name: 'Group A', value: 75 },
            { name: 'Group B', value: 24 },
          ],
        CustomerEffortScore : [
            { name: 'A', value: 75, color: '#52CCEE' },
            { name: 'B', value: 25, color: '#7A7A88' },
          ],
          NetPromoterScore : [
            { name: 'A', value: 59, color: '#52CCEE' },
            { name: 'B', value: 41, color: '#7A7A88' },
          ],
          OverallStatus : {
            "promoters" : 67.76,
            "passives" : 20.43,
            "detractors" : 11.81
          }
    }

    const Dashboard = (props) => {
        const navigate = useNavigate();

        const onClickLogout = () => {
            Cookies.remove('jwtToken')
            navigate('/login')

        }


        return (
            <DashboardContainer>
            <HeaderContainer>
                <Header>Support Team Slide Dashboard</Header>
                <LogoutButton type="button" onClick={onClickLogout}>Logout</LogoutButton>
            </HeaderContainer>
            <PerformanceContainer>
                <ScoreContainer>
                    <ProductNameContainer>
                    <NameHeader>PRODUCT <br/> NAME</NameHeader>
                    <NameParagraph>Product 01</NameParagraph>
                    </ProductNameContainer>
                    <AverageResponseTime averageResponseTimeData = {dashboardData.averageResponseTime}/>
                    <CustomerSatisfactionScore CustomerSatisfactionData={dashboardData.CustomerSatisfactionData} />
                    <CustomerSatisfactionChart  CustomerSatisfactionChartData = {dashboardData.CustomerSatisfactionChartData}/>
                    <CustomerEffortScore CustomerEffortScore={dashboardData.CustomerEffortScore}/>
                    <NetPromoterScore  NetPromoterScore={dashboardData.NetPromoterScore}/>
                </ScoreContainer>
                <BoardContainer>
                    <SeparateContainer>
                        <EmojiContainer>
                            <FaRegFaceSmileBeam style={{ backgroundColor: '#4ED248',borderRadius:'50px'}} size={100} color="#167518" />
                        </EmojiContainer>
                        <InformationContainer>
                            <ContinueContainer>
                                <DataHeader>{dashboardData.OverallStatus.promoters}</DataHeader>
                                <DataParagraph> %</DataParagraph>
                            </ContinueContainer>
                            <DataParagraph>Promoters</DataParagraph>
                        </InformationContainer>
                    </SeparateContainer>
                    <hr style={{color:'#6A6B8D', width:'95%'}}/>
                    <SeparateContainer>
                        <EmojiContainer>
                            <BsEmojiNeutral style={{ backgroundColor: '#EAE92E',borderRadius:'50px'}} size={100} color="#847E18" />
                        </EmojiContainer>
                        <InformationContainer>
                            <ContinueContainer>
                                <DataHeader>{dashboardData.OverallStatus.passives}</DataHeader>
                                <DataParagraph> %</DataParagraph>
                            </ContinueContainer>
                            <DataParagraph>Passives</DataParagraph>
                        </InformationContainer>
                    </SeparateContainer>
                    <hr style={{color:'#6A6B8D', width:'95%'}}/>
                    <SeparateContainer>
                        <EmojiContainer>
                        <PiSmileySadThin style={{ backgroundColor: '#EF4330',borderRadius:'120px'}} size={100} color="#9C2627"/>
                        </EmojiContainer>
                        <InformationContainer>
                            <ContinueContainer>
                                <DataHeader>{dashboardData.OverallStatus.detractors}</DataHeader>
                                <DataParagraph> %</DataParagraph>
                            </ContinueContainer>
                            <DataParagraph>Detractors</DataParagraph>
                        </InformationContainer>
                    </SeparateContainer>
                </BoardContainer>
            </PerformanceContainer>
            <ChartsContainer>
                <SeparateChartContainer>
                    <ChartHeader>Customer Satisfaction Breakdown with Percentage</ChartHeader>
                    <Barchart/>
                </SeparateChartContainer>
                <SeparateChartContainer>
                    <ChartHeader>Average Response Time Over Month</ChartHeader>
                    <AverageResponseTimeChart/>
                </SeparateChartContainer>
                <SeparateChartContainer>
                    <ChartHeader>Customer Satisfaction Score (CSAT) Over Month</ChartHeader>
                    <CSATChart/>
                </SeparateChartContainer>
            </ChartsContainer>
        </DashboardContainer>
        )
    }
    
export default Dashboard