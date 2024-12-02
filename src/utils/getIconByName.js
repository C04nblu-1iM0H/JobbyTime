import fulltime from '../assets/board/fulltime.svg';
import partial from '../assets/board/partial.svg';
import remotely from '../assets/board/remotely.svg';
import project from '../assets/board/project.svg';
import flexibel from '../assets/board/flexibel.svg';
import mark from '../assets/board/mark.svg';
import watch from '../assets/board/time.svg';
import cash from '../assets/job/cash.svg';
import smile from '../assets/resume/smile.svg';
import good from '../assets/resume/good.svg';


export function getIconByName(name, city, time){
    if(name.slice(0,1)  === "$" ) name = "$";    
    if(city) name = city;
    if(time) name = time;

    switch (name) {
        case "Flexible":
          return flexibel;
        case "Project-Based" && "Contract":
          return project;
        case "Remotely":
          return remotely;
        case "Partial" && "Part-time":
          return partial;
        case "Full time" && "Full-time":
          return fulltime;
        case "$":
          return cash;
        case "city":
            return mark;
        case "time":
            return watch;
        case "100%":
          return smile;
        case "80%":
          return good;
        default:
          return null;
      }
}