import image1 from "../assets/backgroundImages/image1.jpg";
import image2 from "../assets/backgroundImages/image2.jpg";
import image3 from "../assets/backgroundImages/image3.jpg";
import image4 from "../assets/backgroundImages/image4.jpg";
import image5 from "../assets/backgroundImages/image5.jpg";

const getRandomImagePath = () => {
    const imagePaths = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ]; // Array of local image paths
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
};

export default getRandomImagePath;
