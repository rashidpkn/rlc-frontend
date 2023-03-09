import { Analytics, BarChart, BugReport, Edit, FavoriteBorderOutlined, Pages, Payments, Pending, PersonOff, Rocket, SignalCellularAlt, SupportAgent } from '@mui/icons-material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/Main'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import EditAds from '../user/components/EditAds'
import Auction from './components/Auction'
import Banner from './components/Banner'
import BidPayments from './components/BidPayments'
import Blacklisted from './components/Blacklisted'
import Customers from './components/Customers'
import Manage from './components/Manage'
import PaymentForAdverts from './components/PaymentForAdverts'
import PaymentsHistory from './components/PaymentsHistory'
import ProfileAnalytics from './components/ProfileAnalytics'
import Reports from './components/Reports'
import SiteAnalytics from './components/SiteAnalytics'
import Support from './components/Support'
import Verification from './components/Verification'


function AdminDashboard() {
  const { menu } = useParams()
  return (
    <div className='flex h-screen'>
      <Sidebar >
        <div className="space-y-10">
          <Menu icon={<Edit />} title={'Manage Advets'} url='manage' />
          <Menu icon={<Pending />} title={'Auction In Progress'} url='auction' />
          <Menu icon={<Payments />} title={'Payments For Advets'} url='payment-for-advets' />
          <Menu icon={<Rocket />} title={'Bid Payments'} url='bid-payment' />
          <Menu icon={<BarChart />} title={'Payments History'} url='payment-history' />
          <Menu icon={<Analytics />} title={'Site Analytics'} url='site-analytics' />
          <Menu icon={<SignalCellularAlt />} title={'Profile Analytics'} url='profile-analytics' />
          <Menu icon={<Pages />} title={'Banner'} url='banner' />
          <Menu icon={<PersonOff />} title={'Blacklisted Clients'} url='blacklisted' />
          <Menu icon={<SupportAgent />} title={'Supports'} url='Support' />
          <Menu icon={<BugReport />} title={'Reported Issues'} url='Reports-issues' />
        </div>
        <div className="blue w-[90%] h-40 border mx-auto rounded-2xl bg-[#44D7FD] mt-5 hidden lg:flex flex-col text-white text-xl p-5">
          <p>Finding a customer takes a while, <br /> But needs seconds to lose one!</p>
        </div>
        <span className="text-[#A5A5A5] py-3 text-center w-full hidden lg:flex justify-center space-x-1">Made with <FavoriteBorderOutlined /> by Red Light Club</span>
      </Sidebar>
      <div className="h-screen w-[calc(100%-5rem)] lg:w-[80%]">
        <Navbar />
        <Main >
          {(menu === 'manage' || menu === undefined) && <Manage />}
          {menu === 'auction' && <Auction />}
          {menu === 'payment-for-advets' && <PaymentForAdverts />}
          {menu === 'bid-payment' && <BidPayments />}
          {menu === 'payment-history' && <PaymentsHistory />}
          {menu === 'site-analytics' && <SiteAnalytics />}
          {menu === 'profile-analytics' && <ProfileAnalytics />}
          {menu === 'banner' && <Banner />}
          {menu === 'blacklisted' && <Blacklisted />}
          {menu === 'Support' && <Support />}
          {menu === 'Reports-issues' && <Reports />}
          {menu === 'customers' && <Customers />}
          {menu === 'verification' && <Verification />}
          {menu === 'edit' && <EditAds/>}
        </Main>
      </div>
    </div>
  )
}

export default AdminDashboard