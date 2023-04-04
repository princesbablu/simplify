import React from 'react';
import Layout from '../../components/Layout';
import Header from './Header';

import { ReactComponent as IconXCircle } from '../../assets/img/icon-xcircle.svg';
import { ReactComponent as IconArrowRight } from '../../assets/img/icon-arrow-right.svg';

const Password = () => {
    return (
        <Layout>
            <Header />
            <div className="px-8">
                <div className="text-center text-xl mb-3.5 mt-3.5">Set passcode</div>
                <div className="text-center text-sm mb-5 mt-3.5 text-[#919291]">
                    Protect your wallet by setting <br /> a passcode
                </div>

                <div className="flex items-center justify-center gap-6">
                    <input type="text" maxLength={1} className="h-4 w-4 border border-[#303136] bg-transparent rounded-full text-center text-xs" />
                    <input type="text" maxLength={1} className="h-4 w-4 border border-[#303136] bg-transparent rounded-full text-center text-xs" />
                    <input type="text" maxLength={1} className="h-4 w-4 border border-[#303136] bg-transparent rounded-full text-center text-xs" />
                    <input type="text" maxLength={1} className="h-4 w-4 border border-[#303136] bg-transparent rounded-full text-center text-xs" />
                    <input type="text" maxLength={1} className="h-4 w-4 border border-[#303136] bg-transparent rounded-full text-center text-xs" />
                </div>

                <div className="flex flex-wrap gap-y-10 items-items justify-center px-5 cursor-pointer mt-28">
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">1</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">2</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">3</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">4</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">5</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">6</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">7</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">8</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">9</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold flex justify-center items-center mt-2.5"><IconXCircle /></div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold">0</div>
                    </div>
                    <div className="w-1/3">
                        <div className="text-center text-[30px] hover:text-primary font-bold flex justify-center items-center mt-2"><IconArrowRight /></div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Password