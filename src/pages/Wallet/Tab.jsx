import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { ReactComponent as IconWallet } from '../../assets/img/icon-wallet-drop.svg';
import { ReactComponent as IconChevDown } from '../../assets/img/icon-chevron-down.svg';
import { ReactComponent as IconNetwork } from '../../assets/img/icon-network.svg';

import { ReactComponent as IconFilter } from '../../assets/img/icon-filter.svg';

import List from '../Profile/List';

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

import nft1 from '../../assets/img/nft-1.jpg';
import nft2 from '../../assets/img/nft-2.jpg';
import nft3 from '../../assets/img/nft-3.jpg';

import { ReactComponent as PrCheck } from '../../assets/img/pr-check.svg';
import ListExp from './ListExp';

const Tab = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    const [tab, setTab] = useState("token");

    return (
        <div className="flex flex-col gap-5">

            <ul className="flex text-sm font-medium text-center bg-[#181818] py-1.5 px-2 rounded-lg text-gray-500 dark:text-gray-400">
                <li className="flex justify-center cursor-pointer w-full" onClick={() => setTab("token")}>
                    <div className={`inline-block px-4 py-2 text-white rounded w-full ${tab === "token" ? "bg-[#292B2E]" : ''}`}>Token</div>
                </li>
                <li className="flex justify-center cursor-pointer w-full" onClick={() => setTab("nft")}>
                    <div className={`inline-block px-4 py-2 text-white/80 rounded w-full ${tab === "nft" ? "bg-[#292B2E]" : ''}`}>NFTs</div>
                </li>
            </ul>

            <div className={tab === "token" ? 'block' : 'hidden'}>
                <div className="rounded-2xl bg-[#181818] p-4 pb-0">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-[#9DA3B7]">Token</span>
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
                <ListExp />
            </div>
            <div className={tab === "nft" ? 'block' : 'hidden'}>
                <div className="flex flex-col pb-4">
                    <div className="border border-[#1F2124] rounded-lg p-4 w-full">
                        <div className="text-[#D8DBD5] mb-2">Total value by Floor prices</div>
                        <div className="text-white text-[28px]">$1<span className="text-[#7A7E84] mb-4">.10</span></div>
                        <div className="flex gap-4 mt-4">
                            <div className="flex items-center border border-[#343439] hover:bg-[#343439] cursor-pointer rounded gap-2 py-2 px-4">
                                <IconFilter />
                                <div className="text-sm">Price: <span>high to low</span></div>
                            </div>
                            <div className="flex items-center border border-[#343439] hover:bg-[#343439] cursor-pointer rounded gap-2 py-2 px-4">
                                <IconPalette height={16} width={16} />
                                <div className="text-sm">Collections</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mt-6 mb-4">
                        <div className="cursor-pointer">ALL NFT</div>
                        <div className="flex items-center gap-2 ml-auto">
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

                    <div className="overflow-hidden">
                        <Swiper
                            spaceBetween={18}
                            slidesPerView={2}
                        >
                            <SwiperSlide>
                                <div className="w-full flex flex-col rounded-lg overflow-hidden">
                                    <div className="h-[126px] w-full bg-center bg-cover" style={{ backgroundImage: "url(" + nft1 + ")" }}></div>
                                    <div className="px-2.5 py-3.5 bg-[#181818]">
                                        <div className="flex items-center gap-1">
                                            <div className="text-sm font-medium">Bored ApeYatch club</div>
                                            <PrCheck />
                                        </div>
                                        <div className="flex gap-5">
                                            <div>
                                                <span className="text-[8px] text-[#D8DBD5]">Floor Price</span>
                                                <div className="text-xs uppercase font-medium text-[#F6F9F3]">72.90 ETH</div>
                                            </div>
                                            <div>
                                                <span className="text-[8px] text-[#D8DBD5]">2H Volume</span>
                                                <div className="text-xs uppercase font-medium text-[#F6F9F3]">3,914 ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex flex-col rounded-lg overflow-hidden">
                                    <div className="h-[126px] w-full bg-center bg-cover" style={{ backgroundImage: "url(" + nft2 + ")" }}></div>
                                    <div className="px-2.5 py-3.5 bg-[#181818]">
                                        <div className="flex items-center gap-1">
                                            <div className="text-sm font-medium">Bored ApeYatch club</div>
                                            <PrCheck />
                                        </div>
                                        <div className="flex gap-5">
                                            <div>
                                                <span className="text-[8px] text-[#D8DBD5]">Floor Price</span>
                                                <div className="text-xs uppercase font-medium text-[#F6F9F3]">72.90 ETH</div>
                                            </div>
                                            <div>
                                                <span className="text-[8px] text-[#D8DBD5]">2H Volume</span>
                                                <div className="text-xs uppercase font-medium text-[#F6F9F3]">3,914 ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full flex flex-col rounded-lg overflow-hidden">
                                    <div className="h-[126px] w-full bg-center bg-cover" style={{ backgroundImage: "url(" + nft3 + ")" }}></div>
                                    <div className="px-2.5 py-3.5 bg-[#181818]">
                                        <div className="flex items-center gap-1">
                                            <div className="text-sm font-medium">Bored ApeYatch club</div>
                                            <PrCheck />
                                        </div>
                                        <div className="flex gap-5">
                                            <div>
                                                <span className="text-[8px] text-[#D8DBD5]">Floor Price</span>
                                                <div className="text-xs uppercase font-medium text-[#F6F9F3]">72.90 ETH</div>
                                            </div>
                                            <div>
                                                <span className="text-[8px] text-[#D8DBD5]">2H Volume</span>
                                                <div className="text-xs uppercase font-medium text-[#F6F9F3]">3,914 ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
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
                <div className={`${drawSet === "wallet" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-4 text-[#9DA3B7] text-[15px]">Select an option to connect</div>
                    <div className="py-6 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="pb-24">
                                <div className="flex flex-col bg-[#282828] rounded-lg">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-[#222] border-b border-[#1F2124]">
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

export default Tab