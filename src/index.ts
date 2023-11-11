import CustomApp from './app';
import './style.scss';

console.log("Hello World! ",CustomApp);

CustomApp.addPage("Ciao");

document.getElementById("renderblock").innerHTML = "Page number is "+CustomApp.getPage();