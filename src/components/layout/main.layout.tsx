import React from 'react'
import Navbar from '../container/navbar.container'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default MainLayout
