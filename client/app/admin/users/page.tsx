'use client'
import DashboardHero from '../../components/Admin/DashboardHero'
import Heading from '../../utils/Heading'
import AdminProtected from '../../hooks/adminProtected'
import React from 'react'
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar'
import AllUsers from '../../components/Admin/Users/AllUsers'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title='TuToria - Admin'
          description='TuToria is a platform for students to learn and get help from teachers'
          keywords='Programming,MERN,Redux,Machine Learning'
        />
        <div className='flex h-screen'>
          <div className='1500px:w-[16%] w-1/5'>
            <AdminSidebar />
          </div>
          <div className='w-[85%]'>
            <DashboardHero />
            <AllUsers />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page
