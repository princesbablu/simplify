import React from 'react'

import { ReactComponent as IconArrowDown } from '../../assets/img/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../../assets/img/icon-arrow-up.svg';

const Review = () => {
    return (
        <div className="flex justify-between mb-10">
            <div>
                <div className="flex gap-3.5">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#5DB26B] rounded-lg">
                        <IconArrowDown />
                    </div>
                    <div>
                        <div className="text-sm text-[#858585]">Recieved (In)</div>
                        <div className="text-xl font-medium text-white">$5,292.62</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex gap-3.5">
                    <div className="h-12 w-12 flex items-center justify-center bg-[#E84142] rounded-lg">
                        <IconArrowUp />
                    </div>
                    <div>
                        <div className="text-sm text-[#858585]">Sent (Out)</div>
                        <div className="text-xl font-medium text-white">$4,425.17</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review