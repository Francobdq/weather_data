import sunnyBackground from './../assets/backgrounds/sunny.jpg';
import semiCloudyBackground from './../assets/backgrounds/semi-cloudy.jpg';
import cloudyBackground from './../assets/backgrounds/cloudy.jpg';
import thunderStormBackground from './../assets/backgrounds/thunderstorm.jpg';

// Los datos para saber que imagen poner segun la nubocidad ( ( nubocidad <= maxRange ) => imagen )


const backgroundData = [
    {
        maxRange: 10,
        image: sunnyBackground
    },
    {
        maxRange: 30,
        image: semiCloudyBackground
    },
    {
        maxRange: 50,
        image: cloudyBackground
    },
    {
        maxRange: 100,
        image: thunderStormBackground
    }
];
export default backgroundData;