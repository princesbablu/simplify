import React from 'react'
import Layout from '../../components/Layout'
import Navigation from '../../components/Navigation'
import Header from './Header'
import Tab from './Tab'

const Profile = () => {
    return (
        <Layout>
            <Header />
            <div className="px-6">
                <Tab />
            </div>

            <Navigation />
        </Layout>
    )
}

export default Profile