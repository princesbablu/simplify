import React, { useState } from 'react';

import { ReactComponent as IconSlider } from '../../assets/img/icon-slider.svg';
import { ReactComponent as IconSearch } from '../../assets/img/icon-search.svg';
import { ReactComponent as IconCheck } from '../../assets/img/select-check.svg';

const Search = () => {

    const [draw, setDraw] = useState(false);
    const [drawSet, setDrawSet] = useState("");

    const [selected, setSelected] = useState(null);

    return (
        <>
            <form className="flex items-center gap-3 mb-6">
                <div className="gap-3 flex items-center bg-[#202123] rounded-lg px-3 w-full">
                    <IconSearch />
                    <input type="text" className="h-12 w-full bg-inherit border-0 focus:outline-0 placeholder:text-[#717B92] text-sm" placeholder="Search TxID" />
                </div>
                <div className="shrink-0 bg-gradient-to-br from-[#7121EC] to-[#E773F3] h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer" onClick={() => { setDraw(true); setDrawSet("selection"); }}>
                    <IconSlider />
                </div>
            </form>
            {/* PLATE */}
            <div className={`fixed top-0 left-1/2 -translate-x-1/2 h-full w-full bg-[#2B2B2F]/80 max-w-[428px] transition-all duration-500 ${draw ? '' : 'opacity-0 invisible'}`} onClick={() => { setDraw(false); setDrawSet("") }}></div>
            <div className={`fixed bottom-0 w-full max-h-screen left-1/2 -translate-x-1/2 max-w-[428px] bg-[#181818] rounded-t-[32px] px-6 z-40 transition-all duration-500 ${draw ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className={`${drawSet === "selection" ? '' : 'opacity-0 hidden'}`}>
                    <div className="pb-4 pt-5 cursor-pointer" onClick={() => setDraw(false)}>
                        <div className="w-12 h-1 rounded bg-white/40 mx-auto"></div>
                    </div>
                    <div className="p-6 pb-24 pr-5 rounded-t-2xl bg-[#1f1f1f]">
                        <div className="scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#191919] scrollbar-thumb-rounded-full scrollbar-track-rounded-full min-h-[calc(50vh-100px)] max-h-[calc(100vh-100px)] overflow-auto scrollbar-rounded pr-1">
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setSelected(1) }}>
                                    {
                                        selected === 1 ?
                                            <IconCheck />
                                            :
                                            <div className="h-[26px] w-[26px] rounded border border-[#959596] ml-px"></div>
                                    }
                                    <span className="text-lg">Trade</span>
                                </div>
                                <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setSelected(2) }}>
                                    {
                                        selected === 2 ?
                                            <IconCheck />
                                            :
                                            <div className="h-[26px] w-[26px] rounded border border-[#959596] ml-px"></div>
                                    }
                                    <span className="text-lg">Mint</span>
                                </div>
                                <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setSelected(3) }}>
                                    {
                                        selected === 3 ?
                                            <IconCheck />
                                            :
                                            <div className="h-[26px] w-[26px] rounded border border-[#959596] ml-px"></div>
                                    }
                                    <span className="text-lg">Send</span>
                                </div>
                                <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setSelected(4) }}>
                                    {
                                        selected === 4 ?
                                            <IconCheck />
                                            :
                                            <div className="h-[26px] w-[26px] rounded border border-[#959596] ml-px"></div>
                                    }
                                    <span className="text-lg">Receive</span>
                                </div>
                                <div className="flex items-center gap-3.5 cursor-pointer" onClick={() => { setSelected(5) }}>
                                    {
                                        selected === 5 ?
                                            <IconCheck />
                                            :
                                            <div className="h-[26px] w-[26px] rounded border border-[#959596] ml-px"></div>
                                    }
                                    <span className="text-lg">Others</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Search