import React, { FC, PropsWithChildren, useContext, useState } from 'react';
import { Form, Input, message, Modal } from "antd";
import CrossIcon from "../../assets/icons/common/CrossIcon";
import GoldButton from "../common/GoldButton";
import { post } from "../../api/request";

const Context = React.createContext<any>(null);

const useLeaveMessage = () => {

  const {
    setIsOpen,
    setSubject
  } = useContext<any>(Context);

  return (isOpen: any, subject?: any) => {
    setIsOpen(isOpen)
    setSubject(subject)
  };
}

const LeaveMessageController: FC<PropsWithChildren<any>> = ({ children }) => {

  const [isLoading, setIsLoading] = useState<any>(false);
  const [isOpen, setIsOpen] = useState<any>();
  const [subject, setSubject] = useState<any>();
  const [isError, setIsError] = useState<any>(false);

  console.log('subject')
  console.log(subject)
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const [form] = Form.useForm();

  const onFinishAuth = (values: any) => {
    setIsError(false)
    setIsLoading(true)
    form.resetFields()

    function generateUnitTag(id = 0) {
      let globalCount = 0;

      globalCount += 1;

      return `wpcf7-f${Math.abs(id)}-o${globalCount}`;
    }

    const bodyFormData = new FormData();
    bodyFormData.append('your-name', values?.name);
    bodyFormData.append('your-phone', values?.name);
    if (subject){
      bodyFormData.append('your-subject', subject);
    }
    bodyFormData.append('_wpcf7_unit_tag', generateUnitTag());


    post('wp-json/contact-form-7/v1/contact-forms/118/feedback', bodyFormData)
      .then(() => {
        form.resetFields()
        setSubject('')
        message.success('Ваш запрос принят в обработку')
      })
      .catch((e) => {
        message.error('Произошла ошибка при отправки офрмы')
      })
      .finally(() => {
        setIsLoading(false)
      })

  }

  return (
    <Context.Provider value={{ setIsOpen, setSubject }}>
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
          <CrossIcon />
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
              isLoading={isLoading}
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

export { LeaveMessageController, useLeaveMessage };
