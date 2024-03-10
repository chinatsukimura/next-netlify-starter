import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Top from '@components/Top'
import Service from '@components/Service'
import UsersVoice from '@components/UsersVoice'
import SideMenu from '@components/SideMenu'
import React, { useState } from 'react';
import {LinkCrewH3 } from "common"
import Add_button from '@components/Add_button'

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  return (
    <div>
      <Head>
        <title>LiNKCREW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleDrawer={toggleDrawer} />

      <SideMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />

      <main className='mx-auto w-4/5'>
        <div className='flex flex-col gap-y-40'>
          <Top />
          <Service />
          <UsersVoice />
          <Add_button />
        </div>
      </main>

      <Footer />
    </div>
  )
}
