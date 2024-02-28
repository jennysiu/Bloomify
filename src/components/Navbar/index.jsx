import './index.css'
import '../../Pages/Dashboard'
import '../../Pages/Explore'
import '../../Pages/MyPlants'
import '../../Pages/WateringLog'
import PlantCard from '../PlantCard'

function Navbar() {

    return (
        <>
        <h1>Bloomify / Project 2 Navbar</h1>
        <a href='/dashboard'>Dashboard</a>
        <br></br>
        <a href='/explore'>Explore</a>
        <br></br>
        <a href='/my-plants'>My Plants</a>
        <br></br>
        <a href='/watering-log'>Watering Log</a>
        </>
    )
}

export default Navbar
