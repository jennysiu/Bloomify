import React, { useState } from 'react';
import SearchBar from "../SearchBar/index";
import { Modal, Button } from 'antd';


function AddPlantModal( {isModalOpen, toggleModal} ) {

  const handleOk = () => {
    toggleModal(false);
  };

  const handleCancel = () => {
    toggleModal(false);
  };



return (
  <>
    <Modal title="Basic Modal" 
    open={isModalOpen} 
    onOk={handleOk} 
    onCancel={handleCancel}>
      {/* insert SEARCH BAR here */}
      <SearchBar />
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </>
);

}

export default AddPlantModal;