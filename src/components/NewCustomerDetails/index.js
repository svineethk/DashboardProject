
import { FaExclamationCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ChartContinueContainer, ChartHeader, ChartNumber, ChartTargetName, DataContainer, PercentageContainer, SeparateContainer, ChartContainer,
    ChartCustomNumber
 } from "../KpiOverview/styledComponent";

import NewCustomerChart from '../NewCustomerChart'


const NewCustomerDetails = props => {
    const {data} = props
    const {actualCustomer,targetCustomer,customerData} = data

    const customerInPercentage = Math.ceil((actualCustomer/targetCustomer)*100)

    const renderEmoji = () => {
        if(customerInPercentage >= 100){
            return(<IoIosCheckmarkCircle size={40} color="#5a8f6b"/>)
        }
        else if(customerInPercentage > 90){
            return(<FaExclamationCircle size={40} color="#e5b045"/>)
        }
        else if(customerInPercentage < 90){
            return(<FaCircleXmark size={40} color="#e1777e" />)
        }
    }

    return(
        <SeparateContainer>
                <DataContainer>
                    <ChartHeader>New Customers Actual VS Target</ChartHeader>
                    <ChartContinueContainer>
                        <ChartCustomNumber>{actualCustomer}</ChartCustomNumber>
                        <ChartTargetName>Actual <br/> New Customers</ChartTargetName>
                    </ChartContinueContainer>
                    <ChartContinueContainer>
                        <ChartCustomNumber>{targetCustomer}</ChartCustomNumber>
                        <ChartTargetName>Target <br/> New Customers</ChartTargetName>
                    </ChartContinueContainer>
                    <PercentageContainer>
                        {renderEmoji()}
                        <ChartNumber>{`${customerInPercentage}%`}</ChartNumber>
                        <ChartTargetName>Target <br/> Achievement</ChartTargetName>
                    </PercentageContainer>
                </DataContainer>
                <ChartContainer>
                    <ChartHeader>Q4 2023 New Customers Compared to Previous Year</ChartHeader>
                    <NewCustomerChart data={customerData}/>
                </ChartContainer>
            </SeparateContainer>
    )


}

export default NewCustomerDetails