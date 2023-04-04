import React, { useState } from 'react';
import logoWhite from '../../assets/img/logo-white.png';
import iconWalletHeader from '../../assets/img/icon-wallet-header.svg';

import iconTrust from '../../assets/img/connect-trust.png';
import iconMetamask from '../../assets/img/connect-metamask.png';
import iconLNX from '../../assets/img/connect-lnx.png';
import iconPhantom from '../../assets/img/connect-phantom.png';
import iconExodus from '../../assets/img/connect-exodus.png';
import iconMCS from '../../assets/img/mcs.png';
import iconChecks from '../../assets/img/checks.png';

import { ReactComponent as IconChevRight } from '../../assets/img/icon-chevron-right.svg';
import { ReactComponent as IconCoins } from '../../assets/img/icon-coins.svg';
import { ReactComponent as IconPalette } from '../../assets/img/icon-palette.svg';

import { ReactComponent as IconNetworkLinks } from '../../assets/img/icon-network-links.svg';
import { ReactComponent as IconPlus } from '../../assets/img/icon-plus.svg';
import { ReactComponent as IconShare } from '../../assets/img/icon-share.svg';
import { ReactComponent as IconNotify } from '../../assets/img/icon-notify.svg';
import { ReactComponent as IconNofityLine } from '../../assets/img/icon-notify-line.svg';
import { ReactComponent as IconDots } from '../../assets/img/icon-dots.svg';
import { ReactComponent as IconDragDrop } from '../../assets/img/icon-drag-drop.svg';

import { ReactComponent as IconEthereum } from '../../assets/img/icon-ethereum.svg';
import { ReactComponent as IconMatic } from '../../assets/img/icon-matic.svg';
import { ReactComponent as IconBsc } from '../../assets/img/icon-bsc.svg';


const Header = () => {

    const [draw, setDraw] = useState(false);
    const [notify, setNotify] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    return (
        <div className="h-[210px] bg-gradient-to-br from-[#7121EC] to-[#E773F3] pt-[58px] pb-6 px-10 rounded-b-[20px] relative z-20">
            <div className="flex justify-between items-center pb-8">
                <div className="w-[140px]">
                    <img src={logoWhite} alt="" />
                </div>
                <div className="cursor-pointer" onClick={() => { setDraw(true); setDrawSet("network"); }}>
                    <img src={iconWalletHeader} alt="" />
                </div>
            </div>
            <p className="mb-2">My Total Balance</p>
            <div className="flex justify-between items-end">
                <div className="text-[32px] leading-none font-bold">$15,020.292</div>
                <div className="text-sm leading-none">+5.92%</div>
            </div>

            <div className={`fixed top-0 left-1/2 -translate-x-1/2 h-full w-full bg-[#2B2B2F]/80 max-w-[428px] transition-all duration-500 z-30 ${draw ? '' : 'opacity-0 invisible'}`} onClick={() => { setDraw(false); setDrawSet("") }}></div>
            <div className={`fixed top-0 left-1/2 -translate-x-1/2 h-full w-full bg-[#2B2B2F]/80 max-w-[428px] transition-all duration-500 ${draw ? '' : 'opacity-0 invisible'}`} onClick={() => { setDraw(false); setDrawSet("") }}></div>
            <div className={`fixed bottom-0 w-full max-h-screen left-1/2 -translate-x-1/2 max-w-[428px] bg-[#181818] rounded-t-[32px] px-6 z-40 transition-all duration-500 ${draw ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className={`${drawSet === "connect" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-4 text-[#9DA3B7] text-[15px]">Select an option to connect</div>
                    <div className="py-6 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="flex flex-col gap-3 pb-40">

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconTrust} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Trust Wallet</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconMetamask} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Metamask</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconLNX} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Ledger Nano X</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer">
                                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white">
                                        <img src={iconPhantom} alt="" />
                                    </div>
                                    <div className="text-sm font-medium w-32">Phantom</div>
                                    <div className="text-xs font-medium text-[#9DA3B7] mx-auto">Oxf...c902663</div>
                                    <div>
                                        <IconChevRight />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#343637] border border-[#343637] cursor-pointer">
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
                <div className={`${drawSet === "network" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-2 text-[15px]">My Wallets</div>
                    <div className="py-6 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="pb-24">
                                <div className="flex flex-col bg-[#282828] rounded-lg shadow-lg">
                                    <div className="flex items-center gap-4 p-4 cursor-pointer border-b border-[#1F2124] hover:bg-[#222]" onClick={() => { setDraw(true); setDrawSet("network2"); }}>
                                        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#2962EF] p-2">
                                            <IconNetworkLinks />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-0.5">All Networks</div>
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="flex items-center gap-1">
                                                    <IconCoins />
                                                    <span>$465.00</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <IconPalette />
                                                    <span>$465.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center text-xs gap-6 px-4 py-6">
                                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setDraw(true); setDrawSet("connect") }}>
                                            <IconPlus />
                                            <span>Connect another wallet</span>
                                        </div>
                                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setDraw(true); setDrawSet("manage") }}>
                                            <img src={iconWalletHeader} alt="" height="12" width="16" />
                                            <span>Manage wallets</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${drawSet === "manage" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="py-6 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="pb-24">
                                <div className="flex flex-col p-6">
                                    <div className="text-lg font-medium mb-5">Manage Wallets</div>
                                    <div className="flex gap-1 text-[8px]">
                                        <div className="py-2 px-8 flex items-center justify-center gap-2 border border-[#38393A] rounded w-full cursor-pointer">
                                            <IconShare />
                                            <span>Sync addresses</span>
                                        </div>
                                        <div className="py-2 px-8 flex items-center justify-center gap-2 bg-[#296DF5] rounded w-full cursor-pointer">
                                            <img src={iconWalletHeader} alt="" height={10} width={14} />
                                            <span>Connect Wallet</span>
                                        </div>
                                    </div>

                                    <div className="text-[10px] font-medium mb-1 mt-6">MY WALLETS</div>
                                    <div className="flex items-center gap-3 text-[8px] px-4 py-2 border border-[#38393A] rounded-lg">
                                        <div>
                                            <img src={iconChecks} alt="" />
                                        </div>
                                        <img src={iconMCS} alt="" className="h-10 w-10" />
                                        <div>
                                            <div className="text-sm font-medium">Ocf...c902663</div>
                                            <div className="text-[#828486] text-[10px] flex items-center gap-1">
                                                <span className="block h-1 w-1 rounded bg-[#828486]"></span>
                                                <span>Metamask</span>
                                            </div>
                                        </div>
                                        <div className="ml-auto cursor-pointer" onClick={() => setNotify(!notify)}>
                                            {
                                                notify ? <IconNotify /> : <IconNofityLine />
                                            }

                                        </div>
                                        <div>
                                            <IconDots />
                                        </div>
                                    </div>

                                    <div className="text-[10px] font-medium mb-1 mt-6">WATCHLIST</div>
                                    <div className="flex flex-col items-center justify-center gap-4 text-[8px] p-9 border border-[#38393A] rounded-lg">
                                        <IconDragDrop />
                                        <span className="text-xs">Drag your wallets here</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${drawSet === "network2" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-4 text-[#9DA3B7] text-[15px]">Select an option to connect</div>
                    <div className="py-6 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="pb-24">
                                <div className="flex flex-col bg-[#282828] rounded-lg">
                                    <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-[#222]">
                                        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#2962EF] p-2">
                                            <IconNetworkLinks />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-0.5">All Networks</div>
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="flex items-center gap-1">
                                                    <IconCoins />
                                                    <span>$465.00</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <IconPalette />
                                                    <span>$465.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-[#222]">
                                        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#5F7BE5]">
                                            <IconEthereum />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-0.5">Ethereum</div>
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="flex items-center gap-1">
                                                    <IconCoins />
                                                    <span>$465.00</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <IconPalette />
                                                    <span>$465.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-[#222]">
                                        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#7E45E0]">
                                            <IconMatic />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-0.5">Polygon</div>
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="flex items-center gap-1">
                                                    <IconCoins />
                                                    <span>$465.00</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <IconPalette />
                                                    <span>$465.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-[#222]">
                                        <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#F0B90B]">
                                            <IconBsc />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium mb-0.5">BSC</div>
                                            <div className="flex items-center gap-2 text-[10px]">
                                                <div className="flex items-center gap-1">
                                                    <IconCoins />
                                                    <span>$465.00</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <IconPalette />
                                                    <span>$465.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header