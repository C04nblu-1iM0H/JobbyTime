import BlackList from "../../components/BlackList/BlackList";
import DemographicQuestions from "../../components/DemographicQuestions/DemographicQuestions";
import LocationCheckUSA from "../../components/Location/LocationCheckUSA/LocationCheckUSA";
import TimeZoneQuestion from "../../components/Location/TimeZoneQuestion/TimeZoneQuestion";
import WorkAuthorizationQuestion from "../../components/Location/WorkAuthorizationQuestion/WorkAuthorizationQuestion";
import SecurityClearance from "../../components/SecurityClearance/SecurityClearance";
import UserInformation from "../../components/UserInformation/UserInformation";
import "./profile.scss";

export default function ProfileScreen(){
    return(
        <section className="profile">
            <h1 className="profile__title">My Profile</h1>
            <div className="profile__container">
                <UserInformation />
                <DemographicQuestions />
            </div>
            <h2 className="profile__subtitle">Location</h2>
            <div className="profile__location">
                <section className="profile__location__group">
                    <LocationCheckUSA />
                    <WorkAuthorizationQuestion />
                </section>
                <TimeZoneQuestion />
            </div>
            <h2 className="profile__subtitle">Black List</h2>
            <BlackList />
            <h2 className="profile__subtitle">Security Clearance</h2>
            <SecurityClearance />
        </section>
    )
}