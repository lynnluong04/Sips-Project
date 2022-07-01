//components/Splash
import { Link } from "react-router-dom";

const Splash = () => {

    return (
        <div id="categories-container">
            <h2>Categories</h2>
            <div className="image-container">
                <Link to="/coffee">
                    Coffee
                    <img className="category-image" src='coffe.jpg'></img>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/tea">
                    Tea
                    <img className="category-image" src='https://images.ctfassets.net/e8bhhtr91vp3/5p5ye9GiRlbyiq398i29KR/40899b6320bae44a072e46193af2f8cf/worldtea_teatype_black_tea_img1_1460x593-thumbnail.jpg.ulenscale.webp?w=800&q=100'></img>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/bubble-tea">Bubble Tea</Link>
            </div>
            <div className="image-container">
                <Link to="/bars">Bars</Link>
            </div>
            <div className="image-container">
                <Link to="/smoothie">Smoothie</Link>
            </div>




        </div>
    )
}

export default Splash;
