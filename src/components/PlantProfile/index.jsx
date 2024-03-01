import React, { useState } from 'react';
import { Tabs, Divider, Space, Tag, Button, Modal } from 'antd';

// dont think the pet-friendly property renders correctly

function PlantProfile({ selectedPlantModalVisible, selectedPlantModalPlant, onClose }) {
  let plantData = selectedPlantModalPlant;
  
  const isIndoor = "Indoor";
  
  const handleClose = () => {
    onClose();    
  };
  
  return (
    <>

    <Modal
    title={plantData.common_name.charAt(0).toUpperCase() + plantData.common_name.slice(1)}
    centered
    open={selectedPlantModalVisible}
    onCancel={handleClose}
    width={1000}
    footer={[
      <Button key="submit" type="primary" onClick={handleClose}>
        Close
      </Button>,
    ]}
    >

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
              {plantData.indoor && (
                <Tag bordered={false} color="green">
                  {isIndoor}
                </Tag>
              )}
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
    </Modal>
    </>
  );
}

export default PlantProfile;