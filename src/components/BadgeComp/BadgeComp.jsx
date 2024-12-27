import {getColorByName} from "../../utils/getColorByName"

export default function BadgeComp({item, index}){
    const {name, icon} = item;
    const badgeColor = getColorByName(name);
    return( 
        <div 
            className="badge" 
            key={index}
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