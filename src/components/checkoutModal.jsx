import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { auth } from '../utilities/firebase';

const CheckoutModal = ({ showModal,
  handleOk,
  handleCancel, isModalOpen,
  setIsModalOpen,checkoutOrder }) => {
    useEffect(() => {
      return setContinueasGuest(false);
    }, []);
  const isLogin  = auth.currentUser
const[continueAsGuest , setContinueasGuest] =useState(false)

  return (
    <>

      <Modal title="Before U checkout" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>

{!isLogin && !continueAsGuest &&(


        <div className=" flex flex-col gap-10 justify-center  items-center my-5">
          <Button className='text-3xl font-bold'>Signup</Button>
          <h1 className='text-3xl font-bold'>OR</h1>
          <Button className='text-3xl font-bold' onClick={()=> setContinueasGuest(true)}>Continue as a Guest </Button>

        </div>
) }

{(isLogin ||
        continueAsGuest) && (
          <Form onFinish={checkoutOrder} layout="vertical">
            <Form.Item name={"name"} required label={"Your Name"}>
              <Input type='text' />
            </Form.Item>
            <Form.Item name={"email"} required label={"Email"}>
              <Input type="email" />
            </Form.Item>
            <Form.Item name={"number"} required label={"Phone Number"}>
              <Input type="number" />
            </Form.Item>
            <Form.Item required name={"address"} label={"Address"}>
              <Input.TextArea placeholder="Address" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
    










      </Modal>
    </>
  );
};
export default CheckoutModal;


