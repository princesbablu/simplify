import React from 'react';

import curSmAval from '../assets/img/cur-sm-aval.png';
import curSmLite from '../assets/img/cur-sm-lite.png';

import curAval from '../assets/img/cur-aval.svg';
import curLite from '../assets/img/cur-lite.svg';
import curEth from '../assets/img/cur-eth.svg';
import curBnb from '../assets/img/cur-bnb.svg';
import curBitcoin from '../assets/img/cur-bitcoin.svg';

import { ReactComponent as IconSwap } from '../assets/img/icon-arrow-swap.svg';
import { ReactComponent as IconArrowUp } from '../assets/img/icon-arrow-up.svg';
import { ReactComponent as IconCheck } from '../assets/img/icon-check.svg';

import { ReportChart } from '../pages/Profile/ReportChart';

export const list = [
    {
        cur_icon: curAval,
        cur_icon_sm: curSmAval,
        cur_name: "Avalance",
        cur_val: "$1,00",
        cur_status: "+1.6%",
        cur_usdt: "12,850.5",
        cur_fix: "12373,92",
        cur_color: "bg-[#E84142]",
        cur_chart: <ReportChart borderColor="#E84142" bgStop1="#E841421A" bgStop2="#E8414200" />
    },
    {
        cur_icon: curLite,
        cur_icon_sm: curSmLite,
        cur_name: "Litecoin",
        cur_val: "$1,00",
        cur_status: "+1.6%",
        cur_usdt: "12,850.5",
        cur_fix: "12373,92",
        cur_color: "bg-[#BFBBBB]",
        cur_chart: <ReportChart borderColor="#30E0A1" bgStop1="#30E0A11A" bgStop2="#30E0A100" />

    },
    {
        cur_icon: curEth,
        cur_icon_sm: curSmAval,
        cur_name: "Ethereum",
        cur_val: "$1,00",
        cur_status: "+1.6%",
        cur_usdt: "12,850.5",
        cur_fix: "12373,92",
        cur_color: "bg-[#ECEFF0]",
        cur_chart: <ReportChart borderColor="#6374C3" bgStop1="#6374C31A" bgStop2="#6374C300" />

    },
    {
        cur_icon: curBnb,
        cur_icon_sm: curSmAval,
        cur_name: "BNB BNB",
        cur_val: "$1,00",
        cur_status: "+1.6%",
        cur_usdt: "12,850.5",
        cur_fix: "12373,92",
        cur_color: "bg-[#F0B90B]",
        cur_chart: <ReportChart borderColor="#638FFE" bgStop1="#638FFE1A" bgStop2="#638FFE00" />

    },
    {
        cur_icon: curBitcoin,
        cur_icon_sm: curSmLite,
        cur_name: "BTC",
        cur_val: "$1,00",
        cur_status: "+1.6%",
        cur_usdt: "12,850.5",
        cur_fix: "12373,92",
        cur_color: "bg-[#292B2E]",
        cur_chart: <ReportChart borderColor="#638FFE" bgStop1="#638FFE1A" bgStop2="#638FFE00" />

    },
]

export const listTransactions = [
    {
        cur_icon: <IconArrowUp />,
        cur_icon_sm: curSmAval,
        cur_status: "Send",
        cur_to: "Oxb9a9...4a49a6",
        cur_val: "-1.25",
        cur_cur: "CAKE",
        cur_progress: "Succeed",
        cur_date: new Date('Jan 19, 2023 00:00:00').getTime(),
        cur_target: "send"
    },
    {
        cur_icon: <IconCheck />,
        cur_icon_sm: curSmAval,
        cur_status: "Approve ETH",
        cur_to: "Oxb9a9...4a49a6",
        cur_val: "0.00",
        cur_cur: "BNB",
        cur_progress: "Succeed",
        cur_date: new Date('Jan 19, 2023 00:00:00').getTime(),
        cur_target: "send"
    },
    {
        cur_icon: <IconSwap />,
        cur_icon_sm: curSmAval,
        cur_status: "Swap",
        cur_to: "Oxb9a9...4a49a6",
        cur_val: "+0.0054",
        cur_cur: "ETH",
        cur_progress: "Succeed",
        cur_date: new Date('Jan 19, 2023 00:00:00').getTime(),
        cur_target: "send"
    },
    {
        cur_icon: <IconSwap />,
        cur_icon_sm: curSmLite,
        cur_status: "Swap",
        cur_to: "Oxb9a9...4a49a6",
        cur_val: "+0.0054",
        cur_cur: "ETH",
        cur_progress: "Succeed",
        cur_date: new Date('Jan 19, 2023 00:00:00').getTime(),
        cur_target: "send"
    },
    {
        cur_icon: <IconSwap />,
        cur_icon_sm: curSmAval,
        cur_status: "Swap",
        cur_to: "Oxb9a9...4a49a6",
        cur_val: "+0.0054",
        cur_cur: "ETH",
        cur_progress: "Succeed",
        cur_date: new Date('Jan 19, 2023 00:00:00').getTime(),
        cur_target: "send"
    },
    {
        cur_icon: <IconSwap />,
        cur_icon_sm: curSmLite,
        cur_status: "Swap",
        cur_to: "Oxb9a9...4a49a6",
        cur_val: "+0.0054",
        cur_cur: "ETH",
        cur_progress: "Succeed",
        cur_date: new Date('Jan 19, 2023 00:00:00').getTime(),
        cur_target: "send"
    },
]