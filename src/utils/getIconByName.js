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
import teams from '../assets/job/team.svg';
import smileStatus from '../assets/onboard/smile_status.svg';
import goodStatus from '../assets/onboard/good_status.svg';
import starStatus from '../assets/onboard/star_status.svg';

export function getIconByName(name, city, time, team){
    if (!name) return '';
    if(name.slice(0,1)  === "$" ) name = "$";    
    if(city) name = city;
    if(time) name = time;
    if(team) name = team;

    switch (name) {
        case "Flexible":
          return flexibel;
        case "Project-Based":
          return project;
        case "Contract":
          return project;
        case "Remotely":
          return remotely;
        case "Third Party":
          return remotely;
        case "Partial":
          return partial;
        case "Part-time":
          return partial;
        case "Full time":
          return fulltime;
        case "Full-time":
          return fulltime;
        case "$":
          return cash;
        case "city":
            return mark;
        case "time":
            return watch;
        case "team":
            return teams;
        case "100%":
          return smile;
        case "80%":
          return good;
        case "Great":
          return smileStatus;
        case "Well Done":
          return goodStatus;
        case "You are on the right way":
          return starStatus;
        default:
          return null;
      }
}