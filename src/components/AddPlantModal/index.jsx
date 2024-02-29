import { Modal, DatePicker, Space } from 'antd';

// internal imports
import SearchBar from "../SearchBar";
import PlantCard from '../PlantCard';

function AddPlantModal( {isModalOpen, toggleModal} ) {

  // plant variable for dev testing
  const plant = {
    name: "Fiddle Leaf Fig Tree",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicvOgUqADLbz5MRj1Xgn0Z-RwzLrc3ZTnyQ&usqp=CAU"
  } 


  const handleOk = () => {
    toggleModal(false);
    // todo: function to add new plant to collection

  };

  const handleCancel = () => {
    toggleModal(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };


  return (
    <>
      <Modal title="Add New Plant" 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      okText="Add Plant">
        {/* insert SEARCH BAR here */}
        <SearchBar />

        <p>Date of collection</p>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>

        <PlantCard plant={plant} key="1" />

      </Modal>
    </>
  );

}

export default AddPlantModal;