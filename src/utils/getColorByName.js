export const getColorByName = (name) => {    
    if (!name) return ''
    if(name.slice(0,1)  === "$" ) name = "$";

    switch (name) {
      case "Flexible":
        return "hsla(211, 94%, 94%, 1)";
      case "Project-Based" && "Contract":
        return "hsla(222, 100%, 95%, 1)";
      case "Remotely":
        return "hsla(246, 90%, 96%, 1)";
      case "Partial"  && "Part-time":
        return "hsla(54, 95%, 85%, 1)";
      case "Full time" && "Full-time":
        return "hsla(154, 61%, 92%, 1)";
      case "$":
        return "hsla(211, 94%, 94%, 1)";
      case "100%":
        return "#DEF7EC";
      case "80%":
        return "#E1EFFE";
      default:
        return "hsla(220, 14%, 96%, 1)";
    }
};


export const getColorByStatusName = (status) => {
  switch (status) {
    case "Waiting in queue":
      return "hsla(54, 95%, 85%, 1)";
    case "Sent":
      return "hsla(154, 61%, 92%, 1)";
    default:
      return "hsla(220, 14%, 96%, 1)";
  }
}

export const getColorByCircleStatus = (status) => {
  switch (status){
    case "Waiting in queue":
      return "hsla(47, 96%, 53%, 1)";
    case "Sent":
      return "hsla(160, 84%, 34%, 1)";
    default:
      return "hsla(220, 14%, 96%, 1)";
  }
}

export const getColorByDescriptionStatus = (status) => {
  switch (status){
    case "Waiting in queue":
      return "hsla(25, 71%, 26%, 1)";
    case "Sent":
      return "hsla(164, 93%, 17%, 1)";
    default:
      return "hsla(220, 14%, 96%, 1)";
  }
}
