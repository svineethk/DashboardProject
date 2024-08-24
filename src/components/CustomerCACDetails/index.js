
import { FaExclamationCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ChartContinueContainer, ChartHeader, ChartNumber, ChartTargetName, DataContainer, SeparateContainer, ChartContainer,
    ChartCustomNumber,PercentageCostContainer
 } from "../KpiOverview/styledComponent";

import CustomerCACChart from '../CustomerCACChart'


const CustomerCACDetails = props => {
    const {data} = props
    
    const {actualCAC,targetCAC,customerCACData} = data
    console.log(customerCACData)

    const customerCACInPercentage = Math.ceil((actualCAC/targetCAC)*100)

    const renderEmoji = () => {
        if(customerCACInPercentage >= 100){
            return(<IoIosCheckmarkCircle size={40} color="#5a8f6b"/>)
        }
        else if(customerCACInPercentage > 90){
            return(<FaExclamationCircle size={40} color="#e5b045"/>)
        }
        else if(customerCACInPercentage < 90){
            return(<FaCircleXmark size={40} color="#e1777e" />)
        }
    }

    return(
        <SeparateContainer>
                <DataContainer>
                    <ChartHeader>Customer Acquisition Cost</ChartHeader>
                    <ChartContinueContainer>
                        <ChartCustomNumber>{`$${actualCAC}`}</ChartCustomNumber>
                        <ChartTargetName>Actual <br/> CAC</ChartTargetName>
                    </ChartContinueContainer>
                    <ChartContinueContainer>
                        <ChartCustomNumber>{`$${targetCAC}`}</ChartCustomNumber>
                        <ChartTargetName>Target <br/> CAC</ChartTargetName>
                    </ChartContinueContainer>
                    <PercentageCostContainer>
                        {renderEmoji()}
                        <ChartNumber>{`${customerCACInPercentage}%`}</ChartNumber>
                        <ChartTargetName>Target <br/> Achievement</ChartTargetName>
                    </PercentageCostContainer>
                </DataContainer>
                <ChartContainer>
                    <ChartHeader>Q4 2023 Customer Acquisition Cost Comp. to Prev. Year</ChartHeader>
                    <CustomerCACChart data={customerCACData}/>
                </ChartContainer>
            </SeparateContainer>
    )


}

export default CustomerCACDetails