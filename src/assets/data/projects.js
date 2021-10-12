import ReactDictionary from "../images/react-dictionary.png";
import ReactWeather from "../images/react-weather.png";
import VanillaJSWeather from "../images/vanilla-js-weather.png";

const projects = [
  {
    id: "VanillaApp",
    name: "Vanilla JS Weather app",
    desc: "My very first project: a weather app built with Vanilla JS and a weather API.",
    img: VanillaJSWeather,
    href: "https://nostalgic-raman-1a34c8.netlify.app/",
  },
  {
    id: "ReactWeather",
    name: "React Weather app",
    desc: "Improved my first weather app by building it with React this time, using the same weather API.",
    img: ReactWeather,
    href: "https://vigorous-ardinghelli-6f16a0.netlify.app/",
  },
  {
    id: "ReactDictionary",
    name: "React Dictionary app",
    desc: "Played around with two APIs this time, to build a dictionary app with images based on the search.",
    img: ReactDictionary,
    href: "https://peaceful-perlman-76f930.netlify.app/",
  },
];

export default projects;
