import React, { useState } from 'react';
import { listTransactions } from '../../../utils/list';

import { ReactComponent as IconEthereum } from '../../../assets/img/icon-ethereum.svg';
import { ReactComponent as IconChevRight } from '../../../assets/img/icon-chevron-right.svg';

import { ReactComponent as IconCopy } from '../../../assets/img/icon-copy.svg';
import { ReactComponent as IconArrowTR } from '../../../assets/img/icon-arrow-tr.svg';

import imgMCS from '../../../assets/img/mcs.png';

const List = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    return (
        <>
            <span className="text-[#858585] text-xs">23 FEB, 2023</span>
            {
                listTransactions.filter(val => val.cur_date === new Date('Jan 19, 2023 00:00:00').getTime()).map((el, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className="group" onClick={() => { setDraw(true); setDrawSet(el.cur_target); }}>
                                <div className="flex items-center gap-4 py-3.5 cursor-pointer">
                                    <div className={`h-12 w-12 rounded-lg bg-[#232323] flex items-center justify-center`}>
                                        {el.cur_icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between font-medium w-32">
                                            <span className="leading-none whitespace-nowrap text-[#F6F9F3] text-sm">{el.cur_status}</span>
                                        </div>
                                        <div className="text-[15px] mt-0.5 flex items-center gap-2">
                                            <span className="text-[#858585] text-sm font-medium">{el.cur_to}</span>
                                        </div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="text-sm font-semibold mb-0.5 text-[#F6F9F3]">{el.cur_val} {el.cur_cur}</div>
                                        <div className="text-sm text-[#62BD71]">{el.cur_progress}</div>
                                    </div>
                                </div>
                                <div className="h-px bg-[#1F1F1F] my-2 group-last:hidden"></div>
                            </div>

                            <div className={`fixed top-0 left-1/2 -translate-x-1/2 h-full w-full bg-[#2B2B2F]/80 max-w-[428px] transition-all duration-500 ${draw ? '' : 'opacity-0 invisible'}`} onClick={() => { setDraw(false); setDrawSet("") }}></div>
                            <div className={`fixed bottom-0 w-full max-h-screen left-1/2 -translate-x-1/2 max-w-[428px] bg-[#181818] rounded-t-[32px] px-6 z-40 transition-all duration-500 ${draw ? 'translate-y-0' : 'translate-y-full'}`}>
                                <div className={`${drawSet === "send" ? '' : 'opacity-0 hidden'}`}>
                                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => { setDraw(false); setDrawSet(""); }}>
                                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                                    </div>
                                    <div className="text-[#D8DBD5]">
                                        <div className="text-sm">Send</div>
                                        <div className="text-sm">March 13, 2023 11:00</div>
                                    </div>
                                    <div className="p-6 pb-40 mt-4 rounded-t-[30px] bg-[#1F1F1F]">
                                        <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-[#191919] min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto pr-1 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
                                            <div className="flex flex-col gap-3.5">
                                                <div className="flex gap-2 items-center rounded-lg bg-[#313136] py-2 px-4">
                                                    <div className="h-10 w-10 rounded bg-[#5F7BE5] flex items-center justify-center">
                                                        <IconEthereum />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="text-sm font-bold">Ethereum</div>
                                                        <div className="text-[10px]">$236.05</div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <IconChevRight />
                                                    </div>
                                                </div>
                                                <div className="h-px bg-[#36363B]"></div>

                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-[#858585] text-sm">To</div>
                                                        <div className="flex items-center gap-2">
                                                            <img src={imgMCS} alt="" className="h-6 w-6" />
                                                            <span>0xe509...9d2f</span>
                                                        </div>
                                                    </div>

                                                    <div className="ml-auto cursor-pointer">
                                                        <IconCopy />
                                                    </div>
                                                </div>

                                                <div>
                                                    <span className="mb-1 text-xs text-[#858585]">Network</span>
                                                    <div className="font-medium">Ethereum</div>
                                                </div>

                                                <div className="h-px bg-[#36363B]"></div>

                                                <div>
                                                    <span className="mb-1 text-xs text-[#858585]">Fee </span>
                                                    <div className="font-medium">0.002 ETH ($5.26)</div>
                                                </div>

                                                <div className="h-px bg-[#36363B]"></div>

                                                <div className="flex items-center">
                                                    <div>
                                                        <div className="text-[#858585] text-xs">To</div>
                                                        <div className="font-medium">0xe509...9d2f</div>
                                                    </div>

                                                    <div className="ml-auto cursor-pointer">
                                                        <IconArrowTR />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default List