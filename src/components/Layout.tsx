import React from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import Banner from "./Banner"
import PageLink from "./PageLink"
import { Outlet } from "react-router"


const Layout = ({children}) =>{
    return (
        <>
        <Nav/>
        <Banner/>
        <PageLink/>
       {/* <main> {children}</main> */}
       <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout