import React from 'react'
import Layout from '../../../components/Layout'
import Navigation from '../../../components/Navigation'
import Header from './Header';

import { ReactComponent as IconEthDark } from '../../../assets/img/icon-eth-dark.svg';
import { ReactComponent as IconSwap } from '../../../assets/img/icon-arrow-swap.svg';
import { ReactComponent as IconSend } from '../../../assets/img/icon-arrow-send.svg';
import List from './List';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <Layout>
            <Header />
            <div className="px-8">
                <div className="flex gap-3 flex-col items-center">
                    <div className="h-16 w-16 flex items-center justify-center bg-white rounded-full">
                        <IconEthDark />
                    </div>
                    <div className="text-[28px] font-bold">$15,020.292 ETH</div>
                    <div>= 10000 E</div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6 mb-8">
                    <Link to="/wallet/send" className="flex items-center gap-2 cursor-pointer p-3.5 rounded-md bg-[#171717] hover:bg-[#222]">
                        <IconSend />
                        <span>Send</span>
                    </Link>
                    <Link to="/wallet/swap" className="flex items-center gap-2 cursor-pointer p-3.5 rounded-md bg-[#171717] hover:bg-[#222]">
                        <IconSwap />
                        <span>Swap</span>
                    </Link>
                </div>

                <List />
            </div>

            <Navigation />
        </Layout>
    )
}

export default Details