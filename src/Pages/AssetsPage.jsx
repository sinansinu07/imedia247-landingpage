import { Fragment } from "react";
import CaseStudies from "../Components/CaseStudyPage/CaseStudies/CaseStudies";
import CommonHero from "../Components/Common/CommonHero/CommonHero";

export default function AssetsPage() {
    return (
        <Fragment>
            {/* <Helmet title="Assets | IMedia"> */}
            <CommonHero title1="IMedia" title2white="Advertising" title2red="Assets" />
            <CaseStudies />
            {/* </Helmet> */}
        </Fragment>
    )
}