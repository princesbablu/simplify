import React, { useState } from 'react';
import { ReactComponent as IconWallet } from '../../assets/img/icon-wallet-drop.svg';
import { ReactComponent as IconChevDown } from '../../assets/img/icon-chevron-down.svg';
import { ReactComponent as IconNetwork } from '../../assets/img/icon-network.svg';

import iconTrust from '../../assets/img/connect-trust.png';
import iconMetamask from '../../assets/img/connect-metamask.png';
import iconLNX from '../../assets/img/connect-lnx.png';
import iconPhantom from '../../assets/img/connect-phantom.png';
import iconExodus from '../../assets/img/connect-exodus.png';

import { ReactComponent as IconChevRight } from '../../assets/img/icon-chevron-right.svg';
import { ReactComponent as IconCoins } from '../../assets/img/icon-coins.svg';
import { ReactComponent as IconPalette } from '../../assets/img/icon-palette.svg';

import { ReactComponent as IconNetworkLinks } from '../../assets/img/icon-network-links.svg';
import { ReactComponent as IconEthereum } from '../../assets/img/icon-ethereum.svg';
import { ReactComponent as IconMatic } from '../../assets/img/icon-matic.svg';
import { ReactComponent as IconBsc } from '../../assets/img/icon-bsc.svg';

import List from './List';

const Tab = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    return (
        <div className="flex flex-col gap-4">

            <div className="rounded-2xl bg-[#181818] p-4 pb-0">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#F6F9F3] font-bold">Transactions</span>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 px-2 py-1 rounded border border-[#1F2124] cursor-pointer text-sm text-[#9DA3B7]" onClick={() => { setDraw(true); setDrawSet("connect"); }}>
                            <div className="flex gap-2 items-center">
                                <IconWallet />
                                <span>Wallets</span>
                            </div>
                            <IconChevDown />
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded cursor-pointer text-sm text-[#AB72FF]" onClick={() => { setDraw(true); setDrawSet("network"); }}>
                            <div className="flex gap-2 items-center">
                                <IconNetwork />
                                <span>All Network</span>
                            </div>
                            <IconChevDown />
                        </div>
                    </div>
                </div>
                <List />
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

        </div>
    )
}

export default Tab;