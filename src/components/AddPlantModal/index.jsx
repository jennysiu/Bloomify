import SearchBar from "../SearchBar/index";
import { Modal, DatePicker, Space } from 'antd';


function AddPlantModal( {isModalOpen, toggleModal} ) {

  const handleOk = () => {
    toggleModal(false);
  };

  const handleCancel = () => {
    toggleModal(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


return (
  <>
    <Modal title="Basic Modal" 
    open={isModalOpen} 
    onOk={handleOk} 
    onCancel={handleCancel}
    okText="Add Plant">
      {/* insert SEARCH BAR here */}
      <SearchBar />

      <

      <p>Date of collection</p>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>

    </Modal>
  </>
);

}

export default AddPlantModal;