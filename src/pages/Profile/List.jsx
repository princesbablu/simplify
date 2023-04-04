import { list } from '../../utils/list';
import { Link } from 'react-router-dom';

const List = () => {
    return (
        <>
            {
                list.map((el, i) => {
                    return (
                        <Link to="/profile/details" className="group" key={i}>
                            <div className="flex items-center gap-3 py-3.5 cursor-pointer">
                                <div className={`h-14 w-14 rounded-2xl ${el.cur_color} flex items-center justify-center`}>
                                    <img src={el.cur_icon} alt="" />
                                </div>
                                <div>
                                    <div className="flex items-center justify-between font-medium w-28">
                                        <span className="leading-none whitespace-nowrap group-hover:text-[#BE56F1]">{el.cur_name}</span>
                                        <span className="flex items-center justify-center h-[18px] w-[18px] rounded-sm ml-auto bg-[#383838]">
                                            <img src={el.cur_icon_sm} alt="" />
                                        </span>
                                    </div>
                                    <div className="text-[15px] mt-0.5 flex gap-2">
                                        <span className="text-[#9DA3B7]">{el.cur_val}</span>
                                        <span className="text-[#63A460]">{el.cur_status}</span>
                                    </div>
                                </div>

                                <div className="w-20">
                                    {el.cur_chart}
                                </div>

                                <div className="text-right">
                                    <div className="text-sm font-bold mb-0.5">{el.cur_usdt}</div>
                                    <div className="text-xs text-[#9DA3B7]">{el.cur_fix}</div>
                                </div>
                            </div>
                            <div className="h-px bg-[#1F1F1F] my-2 group-last:hidden"></div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default List