import ReactDictionary from "../images/react-dictionary.png";
import ReactWeather from "../images/react-weather.png";
import VanillaJSWeather from "../images/vanilla-js-weather.png";

const projects = [
  {
    id: "VanillaApp",
    name: "Vanilla JS Weather app",
    desc: "My very first project: a weather app built with Vanilla JS and a weather API.",
    img: VanillaJSWeather,
  },
  {
    id: "ReactWeather",
    name: "React Weather app",
    desc: "Improved my first weather app by building it with React this time, using the same weather API.",
    img: ReactWeather,
  },
  {
    id: "ReactDictionary",
    name: "React Dictionary app",
    desc: "Played around with two APIs this time, to build a dictionary app with images based on the search.",
    img: ReactDictionary,
  },
];

export default projects;
