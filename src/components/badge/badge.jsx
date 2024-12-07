import {getColorByName} from "../../utils/getColorByName"
import { getIconByName } from "../../utils/getIconByName";

export default function Badge({name, city, time, team}){
    const badgeColor = getColorByName(name);
    const icon = getIconByName(name, city, time, team);
    return( 
        <div 
            className="badge" 
            style={{
                backgroundColor:badgeColor,
            }}
        >
            {
                icon === undefined ? null : <img className="icon" src={icon} alt="icon_operating_mode" />
            }
            <p className="description">{name}</p>
        </div>        
    )
}