import React from 'react'
import {Footer} from '../helper/footer'
import {Header} from '../helper/header'
export const Base = ({children}) => {
    return (
        <section>
            <Header />
              {children}
            <Footer/>
        </section>
    );
}