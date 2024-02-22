import React, {FC, PropsWithChildren, useContext, useEffect, useRef, useState} from 'react';
import {Checkbox, Form, Input, message, Modal} from "antd";

const Context = React.createContext<any>(null);

const useOrderTicket = () => {

    const {
        setState,
    } = useContext<any>(Context);

    return ({isOpen, id}: any) => {
        setState({
            isOpen,
            id
        })
    };
}

const OrderTicketController: FC<PropsWithChildren<any>> = ({children}) => {

    const [state, setState] = useState<any>({
        isOpen: false,
        id: null,
    });

    const handleCloseModal = () => {
        setState({
            isOpen: false,
            id: null,
        })
    }

    return (
        <Context.Provider value={{setState}}>

            {children}
            <Modal
                className={"modal-order-ticket"}
                visible={state.isOpen}
                onCancel={handleCloseModal}
                footer={null}
                width="90vw"
                style={{top: 20}}
                bodyStyle={{height: '80vh'}}
            >
                <iframe
                    src={`https://btickets.ru/widget/${state.id}/scheme`}
                    title="Ваш iframe"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </Modal>
        </Context.Provider>
    );
};

export {OrderTicketController, useOrderTicket};
