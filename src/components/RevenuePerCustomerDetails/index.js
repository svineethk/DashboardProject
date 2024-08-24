
import { FaExclamationCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ChartContinueContainer, ChartHeader, ChartNumber, ChartTargetName, DataContainer, PercentageContainer, SeparateContainer, ChartContainer,
    ChartCustomNumber,PercentageRevenueContainer
 } from "../KpiOverview/styledComponent";

import RevenuePerCustomerChart from '../RevenuePerCustomerChart'


const RevenuePerCustomerDetails = props => {
    const {data} = props
    console.log(data)
    const {actualRevenuePerCustomerText,targetRevenuePerCustomerText,actualRevenuePerCustomer,targetRevenuePerCustomer,revenuePerCustomerData} = data

    const revenueCustomerInPercentage = Math.ceil((actualRevenuePerCustomer/targetRevenuePerCustomer)*100)

    const renderEmoji = () => {
        if(revenueCustomerInPercentage >= 100){
            return(<IoIosCheckmarkCircle size={40} color="#5a8f6b"/>)
        }
        else if(revenueCustomerInPercentage > 90){
            return(<FaExclamationCircle size={40} color="#e5b045"/>)
        }
        else if(revenueCustomerInPercentage < 90){
            return(<FaCircleXmark size={40} color="#e1777e" />)
        }
    }

    return(
        <SeparateContainer>
                <DataContainer>
                    <ChartHeader>Avg. Revenue Per Customer</ChartHeader>
                    <ChartContinueContainer>
                        <ChartCustomNumber>{actualRevenuePerCustomerText}</ChartCustomNumber>
                        <ChartTargetName>Actual Rev. <br/> Per Customers</ChartTargetName>
                    </ChartContinueContainer>
                    <ChartContinueContainer>
                        <ChartCustomNumber>{targetRevenuePerCustomerText}</ChartCustomNumber>
                        <ChartTargetName>Target Rev. <br/> Per Customers</ChartTargetName>
                    </ChartContinueContainer>
                    <PercentageRevenueContainer>
                        {renderEmoji()}
                        <ChartNumber>{`${revenueCustomerInPercentage}%`}</ChartNumber>
                        <ChartTargetName>Target <br/> Achievement</ChartTargetName>
                    </PercentageRevenueContainer>
                </DataContainer>
                <ChartContainer>
                    <ChartHeader>Q4 2023 Avg. Revenue per cust. Compared to Prev. Year</ChartHeader>
                    <RevenuePerCustomerChart data={revenuePerCustomerData}/>
                </ChartContainer>
            </SeparateContainer>
    )


}

export default RevenuePerCustomerDetails