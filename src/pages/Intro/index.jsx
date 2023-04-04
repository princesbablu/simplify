import React, { useState } from 'react'
import Layout from '../../components/Layout';

import introBg from '../../assets/img/intro-bg.png';
import logoWhite from '../../assets/img/logo-white.png';
import Button from '../../components/Button';

import iconRocket from '../../assets/img/icon-rocket.png';
import { Link } from 'react-router-dom';

import iconTrust from '../../assets/img/connect-trust.png';
import iconMetamask from '../../assets/img/connect-metamask.png';
import iconLNX from '../../assets/img/connect-lnx.png';
import iconPhantom from '../../assets/img/connect-phantom.png';
import iconExodus from '../../assets/img/connect-exodus.png';

import { ReactComponent as IconChevRight } from '../../assets/img/icon-chevron-right.svg';

import { ReactComponent as StarCheck } from '../../assets/img/star-check.svg';
import imgMCS from '../../assets/img/mcs.png';

const Intro = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    return (
        <Layout>
            {/* LAYERS */}
            <div className="absolute top-0 left-0 h-full w-full bg-white overflow-hidden -z-10">
                <img src={introBg} alt="" className="h-full" />
            </div>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#7121EC] to-[#E773F3] opacity-90 -z-10"></div>

            {/* CONTENT */}
            <div className="flex flex-col items-center justify-center min-h-screen -mb-24">
                <div className="pb-32 flex items-center justify-center">
                    <img src={logoWhite} alt="" />
                </div>
                <div className="text-[28px] font-bold text-center px-[54px] mb-4">
                    Simplify, the all-in-one platform to manage your value
                </div>
                <p className="px-[54px] text-center mb-12">
                    Welcome to your wallet! Our secure and user-friendly platform allows you to easily manage and store your digital assets.
                </p>
                <div className="w-full px-[54px]">
                    <div onClick={() => { setDraw(true); setDrawSet("create"); }}>
                        <Button>Let's Start</Button>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 left-1/2 -translate-x-1/2 h-full w-full bg-[#2B2B2F]/80 max-w-[428px] transition-all duration-500 ${draw ? '' : 'opacity-0 invisible'}`} onClick={() => { setDraw(false); setDrawSet("") }}></div>
            <div className={`fixed bottom-0 w-full max-h-screen left-1/2 -translate-x-1/2 max-w-[428px] bg-[#181818] rounded-t-[32px] px-6 z-40 transition-all duration-500 ${draw ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className={`${drawSet === "create" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="pb-6 pt-14 pl-5 pr-4 rounded-t-[30px] bg-gradient-to-b from-primary/[50%]">
                        <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-[#191919] min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto pr-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                            <div className="flex flex-col items-center gap-1">
                                <img src={iconRocket} alt="" />
                                <div className="text-[34px] font-medium text-center mb-4">
                                    Introducing <br /> Simplify Wallet
                                </div>
                                <div className="rounded-[15px] border border-primary p-5 w-full flex flex-col items-center gap-4 mb-10">
                                    <span>
                                        Sign transactions in-app
                                    </span>
                                    <span>
                                        Mange your multichain protfolio
                                    </span>
                                    <span>
                                        Import multiple wallets
                                    </span>
                                </div>
                                <div className="flex flex-col gap-4 w-full text-center">
                                    {/* <Button>Create New Wallet</Button> */}
                                    <Link to="/create" className="text-[#D8DBD5] bg-primary focus:outline-none hover:bg-[#6d23d6] font-medium rounded-md px-8 py-3.5 w-full text-sm cursor-pointer">Create New Wallet</Link>
                                    <Link to="/import" className="text-[#1F2124] bg-white focus:outline-none hover:bg-gray-100 font-medium rounded-md px-8 py-3.5 w-full text-sm">Import existing wallet</Link>
                                    <div
                                        className="text-[#D8DBD5] border border-[#292B2E] focus:outline-none hover:border-[#3c3e43] font-medium rounded-md px-8 py-3.5 w-full text-sm cursor-pointer"
                                        onClick={() => { setDraw(true); setDrawSet("connect"); }}
                                    >Connect Wallet</div>
                                    <Link to="/" className="text-white/40 text-sm text-center px-8 py-3.5 hover:text-white">Not Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${drawSet === "connect" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-4 text-[#9DA3B7] text-[15px]">Select an option to connect</div>
                    <div className="py-6 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="flex flex-col gap-3 pb-40">

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer" onClick={() => { setDraw(true); setDrawSet("create2"); }}>
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconTrust} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Trust Wallet</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer" onClick={() => { setDraw(true); setDrawSet("create2"); }}>
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconMetamask} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Metamask</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer" onClick={() => { setDraw(true); setDrawSet("create2"); }}>
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconLNX} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Ledger Nano X</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer" onClick={() => { setDraw(true); setDrawSet("create2"); }}>
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconPhantom} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Phantom</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer" onClick={() => { setDraw(true); setDrawSet("create2"); }}>
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#383838]">
                                        <img src={iconExodus} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Exodus</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${drawSet === "create2" ? '' : 'opacity-0 hidden'}`}>
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
        </Layout>
    )
}

export default Intro