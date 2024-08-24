import {  SeparateContainer, DataContainer, ChartHeader, ChartNumber, ChartTargetName
    ,ChartContinueContainer,PercentageContainer,
    ChartContainer
 } from "../KpiOverview/styledComponent"
 
 import RevenueBarChart from '../RevenueBarchart'

 import { FaExclamationCircle } from "react-icons/fa";
 import { FaCircleXmark } from "react-icons/fa6";
 import { IoIosCheckmarkCircle } from "react-icons/io";



const RevenueDetails = props => {
    const {data} = props
    const {actualRevenueText,targetRevenueText,actualRevenue,totalRevenue,revenueData} = data

    const revenueInPercentage = Math.ceil((actualRevenue/totalRevenue) * 100)
    

    const renderEmoji = () => {
        if(revenueInPercentage >= 100){
            return(<IoIosCheckmarkCircle size={40} color="#5a8f6b"/>)
        }
        else if(revenueInPercentage > 90){
            return(<FaExclamationCircle size={40} color="#e5b045"/>)
        }
        else if(revenueInPercentage < 90){
            return(<FaCircleXmark size={40} color="#e1777e" />)
        }
    }

    return(
        <SeparateContainer>
                    <DataContainer>
                        <ChartHeader>Revenue Actual VS Target</ChartHeader>
                        <ChartContinueContainer>
                            <ChartNumber>{actualRevenueText}</ChartNumber>
                            <ChartTargetName>Actual <br/> Revenue</ChartTargetName>
                        </ChartContinueContainer>
                        <ChartContinueContainer>
                            <ChartNumber>{targetRevenueText}</ChartNumber>
                            <ChartTargetName>Target <br/> Revenue</ChartTargetName>
                        </ChartContinueContainer>
                        <ChartContinueContainer>
                        <PercentageContainer>
                            {renderEmoji()}
                            <ChartNumber>{`${revenueInPercentage}%`}</ChartNumber>
                            <ChartTargetName>Target <br/> Achievement</ChartTargetName>
                        </PercentageContainer>
                        </ChartContinueContainer>
                    </DataContainer>
                    <ChartContainer>
                        <ChartHeader>Q4 2023 Revenue compared to previous year</ChartHeader>
                        <RevenueBarChart data={revenueData}/>
                    </ChartContainer>
                </SeparateContainer>
    )

}

export default RevenueDetails