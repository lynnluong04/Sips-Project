//components/Splash
import { Link } from "react-router-dom";
import './Splash.css'

const Splash = ({homeNav}) => {

homeNav();

    return (
        <div id="categories-container">
            <h2 className="home">Find the best drinks in NY, New York</h2>
            <div className="categories links">
                <div className="image-container">
                    <Link to="/coffee">
                        <img className="category-image" src='https://www.linkpicture.com/q/coffee_3.jpg'></img>
                        <div className="category label">Coffee</div>
                    </Link>
                </div>
                <div className="image-container">
                    <Link to="/tea">
                        <img className="category-image" src='https://www.linkpicture.com/q/tea.webp'></img>
                        <div className="category label">Tea</div>
                    </Link>
                </div>
                <div className="image-container">
                    <Link to="/bubble-tea">
                        <img className="category-image" src='https://www.linkpicture.com/q/bubble_tea_recipe_062817.webp'></img>
                        <div className="category label">Bubble Tea</div>                    </Link>
                </div>
                <div className="image-container">
                    <Link to="/bars">
                        <img className="category-image" src='https://www.linkpicture.com/q/cheap-drinks.jpeg'></img>
                        <div className="category label">Bar</div>
                    </Link>
                </div>
                <div className="image-container">
                    <Link to="/smoothie">
                        <img className="category-image" src='https://www.linkpicture.com/q/toddler-smoothies-in-mason-jars.jpeg'></img>
                        <div className="category label">Smoothies</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Splash;
