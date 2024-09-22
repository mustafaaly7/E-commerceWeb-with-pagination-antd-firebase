import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const CheckoutModal = ({ showModal,
  handleOk,
  handleCancel, isModalOpen,
  setIsModalOpen }) => {
  
  return (
    <>

      <Modal title="Before U checkout" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>



        <div className=" flex flex-col gap-10 justify-center  items-center my-5">
          <Button className='text-3xl font-bold'>Signup</Button>
          <h1 className='text-3xl font-bold'>OR</h1>
          <Button className='text-3xl font-bold'>Continue as a Guest </Button>

        </div>












      </Modal>
    </>
  );
};
export default CheckoutModal;


