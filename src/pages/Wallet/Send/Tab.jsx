import React, { useState } from 'react';
import Button from '../../../components/Button';

import sendTko from '../../../assets/img/send-tko.png';
import iconBsc from '../../../assets/img/icon-bsc.png';
import iconFox from '../../../assets/img/icon-fox.png';
import iconArbitrum from '../../../assets/img/icon-arbitrum.png';

import iconTrust from '../../../assets/img/connect-trust.png';
import iconMetamask from '../../../assets/img/connect-metamask.png';
import iconLNX from '../../../assets/img/connect-lnx.png';
import iconPhantom from '../../../assets/img/connect-phantom.png';
import iconExodus from '../../../assets/img/connect-exodus.png';

import { ReactComponent as IconChevDown } from '../../../assets/img/icon-chevron-down.svg';
import { ReactComponent as SendTkoBlank } from '../../../assets/img/send-tko-blank.svg';
import { ReactComponent as IconChevRight } from '../../../assets/img/icon-chevron-right.svg';
import { ReactComponent as IconUserCircle } from '../../../assets/img/icon-user-circle.svg';

import { ReactComponent as IconEthereum } from '../../../assets/img/icon-ethereum.svg';
import { ReactComponent as IconMatic } from '../../../assets/img/icon-matic.svg';
import { ReactComponent as IconAvax } from '../../../assets/img/icon-avax.svg';
import { ReactComponent as IconBsc } from '../../../assets/img/icon-bsc.svg';
import { ReactComponent as IconFtm } from '../../../assets/img/icon-ftm.svg';
import { ReactComponent as IconAoa } from '../../../assets/img/icon-aoa.svg';
import { ReactComponent as IconGno } from '../../../assets/img/icon-gno.svg';
import { ReactComponent as IconOp } from '../../../assets/img/icon-op.svg';


import prMetamask from '../../../assets/img/pr-metamask.png';

import { ReactComponent as IconSearch } from '../../../assets/img/icon-search.svg';

import { ReactComponent as PrCheck } from '../../../assets/img/pr-check.svg';
import { ReactComponent as PrEth } from '../../../assets/img/pr-eth.svg';
import { ReactComponent as PrUsd } from '../../../assets/img/pr-usd.svg';
import { ReactComponent as PrTether } from '../../../assets/img/pr-tether.svg';
import { ReactComponent as PrDai } from '../../../assets/img/pr-dai.svg';
import { ReactComponent as PrBsc } from '../../../assets/img/pr-bsc.svg';

const payList = [
    {
        cur_icon: <PrEth />,
        cur_name: "Ethereum",
        cur_short: "ETH",
        cur_val: "0.208",
        cur_val_usd: "$1,619.27",
        cur_mask: prMetamask,
        cur_bal: "$337.78",
        cur_verify: true ? <PrCheck /> : "",
        cur_bg: "bg-[#5F7BE5]"
    },
    {
        cur_icon: <PrUsd />,
        cur_name: "USD Coin",
        cur_short: "ETH",
        cur_val: "0.208",
        cur_val_usd: "$1,619.27",
        cur_mask: prMetamask,
        cur_bal: "$337.78",
        cur_verify: true ? <PrCheck /> : "",
        cur_bg: "bg-[#2775CA]"
    },
    {
        cur_icon: <PrTether />,
        cur_name: "Tether USD",
        cur_short: "ETH",
        cur_val: "0.208",
        cur_val_usd: "$1,619.27",
        cur_mask: prMetamask,
        cur_bal: "$337.78",
        cur_verify: true ? <PrCheck /> : "",
        cur_bg: "bg-[#50AF95]"
    },
    {
        cur_icon: <PrDai />,
        cur_name: "Dai",
        cur_short: "ETH",
        cur_val: "0.208",
        cur_val_usd: "$1,619.27",
        cur_mask: prMetamask,
        cur_bal: "$337.78",
        cur_verify: true ? <PrCheck /> : "",
        cur_bg: "bg-[#F5AC37]"
    },
    {
        cur_icon: <PrBsc />,
        cur_name: "BSC",
        cur_short: "ETH",
        cur_val: "0.208",
        cur_val_usd: "$1,619.27",
        cur_mask: prMetamask,
        cur_bal: "$337.78",
        cur_verify: true ? <PrCheck /> : "",
        cur_bg: "bg-[#F0B90B]"
    },
]

const Tab = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    const [tab, setTab] = useState("token");

    return (
        <div className="flex flex-col gap-4 px-6">

            <ul className="flex text-sm font-medium text-center bg-[#181818] py-1.5 px-2 rounded-lg text-gray-500 dark:text-gray-400">
                <li className="flex justify-center cursor-pointer w-full" onClick={() => setTab("token")}>
                    <div className={`inline-block px-4 py-2 text-white rounded w-full ${tab === "token" ? "bg-[#292B2E]" : ''}`}>Token</div>
                </li>
                <li className="flex justify-center cursor-pointer w-full" onClick={() => setTab("nft")}>
                    <div className={`inline-block px-4 py-2 text-white/80 rounded w-full ${tab === "nft" ? "bg-[#292B2E]" : ''}`}>NFTs</div>
                </li>
            </ul>

            <div className={tab === "token" ? 'block' : 'hidden'}>
                <div className="flex flex-col gap-2">
                    <div className="bg-[#181818] hover:bg-[#242424] cursor-pointer rounded-lg px-4 py-2 flex items-center justify-between" onClick={() => { setDraw(true); setDrawSet("connect"); }}>
                        <div className="flex items-center gap-4">
                            <img src={sendTko} alt="" />
                            <div>
                                <span className="leading-none font-medium text-sm">Ocf...c902663</span>
                                <SendTkoBlank />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[#AB2D2D] text-[10px] leading-none">-0.64%</span>
                            <IconChevRight />
                        </div>
                    </div>

                    <div
                        className="bg-[#181818] hover:bg-[#242424] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between"
                        onClick={() => { setDraw(true); setDrawSet("token"); }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded flex items-center justify-center bg-[#5F7BE5] p-1.5">
                                <IconEthereum />
                            </div>
                            <div className="flex gap-1 items-center relative cursor-pointer">
                                <span className="leading-none font-medium">Ethereum</span>
                                <IconChevDown />
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-[#181818] hover:bg-[#242424] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between"
                        onClick={() => { setDraw(true); setDrawSet("send"); }}
                    >
                        <div>
                            <span className="text-xs text-[#979797]">Recipient</span>
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded flex items-center justify-center bg-[#343438]"></div>
                                <div className="flex gap-1 items-center relative cursor-pointer">
                                    <span className="leading-none font-medium text-lg">Andrea Borrelli</span>
                                </div>
                            </div>
                            <div className="text-xs text-[#979797] mt-2">0x8d6b72b6b95d36710d7c15e60cd852631b9c9f74</div>
                        </div>
                        <div className="flex items-center gap-1">
                            <IconUserCircle />
                            <IconChevDown />
                        </div>
                    </div>

                    <div
                        className="bg-[#181818] hover:bg-[#242424] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between"
                        onClick={() => { setDraw(true); setDrawSet("pay"); }}
                    >
                        <div>
                            <span className="text-xs text-[#979797]">Asset</span>
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-5 rounded-full flex items-center justify-center bg-[#5F7BE5] p-1.5">
                                    <IconEthereum />
                                </div>
                                <div className="flex gap-1 items-center relative cursor-pointer">
                                    <span className="leading-none font-medium">ETH</span>
                                    <IconChevDown />
                                </div>
                            </div>
                            <div className="text-xs text-[#979797] mt-2">Balance: 0.208</div>
                        </div>
                        <div className="flex items-center gap-1">
                            0
                        </div>
                    </div>

                    <div className="mt-7">
                        <Button type="primary">Enter Amount</Button>
                    </div>
                </div>
            </div>
            <div className={tab === "nft" ? 'block' : 'hidden'}>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 mb-3.5 bg-[#181818] p-2.5 rounded-lg" onClick={() => { setDraw(true); setDrawSet("token"); }}>
                        <div className="h-6 w-6 rounded flex items-center justify-center bg-[#5F7BE5] p-2">
                            <IconEthereum />
                        </div>
                        <div className="flex gap-1 items-center justify-between w-full relative cursor-pointer">
                            <span className="leading-none font-medium text-sm">Ethereum</span>
                            <IconChevDown />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5 pb-24">
                        <div className="bg-[#2B2B2F] hover:bg-[#38383e] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between">
                            <div>
                                <span className="text-xs text-[#979797]">Recipient</span>
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 rounded flex items-center justify-center bg-[#343438]"></div>
                                    <div className="flex gap-1 items-center relative cursor-pointer">
                                        <span className="leading-none font-medium text-sm">Address, domain or identity</span>
                                    </div>
                                </div>
                                <div className="text-xs text-[#979797] mt-2">0x0000</div>
                            </div>
                            <div className="flex items-center gap-1">
                                <IconUserCircle />
                                <IconChevDown />
                            </div>
                        </div>

                        <div className="bg-[#2B2B2F] hover:bg-[#38383e] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between" onClick={() => { setDraw(true); setDrawSet("nfts"); }}>
                            <div>
                                <span className="text-xs text-[#979797] mb-1">Select NFT</span>
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded flex items-center justify-center bg-[#343438] mb-0.5"></div>
                                    <div className="flex items-center gap-1 relative cursor-pointer mt-0.5">
                                        <div className="flex flex-col">
                                            <span className="text-sm leading-none font-medium">No Item</span>
                                            <span className="text-[10px] text-[#D8DBD5]">Balance: 0</span>
                                        </div>
                                        <div className="ml-1">
                                            <IconChevDown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-7">
                            <Button type="primary">Enter  recipient</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PLATE */}
            <div className={`fixed top-0 left-1/2 -translate-x-1/2 h-full w-full bg-[#2B2B2F]/80 max-w-[428px] transition-all duration-500 ${draw ? '' : 'opacity-0 invisible'}`} onClick={() => { setDraw(false); setDrawSet("") }}></div>
            <div className={`fixed bottom-0 w-full max-h-screen left-1/2 -translate-x-1/2 max-w-[428px] bg-[#181818] rounded-t-[32px] px-6 z-40 transition-all duration-500 ${draw ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className={`${drawSet === "send" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-3.5">Send</div>
                    <div className="p-6 pr-5 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <ul className="flex text-sm font-medium text-center bg-[#181818] py-1.5 px-2 rounded-lg text-gray-500 dark:text-gray-400 mb-3.5">
                                <li className="flex justify-center w-full">
                                    <div className="cursor-pointer inline-block px-4 py-2 bg-[#292B2E] text-white rounded w-full">Token</div>
                                </li>
                            </ul>

                            <div className="flex flex-col gap-1.5 pb-24">
                                <div className="bg-[#2B2B2F] hover:bg-[#38383e] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-[#979797]">Recipient</span>
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-4 rounded flex items-center justify-center bg-[#343438]"></div>
                                            <div className="flex gap-1 items-center relative cursor-pointer">
                                                <span className="leading-none font-medium text-sm">Address, domain or identity</span>
                                            </div>
                                        </div>
                                        <div className="text-xs text-[#979797] mt-2">0x0000</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IconUserCircle />
                                        <IconChevDown />
                                    </div>
                                </div>

                                <div className="bg-[#2B2B2F] hover:bg-[#38383e] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between" onClick={() => { setDraw(true); setDrawSet("pay"); }}>
                                    <div>
                                        <span className="text-xs text-[#979797]">Asset</span>
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded flex items-center justify-center bg-[#FAB600]">
                                                <img src={iconBsc} alt="" />
                                            </div>
                                            <div className="flex gap-1 items-center relative cursor-pointer">
                                                <span className="leading-none font-medium">BSC</span>
                                                <IconChevDown />
                                            </div>
                                        </div>
                                        <div className="text-xs text-[#979797] mt-2">Balance: 00000</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        0
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <Button type="primary">Enter  recipient</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${drawSet === "send2" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-3.5">Send</div>
                    <div className="p-6 pr-5 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <ul className="flex text-sm font-medium text-center bg-[#181818] py-1.5 px-2 rounded-lg text-gray-500 dark:text-gray-400 mb-3.5">
                                <li className="flex justify-center w-full">
                                    <div className="cursor-pointer inline-block px-4 py-2 bg-[#292B2E] text-white rounded w-full">Token</div>
                                </li>
                            </ul>

                            <div className="flex flex-col gap-1.5 pb-24">
                                <div className="bg-[#2B2B2F] hover:bg-[#38383e] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-[#979797]">Recipient</span>
                                        <div className="flex items-center gap-2">
                                            <div className="h-4 w-4 rounded flex items-center justify-center bg-[#343438]"></div>
                                            <div className="flex gap-1 items-center relative cursor-pointer">
                                                <span className="leading-none font-medium text-sm">Address, domain or identity</span>
                                            </div>
                                        </div>
                                        <div className="text-xs text-[#979797] mt-2">0x0000</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IconUserCircle />
                                        <IconChevDown />
                                    </div>
                                </div>

                                <div className="bg-[#2B2B2F] hover:bg-[#38383e] cursor-pointer rounded-lg px-4 py-3.5 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-[#979797] mb-1">My Wallet</span>
                                        <div className="flex items-center gap-2">
                                            <div className="h-8 w-8 rounded flex items-center justify-center">
                                                <img src={iconFox} alt="" />
                                            </div>
                                            <div className="flex flex-col gap-1 relative cursor-pointer">
                                                <span className="text-sm leading-none font-medium">0xfec4...0263</span>
                                                <span className="text-[10px]">MetaMask</span>
                                            </div>
                                        </div>
                                        <div className="text-xs text-[#979797] mt-2">Balance: 00000</div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-[#D8DBD5] text-[10px]">$437.46</span>
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <Button type="primary">Enter  recipient</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${drawSet === "token" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-3.5">Networks</div>
                    <div className="py-6 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="flex flex-col gap-4 pb-24">
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#5F7BE5]">
                                        <IconEthereum />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Ethereum</div>
                                        <div className="text-[10px]">ETH</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#7E45E0]">
                                        <IconMatic />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Polygon</div>
                                        <div className="text-[10px]">MATIC</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#F0B90B]">
                                        <IconBsc />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">BSC</div>
                                        <div className="text-[10px]">BSC</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#E84142]">
                                        <IconAvax />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Avalanche</div>
                                        <div className="text-[10px]">AVAX</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#13B5EC]">
                                        <IconFtm />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Fantom</div>
                                        <div className="text-[10px]">FTM</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#2C374B]">
                                        <img src={iconArbitrum} alt="" />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Arbitrum</div>
                                        <div className="text-[10px]">Arbitrum</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#738868]">
                                        <IconAoa />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Aurora</div>
                                        <div className="text-[10px]">AOA</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#FFFFFF]/80">
                                        <IconGno />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Gnosis Chain</div>
                                        <div className="text-[10px]">GNO</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 px-1 rounded-lg hover:bg-[#222]">
                                    <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-[#FF0420]">
                                        <IconOp />
                                    </div>
                                    <div>
                                        <div className="text-lg font-medium mb-0.5">Optimism</div>
                                        <div className="text-[10px]">OP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${drawSet === "nfts" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-3.5">Select NFTs</div>
                    <div className="pt-6 pb-28 pl-5 pr-4 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="flex flex-wrap gap-y-5">
                                <div className="w-1/3">
                                    <div className="px-3">
                                        <div className="h-[94px] w-[94px] rounded bg-[#181818] mx-auto"></div>
                                        <div className="text-center text-xs mt-2.5">NFT : #000</div>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="px-3">
                                        <div className="h-[94px] w-[94px] rounded bg-[#181818] mx-auto"></div>
                                        <div className="text-center text-xs mt-2.5">NFT : #000</div>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="px-3">
                                        <div className="h-[94px] w-[94px] rounded bg-[#181818] mx-auto"></div>
                                        <div className="text-center text-xs mt-2.5">NFT : #000</div>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="px-3">
                                        <div className="h-[94px] w-[94px] rounded bg-[#181818] mx-auto"></div>
                                        <div className="text-center text-xs mt-2.5">NFT : #000</div>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="px-3">
                                        <div className="h-[94px] w-[94px] rounded bg-[#181818] mx-auto"></div>
                                        <div className="text-center text-xs mt-2.5">NFT : #000</div>
                                    </div>
                                </div>
                                <div className="w-1/3">
                                    <div className="px-3">
                                        <div className="h-[94px] w-[94px] rounded bg-[#181818] mx-auto"></div>
                                        <div className="text-center text-xs mt-2.5">NFT : #000</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 px-4">
                                <div className="flex gap-3.5">
                                    <button className="p-3.5 text-center text-sm border border-[#343439] rounded-lg w-full">Cancel</button>
                                    <button className="p-3.5 text-center text-sm bg-[#7A27EC] rounded-lg w-full">Save</button>
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
                <div className={`${drawSet === "pay" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="mb-3.5">Pay with</div>
                    <div className="p-6 pr-5 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-thumb-rounded-full scrollbar-track-rounded-full  min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">

                            <div className="flex flex-col gap-2 pb-24">
                                <div className="gap-3 flex items-center bg-[#292929] border border-white/10 rounded-lg px-3 w-full">
                                    <IconSearch stroke="#D8DBD5" />
                                    <input type="text" className="h-9 pt-1 w-full bg-inherit border-0 focus:outline-0 placeholder:text-[#Search assets] text-sm" placeholder="Search assets" />
                                </div>

                                {
                                    payList.map((el, i) => {
                                        return (
                                            <div className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#292929] hover:bg-white/10 cursor-pointer" key={i}>
                                                <div className="flex gap-3 items-center">
                                                    <div className={`h-10 w-10 flex items-center justify-center rounded ${el.cur_bg}`}>
                                                        {el.cur_icon}
                                                    </div>
                                                    <div>
                                                        <span className="flex items-center gap-1 font-bold text-[#D8DBD5]">
                                                            {el.cur_name} {el.cur_verify}
                                                        </span>
                                                        <div className="flex items-center gap-1 leading-0 text-[10px]">
                                                            <span>{el.cur_val} {el.cur_short}</span>
                                                            <div className="flex items-center gap-1">
                                                                {el.cur_val_usd ?
                                                                    <>
                                                                        <span className="h-0.5 w-0.5 rounded bg-[#D9D9D9]"></span>
                                                                        {el.cur_val_usd}
                                                                    </>
                                                                    : ""}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="h-6 w-6 rounded bg-[#363636] flex items-center justify-center">
                                                    <img src={prMetamask} alt="" />
                                                </div>

                                                <div className="font-medium">{el.cur_bal}</div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab;