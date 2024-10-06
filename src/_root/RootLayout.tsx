
import BottomBar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import TopBar from '@/components/shared/TopBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const RootLayout = (props: Props) => {
  return (
    <div className='w-full md:flex'>
      <TopBar />
      <LeftSidebar />

      <section className='flex flex-1 h-full'>
        <Outlet />
      </section>

      <BottomBar />
    </div>
  )
}

export default RootLayout