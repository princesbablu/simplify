import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Header from './Header';
import { ReactComponent as IconChevRight } from '../../assets/img/icon-chevron-right.svg';

import { ReactComponent as StarCheck } from '../../assets/img/star-check.svg';
import imgMCS from '../../assets/img/mcs.png';

const xlist = ['forum', 'Coast', 'Squirrel', 'Man', 'Maseum', 'Stick', 'Derive', 'Satisfy', 'Capital', 'Laundry', 'Cargo', 'Mandate'];

const Create = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    return (
        <Layout>
            <Header />
            <div className="px-8">
                <div className="text-center text-[#D8DBD5] mb-5 mt-3.5">Write in this exact order</div>
                <div className="flex flex-wrap gap-4 mb-20">
                    {
                        xlist.map((el, i) => {
                            return (
                                <div className="px-1 py-1.5 rounded-lg flex items-center gap-2 bg-[#292B2E] w-[calc(33.33%-11px)] cursor-pointer" key={i}>
                                    <div className="h-6 w-6 flex items-center justify-center bg-[#34373D] rounded text-xs"> {i + 1} </div>
                                    <div className="text-sm">{el}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <div className="p-3 rounded-lg flex items-center justify-center gap-2 bg-[#292B2E] cursor-pointer text-sm text-center">Copy to clipboard</div>
                    </div>
                    <div className="w-1/2">
                        <div className="p-3 rounded-lg flex items-center justify-center gap-2 bg-primary cursor-pointer text-sm text-center" onClick={() => { setDraw(true); setDrawSet("create"); }}>Confirm <IconChevRight width="6" /> </div>
                    </div>
                </div>

                <div className={`fixed top-0 left-1/2 -translate-x-1/2 h-full w-full bg-[#2B2B2F]/80 max-w-[428px] transition-all duration-500 ${draw ? '' : 'opacity-0 invisible'}`} onClick={() => { setDraw(false); setDrawSet("") }}></div>
                <div className={`fixed bottom-0 w-full max-h-screen left-1/2 -translate-x-1/2 max-w-[428px] bg-[#181818] rounded-t-[32px] px-6 z-40 transition-all duration-500 ${draw ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className={`${drawSet === "create" ? '' : 'opacity-0 hidden'}`}>
                        <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                            <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                        </div>
                        <div className="pb-40 pt-14 pl-5 pr-4 rounded-t-[30px] bg-gradient-to-b from-primary/[50%]">
                            <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-[#191919] min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto pr-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                <div className="text-center flex flex-col items-center gap-4">
                                    <div className="font-medium text-[22px]">Wow! Your Simplify <br /> Wallet is Ready</div>
                                    <StarCheck />
                                    <div className="font-medium text-[22px]">Congratulations!</div>
                                    <p className="text-sm text-[#777D8E]">Now you are owner of the wallet</p>
                                    <div className="flex gap-3 items-center bg-gradient-to-r from-primary/30 p-2.5 rounded-xl min-w-[290px]">
                                        <img src={imgMCS} alt="" />
                                        <span>Oxfc9026....63fb39</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Navigation />

        </Layout>
    )
}

export default Create