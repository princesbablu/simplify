import React from 'react'
import Layout from '../../components/Layout'
import Navigation from '../../components/Navigation'
import Header from './Header'
import Review from './Review'
import Search from './Search'
import Tab from './Tab'

const Transaction = () => {
    return (
        <Layout>
            <Header />
            <div className="px-8">
                <Search />
                <Review />
                <Tab />
            </div>

            <Navigation />
        </Layout>
    )
}

export default Transaction