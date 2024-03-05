import React, { useState, useContext } from 'react';
import { Tabs, message, Space, Tag, Button, Modal, Popconfirm } from 'antd';

// internal imports
import { MyPlantsProvider,  MyPlantsContext} from '../../contexts/ContextMyPlants';
import "./style.css"

function NewPlantProfile({ selectedPlantModalVisible, toggleNewPlantProfVisi, selectedPlantModalPlant }) {
  const { myPlants, setMyPlants } = useContext(MyPlantsContext);
  
  let plantData = selectedPlantModalPlant;

  
  const handleClose = () => {
    toggleNewPlantProfVisi(false);
  };
  
  const handleAddPlant = (plantData) => {

    // ensures you can't add 2 of the same plact
    function isEqual(objA, objB) {
      return JSON.stringify(objA) === JSON.stringify(objB);
    }

    if (!myPlants.some(existingPlant => isEqual(existingPlant, plantData))) {
      
    // save to local storage 
    const newMyPlants = [...myPlants || [], plantData]
    setMyPlants(newMyPlants);
    localStorage.setItem("myPlants", JSON.stringify(newMyPlants));
    const mySavedPlants = JSON.parse(localStorage.getItem("myPlants")) || [];
    console.log(mySavedPlants)
    
    // once saved - close modal
    // toggleNewPlantProfVisi(false);
  
    // display message to confirm addition
    success();
    } else {
      error();
    }
  };
  
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully added to your sanctuary',
    });
  }

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Oops! That plant is already in your sanctuary.',
    });
  }

  return (
    <>
    {/* contextholder is for the success message */}
    {contextHolder}

    <Modal className='plant-profile-modal'
    id="plant-profile-modal"
    title={plantData.common_name.charAt(0).toUpperCase() + plantData.common_name.slice(1)}
    centered
    open={selectedPlantModalVisible}
    onCancel={handleClose}
    width={600}
    footer={[
      // <Popconfirm
      // key="add-plant"
      // title="Add Plant"
      // description="Do you want to add this plant to your sanctuary?"
      // onConfirm={handleAddPlant}
      // onCancel={() => console.log("Canceled removal")}
      // okText="Yes, add plant"
      // cancelText="No"
      // >
      <Button key="popconfirm" type="primary" onClick={() => handleAddPlant(plantData)}>Add plant to My Sanctuary </Button>,
      // </Popconfirm>,
      <Button key="submit" type="primary" onClick={handleClose}>
      Close
      </Button>
    ]}
    >

    <div className='plant-profile-modal-content'>
    <img src={plantData.default_image.small_url} alt={`Picture of ${plantData.common_name} plant`} style={{ maxWidth: '100%' }} />
    <Tabs
        defaultActiveKey="1"
        centered
        items={[
          {
            label: 'Basic Overview',
            key: '1',
            children: 
            (<div>
              {/* indoor tag */}
              {plantData.indoor === true ? (
              <Tag bordered={false} color="green">
                Indoor
              </Tag>) 
              : plantData.indoor === false ? (
              <Tag bordered={false} color="magenta">
                Outdoor
              </Tag>)
              : null}
              {/* maintenance tags */}
              {plantData.maintenance === "Low" ? (
                <Tag bordered={false} color="green">
                  Low maintenance
                </Tag>
              ) : plantData.maintenance === "Moderate" ? (
                <Tag bordered={false} color="orange"> 
                  Moderate maintenance 
                </Tag> 
              ) : plantData.maintenance === "High" ? (
                <Tag bordered={false} color="red"> 
                  High maintenance
                </Tag>
              ) : null}   
              {/* watering tag */}
              {plantData.watering === "None" ? (
                <Tag bordered={false} color="green">
                  No watering
                </Tag>
              ) : plantData.watering === "Minimum" ? (
                <Tag bordered={false} color="green"> 
                  Minimum watering 
                </Tag> 
              ) : 
              plantData.watering === "Average" ? (
                <Tag bordered={false} color="blue"> 
                  Average watering 
                </Tag> 
              ) : plantData.watering === "Frequent" ? (
                <Tag bordered={false} color="red"> 
                  Frequent watering
                </Tag>
              ) : null}   

              <p>Watering: every {plantData.watering_general_benchmark.value} {plantData.watering_general_benchmark.unit}</p>
              <p>Sunlight: {plantData.sunlight}</p> 
              <p>Cycle: {plantData.cycle}</p> 
              <p>Origin: {plantData.origin}</p>
            </div>),
          },
          {
            label: 'Care & growth',
            key: '2',
            children: (
              <div>
                <h4>Care</h4>
                <p>Hardiness: {plantData.hardiness.min} - {plantData.hardiness.max}</p>
                <p>Best watering period: {plantData.watering_period ? plantData.watering_period : "n/a"}</p>
                <p>Tropical: {plantData.tropical === "true" ? (
                  <Tag>
                    Yes
                  </Tag>
                  ) : 
                  (<Tag>
                    No
                  </Tag>
                )}</p>

                <h4>Growth</h4>
                <p>Cycle: {plantData.cycle}</p> 
                <p>Flowering season: {plantData.flowering_season}</p>
                <p>Growth rate: {plantData.growth_rate}</p>

                <p>Recommended pruning month: {plantData.pruning_month}</p> 
                <p>Proppogationg: {plantData.propagation} </p> 
              </div>
            )
          },
          {
            label: 'Additional info',
            key: '3',
            children: (
              <div>
                <p>Scientific name: {plantData.scientific_name}</p> 
                <p>Family: {plantData.family}</p>
                <p>Type: {plantData.type}</p> 
                <p>Description: {plantData.description}</p>
              </div>
            )
          }
        ]}
    />
    </div>
    </Modal>
    </>
  );
}


export default NewPlantProfile;