import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import Header from './Header';
import { ReactComponent as IconShield } from '../../assets/img/icon-shield.svg';
import { ReactComponent as IconQMark } from '../../assets/img/icon-q-mark.svg';

import { ReactComponent as StarCheck } from '../../assets/img/star-check.svg';
import imgMCS from '../../assets/img/mcs.png';

import Button from '../../components/Button';

const Import = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    return (
        <Layout>
            <Header />
            <div className="px-8">
                <div className="text-xl flex gap-1 items-center">
                    <div>Enter recovery phrase</div>
                    <div className="cursor-pointer relative group">
                        <IconQMark />
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full text-xs px-1.5 py-1 mb-1 rounded-md bg-black group-hover:opacity-100 opacity-0">
                            Tooltip
                            <span className="absolute left-1/2 top-full h-1 w-1 bg-inherit rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                        </div>
                    </div>
                </div>
                <div className="text-xl flex gap-1 items-center">
                    <div>or private key</div>
                    <div className="cursor-pointer relative group">
                        <IconQMark />
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full text-xs px-1.5 py-1 mb-1 rounded-md bg-black group-hover:opacity-100 opacity-0">
                            Tooltip
                            <span className="absolute left-1/2 top-full h-1 w-1 bg-inherit rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-5">
                    <textarea className="h-14 w-8/12 resize-none text-sm overflow-hidden bg-transparent focus:outline-0 placeholder:text-white/30" placeholder="Use spaces between words if using a recovery phrase"></textarea>
                </div>

                <span className="font-medium text-[#A567FA] cursor-pointer">Past from clipboard</span>

                <div className="mt-16">
                    <Button type="primary" onClick={() => { setDraw(true); setDrawSet("create"); }}>Import</Button>
                    <div className="text-white/30 flex items-center gap-1 mt-3.5 justify-center">
                        <IconShield /> <span className="text-[10px]">Simplify password security audits</span>
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

export default Import;