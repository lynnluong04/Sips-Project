//components/Splash
import { Link } from "react-router-dom";
import './Splash.css'
const Splash = () => {

    return (
        <div id="categories-container">
            <h2>Categories</h2>
            <div className="image-container">
                <Link to="/coffee">
                    Coffee
                    <img className="category-image" src='https://www.linkpicture.com/q/coffee_3.jpg'></img>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/tea">
                    Tea
                    <img className="category-image" src='https://www.linkpicture.com/q/tea.jpg'></img>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/bubble-tea">Bubble Tea
                    <img className="category-image" src='https://www.linkpicture.com/q/bubble_tea_recipe_062817.webp'></img>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/bars">Bars
                    <img className="category-image" src='https://www.linkpicture.com/q/cheap-drinks.jpeg'></img>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/smoothie">Smoothie
                    <img className="category-image" src='https://www.linkpicture.com/q/toddler-smoothies-in-mason-jars.jpeg'></img>
                </Link>
            </div>




        </div>
    )
}

export default Splash;
