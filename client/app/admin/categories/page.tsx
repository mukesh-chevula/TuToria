'use client'
import React from 'react'
import AdminSidebar from '../../components/Admin/sidebar/AdminSidebar'
import EditCategories from '../../components/Admin/Customization/EditCategories'
import AdminProtected from '../../hooks/adminProtected'
import DashboardHero from '../../components/Admin/DashboardHero'
import Heading from '../../utils/Heading'

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
            <EditCategories />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page
