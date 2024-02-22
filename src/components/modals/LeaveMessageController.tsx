import React, {FC, PropsWithChildren, useContext, useEffect, useRef, useState} from 'react';
import {Checkbox, Form, Input, message, Modal} from "antd";
import CrossIcon from "../../assets/icons/common/CrossIcon";
import GoldButton from "../common/GoldButton";

const Context = React.createContext<any>(null);

const useLeaveMessage = () => {

    const {
        setIsOpen,
    } = useContext<any>(Context);

    return (isOpen: any) => {
        setIsOpen(isOpen)
    };
}

const LeaveMessageController: FC<PropsWithChildren<any>> = ({children}) => {

    const [isOpen, setIsOpen] = useState<any>();
    const [isError, setIsError] = useState<any>(false);

    const handleCloseModal = () => {
        setIsOpen(false)
    }

    const [form] = Form.useForm();

    const onFinishAuth = (values: any) => {
        setIsError(false)
        form.resetFields()
    }

    return (
        <Context.Provider value={{setIsOpen}}>
            {children}
            <Modal
                className="leave-message-modal"
                visible={isOpen}
                onCancel={handleCloseModal}
                footer={null}
                width="450px"
                centered
                bodyStyle={{
                    minHeight: '400px',
                    padding: '60px 45px',
                    backgroundColor: 'rgba(9, 5, 47, 1)',
                    borderRadius: 20
                }}
            >
                <div className="leave-message-modal-close" onClick={handleCloseModal}>
                    <CrossIcon/>
                </div>
                <h2>
                    Оставьте контакты
                </h2>
                <Form
                    onFinish={onFinishAuth}
                    onFinishFailed={() => setIsError(true)}
                    layout={"vertical"}
                    form={form}
                >
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'r'
                            },
                        ]}
                    >
                        <Input
                            placeholder={'Ваше имя'}
                            style={{
                                height: 54
                            }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            placeholder={'Ваш телефон'}
                            style={{
                                height: 54
                            }}
                        />
                    </Form.Item>

                    <div className="leave-message-modal-form-button">
                        <GoldButton
                            padding={'16px 0'}
                            width={'100%'}
                            title={'Отправить'}
                        />
                    </div>

                </Form>
                <p>
                    Отправляя форму, вы соглашаетесь
                    с политикой конфиденциальности.
                </p>
                {isError &&
                    <div className="leave-message-modal-form-error">
                        Проверьте правильность заполнения
                        полей
                    </div>
                }
            </Modal>
        </Context.Provider>
    );
};

export {LeaveMessageController, useLeaveMessage};
