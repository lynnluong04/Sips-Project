//components/Splash
import { Link } from "react-router-dom";

const Splash = () => {

    return (
        <>
            <div>HOME</div>
          
            <Link to="/coffee">Coffee</Link>
            <Link to="/tea">Tea</Link>
            <Link to="/bubble-tea">Bubble Tea</Link>
            <Link to="/bars">Bars</Link>
            <Link to="/smoothie">Smoothie</Link>
        </>
    )
}

export default Splash;
