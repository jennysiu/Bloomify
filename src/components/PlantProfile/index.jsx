import React, { useState } from 'react';
import { Tabs, Divider, Space, Tag, Button, Modal, Popconfirm, Row, Col } from 'antd';

// internal imports
import "./style.css"

function PlantProfile({ selectedPlantModalVisible, togglePlantProfileVisibility, selectedPlantModalPlant, myPlants, setMyPlants }) {
  let plantData = selectedPlantModalPlant;

  console.log(plantData.type);
  
  const handleClose = () => {
    togglePlantProfileVisibility(false);
  };
  
  const handleRemovePlant = () => {
    togglePlantProfileVisibility(false);
    // logic here to remove from plant collection (local storage)
    if (plantData) {
        let updatedPlantsArray = myPlants.filter(function(plant) {
          return plant.common_name !== plantData.common_name;
        });
        setMyPlants(updatedPlantsArray);
        localStorage.setItem("myPlants", JSON.stringify(updatedPlantsArray));
      }
  };
  
  return (
    <>
    <Modal className='plant-profile-modal'
    id="plant-profile-modal"
    title=""
    centered
    open={selectedPlantModalVisible}
    onCancel={handleClose}
    width={850}
    footer={[
      <Popconfirm
      key="remove-plant"
      title="Remove plant"
      description="Are you sure to remove this plant from your sanctuary?"
      onConfirm={handleRemovePlant}
      onCancel={() => console.log("Canceled removal")}
      okText="Yes, remove plant"
      cancelText="No"
      >
      <Button key="popconfirm" danger>Remove Plant</Button>
      </Popconfirm>,
      <Button key="submit" type="primary" onClick={handleClose}>
      Close
      </Button>
    ]}
    >

    <div className='plant-profile-modal-content'>
        <h1 className='plant-name'>{plantData.common_name.charAt(0).toUpperCase() + plantData.common_name.slice(1)}</h1>
        <h3 className='scientific-name'>({plantData.scientific_name})</h3>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img src={plantData.default_image.small_url} alt={`Picture of ${plantData.common_name} plant`} className="plant-img" style={{ maxWidth: '100%', borderRadius: '2%' }} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Tabs
              className='plant-profile-tabs'
              defaultActiveKey="1"
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

                    <p>Watering frequency: {plantData.watering_general_benchmark.value} {plantData.watering_general_benchmark.unit}</p>
                    <p>Sunlight: {plantData.sunlight && plantData.sunlight.map((s, index) => (
                    <span key={index}>{s.charAt(0).toUpperCase() + s.slice(1)}{index < plantData.sunlight.length - 1 ? ', ' : ''}</span>
                    ))}
                    </p>
                    <p>Cycle: {plantData.cycle}</p> 
                    <p>Sunlight: {plantData.origin && plantData.origin.map((s, index) => (
                    <span key={index}>{s.charAt(0).toUpperCase() + s.slice(1)}{index < plantData.origin.length - 1 ? ', ' : ''}</span>
                    ))}
                    </p>
                  </div>),
                },
                {
                  label: 'Care & growth',
                  key: '2',
                  children: (
                    <div>
                      <h4 className='info-sub-label'>Care</h4>
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

                      <h4 className='info-sub-label'>Growth</h4>
                      <p>Cycle: {plantData.cycle}</p> 
                      <p>Flowering season: {plantData.flowering_season ? plantData.flowering_season: "n/a"}</p>
                      <p>Growth rate: {
                        plantData.growth_rate === "Low" ? (
                        <Tag bordered={false} color="green"> 
                          Low 
                        </Tag> 
                        ) : 
                        plantData.growth_rate === "Average" ? (
                          <Tag bordered={false} color="blue"> 
                            Average
                          </Tag> 
                        ) : plantData.growth_rate === "High" ? (
                          <Tag bordered={false} color="red"> 
                            High
                          </Tag>
                        ) : null}  
                      </p>    

                      <p>Recommended pruning month: {plantData.pruning_month && plantData.pruning_month.map((s, index) => (
                      <span key={index}>{s}{index < plantData.pruning_month.length - 1 ? ', ' : ''}</span>
                      ))}
                      </p>
                      <p>Propogationg methods: {plantData.propagation && plantData.propagation.map((s, index) => (
                      <span key={index}>{s}{index < plantData.propagation.length - 1 ? ', ' : ''}</span>
                      ))}
                      </p>
                    </div>
                  )
                },
                {
                  label: 'Additional info',
                  key: '3',
                  children: (
                    <div>
                      <p>Scientific name: {plantData.scientific_name}</p> 
                      <p>Family: {plantData.family ? plantData.family  : "N/A"}</p>
                      <p>Type: {plantData.type.charAt(0).toUpperCase() + plantData.type.slice(1)}</p>
                      <p>Description: {plantData.description}</p>
                    </div>
                  )
                }
              ]}
          />
        </Col>
      </Row>
    </div>
    </Modal>
 
    </>
  );
}

export default PlantProfile;