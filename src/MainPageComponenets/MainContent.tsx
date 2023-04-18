import { SocialIcons} from "../homepageComponents/Top"
import RecentUpdate from "./RecentUpdate"

let MainContent = () => {

    return (

        <div className="content--container">
            <div className="content--wrapper">
                <div className="maincontent--wrapper">
                    <div className="maincontent--social--icons--wrapper">
                    <div className="social--icons--info">
                    <i className="fas fa-info-circle"></i>
                    <p>Please help us by sharing the site to your friends.</p>
                    </div>
                    <SocialIcons />
                    </div>
                    <RecentUpdate />
                </div>
            </div>
        </div>

    )

}

export default MainContent 