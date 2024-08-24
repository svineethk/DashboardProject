import { AppContainer,DetailsContainer,Header, OverallContainer, TopContainer, TopContainerHeader, TotalDatas, TotalDataContainer, TotalSeparateContainer,HeaderContainer,LogoutButton} from "./styledComponent"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

 import NewCustomerDetails from '../NewCustomerDetails'
 import RevenueDetails from '../RevenueDetails'
 import RevenuePerCustomerDetails from '../RevenuePerCustomerDetails'
 import CustomerCACDetails from '../CustomerCACDetails'


 const kpiData = {
    revenue: {
      actualRevenueText: '$2,180,000',
      targetRevenueText: '$2,325,000',
      actualRevenue: 2180000,
      totalRevenue: 2325000,
      revenueData: [
        {
          name: 'October',
          currentYear: 700000,
          previousYear: 820000,
        },
        {
          name: 'November',
          currentYear: 730000,
          previousYear: 780000,
        },
        {
          name: 'December',
          currentYear: 800000,
          previousYear: 750000,
        },
      ],
    },
    newCustomers: {
      actualCustomer: 309,
      targetCustomer: 300,
      customerData: [
        {
          name: 'October',
          currentYear: 110,
          previousYear: 96,
        },
        {
          name: 'November',
          currentYear: 82,
          previousYear: 95,
        },
        {
          name: 'December',
          previousYear: 118,
          currentYear: 100,
        },
      ],
    },
    revenuePerCustomer: {
      actualRevenuePerCustomerText: '$1,987',
      targetRevenuePerCustomerText: '$2,500',
      actualRevenuePerCustomer: 1987,
      targetRevenuePerCustomer: 2500,
      revenuePerCustomerData: [
        {
          name: 'October',
          currentYear: 1900,
          previousYear: 2300,
        },
        {
          name: 'November',
          currentYear: 1700,
          previousYear: 2500,
        },
        {
          name: 'December',
          currentYear: 1500,
          previousYear: 2800,
        },
      ],
    },
    customerCAC: {
      actualCAC: 372,
      targetCAC: 333,
      customerCACData: [
        {
          name: 'October',
          currentYear: 300,
          previousYear: 380,
        },
        {
          name: 'November',
          currentYear: 450,
          previousYear: 400,
        },
        {
          name: 'December',
          currentYear: 200,
          previousYear: 350,
        },
      ],
    },
    totalRevenue: '$9,255,000.00',
    totalCustomer: '3,799',
    newCustomer: '1,288',
    revenuePerCustomers: '$2,436.17',
}



const KpiOverview = () => {

    const navigate = useNavigate();

    const onClickLogout = () => {
        Cookies.remove('jwtToken')
        navigate('/login')
    }

    

    return(
        <AppContainer>
            <HeaderContainer>
                <Header>KPI Overview &emsp;   Q4 2023</Header>
                <LogoutButton type="button" onClick={onClickLogout}>Logout</LogoutButton>
            </HeaderContainer>
            <DetailsContainer>
                <RevenueDetails data={kpiData.revenue}/>
                <NewCustomerDetails data={kpiData.newCustomers}/>
                <RevenuePerCustomerDetails data={kpiData.revenuePerCustomer}/>
                <CustomerCACDetails data={kpiData.customerCAC}/>
            </DetailsContainer>
            <OverallContainer>
                <TotalSeparateContainer>
                    <TopContainer color="#a1627d">
                        <TopContainerHeader>TOTAL REVENUE PER YEAR</TopContainerHeader>
                    </TopContainer>
                    <TotalDataContainer>
                        <TotalDatas>{kpiData.totalRevenue}</TotalDatas>
                    </TotalDataContainer>
                </TotalSeparateContainer>
                <TotalSeparateContainer>
                    <TopContainer color="#3ca7b3">
                        <TopContainerHeader>TOTAL CUSTOMER PER YEAR</TopContainerHeader>
                    </TopContainer>
                    <TotalDataContainer>
                        <TotalDatas>{kpiData.totalCustomer}</TotalDatas>
                    </TotalDataContainer>
                </TotalSeparateContainer>
                <TotalSeparateContainer>
                    <TopContainer color="#f79d51">
                        <TopContainerHeader>NEW CUSTOMER PER YEAR</TopContainerHeader>
                    </TopContainer>
                    <TotalDataContainer>
                        <TotalDatas>{kpiData.newCustomer}</TotalDatas>
                    </TotalDataContainer>
                </TotalSeparateContainer>
                <TotalSeparateContainer>
                    <TopContainer color="#dc6d71">
                        <TopContainerHeader>REVENUE PER CUSTOMER</TopContainerHeader>
                    </TopContainer>
                    <TotalDataContainer>
                        <TotalDatas>{kpiData.revenuePerCustomers}</TotalDatas>
                    </TotalDataContainer>
                </TotalSeparateContainer>
            </OverallContainer>

        </AppContainer>
    )

}

export default KpiOverview