import { useNavigate } from 'react-router-dom';
import { Modal, DatePicker, Space } from 'antd';

// internal imports
import SearchBar from "../SearchBar";
import PlantCard from '../PlantCard';

function AddPlantModal( {addPlantModal, toggleAddPlantModal} ) {

  const navigate = useNavigate();

  const visitExplorePage = () => {
    toggleAddPlantModal(false);
    // redirect to Explore page
    navigate('/explore');
  };

  const handleCancel = () => {
    toggleAddPlantModal(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Modal title="Add New Plant" 
      open={addPlantModal} 
      onOk={visitExplorePage} 
      onCancel={handleCancel}
      okText="Visit Explore Page">
        {/* insert SEARCH BAR here */}
        
        {/* 

        <p>Date of collection</p>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space> */}

        {/* <PlantCard plant={plant}/>  */}

        <p>Visit the Explore page to add new plants!</p>

      </Modal>
    </>
  );

}

export default AddPlantModal;