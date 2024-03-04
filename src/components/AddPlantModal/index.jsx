import { useNavigate } from 'react-router-dom';
import { Modal, DatePicker, Space } from 'antd';

// internal imports
import SearchBar from "../SearchBar";
import PlantCard from '../PlantCard';

function AddPlantModal( {addPlantModal, toggleAddPlantModal} ) {

  const navigate = useNavigate();

  // plant variable for dev testing
  const plant = {
    name: "Fiddle Leaf Fig Tree",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRicvOgUqADLbz5MRj1Xgn0Z-RwzLrc3ZTnyQ&usqp=CAU"
  } 

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
        <SearchBar />
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