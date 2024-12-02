import { AppRouting } from "../../const";
import { getColorByStatusName, getColorByCircleStatus, getColorByDescriptionStatus } from "../../utils/getColorByName"
import './status.scss'
import { useLocation } from "react-router-dom";

export default function BadgeStatus({status}){
    const badgeColor = getColorByStatusName(status);
    const circleColor = getColorByCircleStatus(status);
    const descriptionColor = getColorByDescriptionStatus(status);
    const location = useLocation().pathname;
    const time = "24h"
    return(
        <div 
            className="badge_status" 
            style={{
                backgroundColor:badgeColor,
            }}
        >
            <div 
                className="circle"
                style={{
                    color:circleColor,
                }}
            
            >•</div>
            <p 
                className="description"
                style={{
                    color:descriptionColor,
                }}
            >
                {status} {location === AppRouting.AutoApply? time : null }
            </p>
        </div>        
    )
}