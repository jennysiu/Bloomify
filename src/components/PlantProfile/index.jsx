import React, { useState } from 'react';
import { Tabs, Divider, Space, Tag, Button, Modal } from 'antd';

// things to render
  // name
  // scientific name
  // image
  // description
  // hardiness
  // water
  // type
  // sunlight

  // cycle

  // tab with extra info (care details in more depth)
  // tab with care instructionsbest time to water\
  // watering_period
  //   "watering_general_benchmark": {
    // "value": 5-7,
    // "unit": "days"
  //   "pruning_month": [
  //     "March",
  //     "April"
  // ],
  //       "propagation":[
//     "seed",
//     "cutting"
// ],
// "propagation":[
//   "seed",
//   "cutting"
// ],
// "tropical": false,
// "poisonous_to_pets": false,
// "growth_rate": "High",




function PlantProfile({ selectedPlantModalVisible, selectedPlantModalPlant, onClose }) {
  console.log(selectedPlantModalVisible)
  console.log(selectedPlantModalPlant)

  let plantData = selectedPlantModalPlant;

  const [open, setOpen] = useState(false); 
  const isIndoor = "Indoor";
  
  const handleOk = () => {
    onClose();
    // todo: function to add new plant to collection

  };

  const handleCancel = () => {
    onClose();
  };

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  // todo: render water levels
  // todo: function to render   "maintenance": "Low", tag
  // todo: function to render indoor/outdoor tag - magenta
  function renderIsIndoorTag() {
    return (
      <Tag bordered={false} color="success">
      {isIndoor}
      </Tag>
    )
  }
  
  return (
    <>

    <Modal
    
    title={plantData.common_name}
    centered
    open={selectedPlantModalVisible}
    onOk={handleOk} 
    onCancel={handleCancel}
    width={1000}
    >

{/* <img src={plantData.default_image.regular_url} alt={`Picture of ${plantData.common_name} plant`} style={{ maxWidth: '100%' }} /> */}

    <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: 'Basic Overview',
            key: '1',
            children: 'Content of Tab Pane Overview',
          },
          {
            label: 'Extra Care',
            key: '2',
            children: 'Content of Tab Pane Care',
          },
          {
            label: 'Growth',
            key: '3',
            children: 'Content of Tab Pane Gallery',
          }
        ]}
      />

      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>



  <Divider />

  <Space size={[0, 'small']} wrap>


    <Tag bordered={false} color="magenta">
      magenta
    </Tag>
    <Tag bordered={false} color="geekblue">
      geekblue
    </Tag>

  </Space>

  </>

  
  );

  

}

export default PlantProfile;