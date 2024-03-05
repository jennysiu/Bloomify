import React, { useEffect } from 'react';
import { Card } from 'antd';
import placeholderPlantImage from '../../assets/images/placeholder-img.png';
import './style.css'
import plantDetailsFetch from '../../utils/plantDetailsFetch'




const PlantOfTheDay = () => {
    
   runOncePerDay  

    useEffect(() => {
       
    });


    function hasOneDayPassed() {
        var date = new Date().toLocaleDateString();

        if (localStorage.yourapp_date == date)
            return false;

        localStorage.yourapp_date = date;
        return true;
    }



    function runOncePerDay() {
        if (!hasOneDayPassed()) return false;

        plantDetailsFetch.getPlantDetails(Math.floor(Math.random() * 3000))
            .then((data) => {
                console.log(data)
                localStorage.setItem("nameKey", data.data.common_name)
                localStorage.setItem("descKey", data.data.type)
                localStorage.setItem("imgKey", data.data.default_image.original_url)
                this.forceUpdate();
            })
            .catch(() => {
                console.error();
            });
    }



    return (
        <Card
            title="Plant of the Day"
            cover={<img alt={localStorage.getItem("nameKey")} src={localStorage.getItem("imgKey")} className="plant-image-cover" />}

        >
            <Card.Meta title={localStorage.getItem("nameKey")} description={localStorage.getItem("descKey")} />
        </Card>
    );
};

export default PlantOfTheDay;