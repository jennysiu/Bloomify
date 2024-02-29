import React from 'react';
import DashPlantCard from '../components/DashPlantCard';

const Dashboard = () => {
  const images = [
    'https://foli.ca/cdn/shop/products/CPCo-0366_b4e112b7-aab7-44bd-b65f-ad033ba9bc88.jpg?v=1705459613&width=4096',
    'https://blog.fnp.ae/wp-content/uploads/2019/10/Jupiter-Planter-ZZ.jpg',
    'https://i0.wp.com/www.barossanursery.com.au/wp-content/uploads/2018/06/Indoor-1-696x696.jpg?ssl=1',
    'https://hips.hearstapps.com/hmg-prod/images/screenshot-2023-06-13-at-1-52-12-pm-6488ad58e6ee6.png?crop=1xw:1xh;center,top&resize=980:*',
    'https://media.self.com/photos/614387f179b69b63faf9ea2c/3:4/w_960,c_limit/pepperomiasill23.png',
    'https://www.nivasa.lk/wp-content/uploads/2012/11/100487315.jpg.rendition.largest.jpg',
    'https://bosque.com.au/cdn/shop/products/DSC_8570_400x.jpg?v=1649375769',
    'https://media.self.com/photos/614387f179b69b63faf9ea2c/3:4/w_960,c_limit/pepperomiasill23.png',
  ];

  return (
    <div>
      <h1>Welcome back, Joan!</h1>
      <DashPlantCard images={images} />
      {/*TODO: Add other dashboard content*/}
    </div>
  );
};

export default Dashboard;