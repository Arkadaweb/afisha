import React from 'react';
import GoldButton from "./GoldButton";
import {useLeaveMessage} from "../modals/LeaveMessageController";

const LeaveMessageBlock = () => {

    const uLeaveMessage = useLeaveMessage()

    return (
        <div className='leave-message-block'>
            <div className="leave-message-block-main">
                <p>
                    Появились вопросы? Оставьте заявку, и мы ответим!
                </p>

                <GoldButton
                    onClick={() => uLeaveMessage(true)}
                    title={'Оставить заявку'}
                    padding={'22px 40px'}
                    isTransperent={true}
                    isWithBorder={true}
                />
            </div>
            <div className="leave-message-block-empty">

            </div>
        </div>
    );
};

export default LeaveMessageBlock;
