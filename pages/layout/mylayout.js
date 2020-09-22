import React from 'react'
import Footer from './footer'
import Main from './main'
import Navbar from './navbar'

export default function Layout(props) {
    return (
        <div>
           <Navbar/>  
        {props.children}
        <Main/>
   
        <Footer/>     

        </div>
    )
}
