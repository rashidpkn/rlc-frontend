import { Analytics, BarChart, Comment, Edit, FavoriteBorderOutlined, Home, Leaderboard, PersonOff, Settings } from '@mui/icons-material'
import React from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/Main'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Analatics from './components/Analatics'
import Blacklisted from './components/Blacklisted'
import BuyFirstPage from './components/BuyFirstPage'
import Comments from './components/Comments'
import Earn from './components/Earn'
import HomeMenu from './components/HomeMenu'
import Manage from './components/Manage'
import SettingsMenu from './components/SettingsMenu'
import Verify from './components/Verify'


function UserDashboard() {
  const { menu } = useParams()

  return (
    <>
      <Verify />
      <div className='flex h-screen'>
        <Sidebar >
          <div className="space-y-5">
            <Menu icon={<Home fontSize='medium' />} url='home' title={'Home'} />
            <Menu icon={<Edit fontSize='medium' />} url='my-adverts' title={'Manage My Advets'} />
            <Menu icon={<Leaderboard fontSize='medium' />} url='buy-first-page' title={'Buy First Page Position'} />
            <Menu icon={<Analytics fontSize='medium' />} url='analatics' title={'Ads Analatics'} />
            <Menu icon={<BarChart fontSize='medium' />} url='free-credit' title={'Earn Free Credit'} />
            <Menu icon={<Comment fontSize='medium' />} url='comments' title={'Comments'} />
            <Menu icon={<Settings fontSize='medium' />} url='settings' title={'Settings'} />
            <Menu icon={<PersonOff fontSize='medium' />} url='blacklisted' title={'Blacklisted Clients'} />
          </div>
          <div className="blue w-[90%] h-40 border mx-auto rounded-2xl bg-[#44D7FD] mt-5 hidden lg:flex flex-col text-white text-xl p-5">
            <p>Increase Your Revenue, <br /> With Red Light Club!</p>
          </div>
          <span className="text-[#A5A5A5] py-3 text-center w-full hidden lg:flex justify-center space-x-1">Made with <FavoriteBorderOutlined /> by Red Light Club</span>
        </Sidebar>

        <div className="h-screen w-[calc(100%-5rem)] lg:w-[80%]">
          <Navbar />
          <Main >
            {(menu === undefined || menu === 'home') && <HomeMenu />}
            {menu === 'my-adverts' && <Manage />}
            {menu === 'buy-first-page' && <BuyFirstPage />}
            {menu === 'analatics' && <Analatics />}
            {menu === 'free-credit' && <Earn />}
            {menu === 'comments' && <Comments />}
            {menu === 'settings' && <SettingsMenu />}
            {menu === 'blacklisted' && <Blacklisted />}
          </Main>
        </div>
      </div>
    </>
  )
}

export default UserDashboard


