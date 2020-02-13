import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { injectIntl, intlShape } from "react-intl";
import { isScrollingDisabled } from "../../ducks/UI.duck";
import config from "../../config";
import {
  Page,
  SectionHero,
  SectionLocations,
  SectionFeatured,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  SliderHero,
  HomepageVideo,
  Stepper2,
  NamedLink,
  ExternalLink,
} from "../../components";
import { TopbarContainer } from "../../containers";

import facebookImage from "../../assets/saunatimeFacebook-1200x630.jpg";
import twitterImage from "../../assets/saunatimeTwitter-600x314.jpg";
import petservice1 from "./petservices-1.png";
import petservice2 from "./petservices-2.png";
import petservice3 from "./petservices-3.png";
import featured1 from "./featuredin/1.png";
import featured2 from "./featuredin/2.png";
import featured3 from "./featuredin/3.png";
import featured4 from "./featuredin/4.png";
import elite from './elite.jpg';
import css from "./LandingPage.css";

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage(
    { id: "LandingPage.schemaTitle" },
    { siteTitle }
  );
  const schemaDescription = intl.formatMessage({
    id: "LandingPage.schemaDescription"
  });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        {
          url: `${config.canonicalRootURL}${twitterImage}`,
          width: 600,
          height: 314
        }
      ]}
      schema={{
        "@context": "http://schema.org",
        "@type": "WebPage",
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage]
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
        {/* 
          <div className={css.heroContainer}>
            <SectionHero className={css.hero} history={history} location={location} />
          </div>
        */}
        <div className={css.sliderFeaturedWrapper}>
          <div>
          <SliderHero />
          <div className={css.featuredIn}>
              <div className={css.featuredSection}>
                <div className={css.featuredWrapper}>
                  <div className={css.featuredItem}>FEATURED IN</div>
                  <a className={css.featuredItem}>
                    <img src={featured1} />
                  </a>
                  <a className={css.featuredItem}>
                    <img src={featured2} />
                  </a>
                  <a className={css.featuredItem}>
                    <img src={featured3} />
                  </a>
                  <a className={css.featuredItem}>
                    <img src={featured4} />
                  </a>
                </div>
              </div>
            </div>
            </div>

        </div>

          <ul className={css.sections}>

            <li className={css.sections}>
                <div className={css.sectionServiceContent}>
                  <div className={css.serviceGrid}>
                    <div className={css.serviceGridItem}>
                      <div className={css.serviceGridContent}>
                        <div className={css.serviceCenter}>
                        <h1>
                          Unique Experience
                        </h1>
                        <p>Build unforgettable memories<br />watching pets in their own home</p>
                        </div>
                      </div>
                    </div>
                    <div className={css.serviceGridItem}>
                      <img src={elite}></img>
                    </div>
                  </div>
                </div>	
            </li>

            <li className={css.sections}>
              <div className={(css.sectionServiceContent, css.sectionWeVet)}>
                <div className={css.WeVetSection}>
                  <h1 className={(css.vettitle)}>
                    We Vet every Pet Sitter
                  </h1>
                  <p className={css.WeVetDiv}>We don't let just anyone watch our pets,<br/>why should you?</p>
                  <p className={css.WeVetLearn}>Learn How We Do It <span className={css.WeVetArrow}>&rarr;</span></p>
                </div>
                <div className={css.WeVetImage}>
                  <img src="https://i.imgur.com/3YFZ5n2.jpg" />
                </div>
              </div>
            </li>
            
            <li className={css.sections}>
              <div className={css.sectionHomestay}>
                <div className={css.newstandardSection}>
                  <h1 className={css.vettitle}>
                    Discover a new standard in Pet Care
                  </h1>
                  <div className={css.newstandardCol}>
                  <div className={css.newstandardItem}>
                    <p className={css.discoverFlex}>
                      <span><img src="https://i.imgur.com/G1GYEOU.png" /></span>
                      <span>We carefully select the best<br />pet sitters out there</span>
                    </p>
                  </div>
                  <div className={css.newstandardItem}>
                    <p className={css.discoverFlex}>
                      <span><img src="https://i.imgur.com/G1GYEOU.png" /></span>
                      <span>Our Insurance backed guarantee covers<br />your home for up to £1 million</span>
                    </p>
                  </div>
                  <div className={css.newstandardItem}>
                    <p className={css.discoverFlex}>
                      <span><img src="https://i.imgur.com/G1GYEOU.png" /></span>
                      <span>With our trusted partners we've got<br />you and your pet covered</span>
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </li>

            <li className={css.sections}>
              <div className={css.sectionHomestay}>
                <div className={css.newstandardSection}>
                  <div className={css.carefullyselectedCol}>
                  <div className={css.carefullyselectedItem}>
                  <h1>Carefully Selected</h1>
                    <p>
                      Congratulations, you have discovered Trust My Pet Sitter! 
                    </p>
                    <p> 
                      We are proud to offer a new standard of Pet Care.
                    </p>
                    <p>
                      We assess every application against our Six Point Selection Process for inclusion. This gives you the guarantee that we select only the finest sitters to care for your precious pets.
                    </p>
                    <p>
                      We love what we do. Our Pet Sitters are carefully selected by a highly experienced team of professionals to ensure only the highest calibre of sitters reach the TMPS benchmark to care for your fur babies.
                    </p>
                    <p>
                      We build great relationships with our Pet Sitters, working closely with them to ensure that they have everything they need from us and from you to ensure a successful pet sitting experience for all.   We also encourage and monitor feedback from both parties to ensure that each continues to earn its place as part of our trusted community.
                    </p>
                  </div>
                  <div className={css.carefullyselectedItem}>
                    <div className={css.carefullyImage}>
                      <img src="https://i.imgur.com/8FSOaAv.jpg" />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>

            <hr />

            <li className={css.sections}>
              <div className={css.sectionHomestay}>
                <div className={css.newstandardSection}>
                  <h1 className={css.vettitle}>
                    Our Trusted Partners
                  </h1>
                  <div className={css.newstandardCol}>
                  <div className={css.newstandardItem}>
                    <div className={css.ourPartners}>
                      <div className={css.ourPartnersItem1}>
                         <img src="https://i.imgur.com/2Zfo6CI.png" />
                      </div>
                      <div className={css.ourPartnersItem2}>
                        <h2>YOTI</h2>
                        <p>YOTI works by allowing you to set up a trusted, genuine and verified digital identity.</p>
                        <p className={css.secondCol}><ExternalLink href="https://www.yoti.com">Learn more <span className={css.WeVetArrow5}>→</span></ExternalLink></p>
                      </div>
                    </div>
                  </div>
                  <div className={css.newstandardItem}>
                    <div className={css.ourPartners}>
                      <div className={css.ourPartnersItem1}>
                         <img src="https://i.imgur.com/fZeVyDM.png" />
                      </div>
                      <div className={css.ourPartnersItem2}>
                        <h2>Superhog</h2>
                        <p>An Insurance backed guarantee working to protect your home and contents for up to £1 million.</p>
                        <p className={css.secondCol}><ExternalLink>Learn more <span className={css.WeVetArrow5}>→</span></ExternalLink></p>
                      </div>
                    </div>
                  </div>
                  <div className={css.newstandardItem}>
                    <div className={css.ourPartners}>
                      <div className={css.ourPartnersItem1}>
                         <img src="https://i.imgur.com/KW3nLC5.jpg" />
                      </div>
                      <div className={css.ourPartnersItem2}>
                        <h2>Pawsquad</h2>
                        <p>PawSquad lets you video call or text chat with a qualified vet free at any time or day or night, 365 days a year.</p>
                        <p className={css.secondCol}><ExternalLink href="https://www.pawsquad.com">Learn more <span className={css.WeVetArrow5}>→</span></ExternalLink></p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>

          {/*
            <li className={(css.sections, css.whyUseBg)}>
              <div className={css.sectionContent}>
                <h1>Why use Trust My Pet Sitter?</h1>

                <div className={css.whyUse}>
                  <div className={css.whyContainer}>
                    <h2>Safety</h2>

                    <p>
                      All Premium members are ID verified and the membership
                      includes insurance and access to a 24/7 Virtual Vet
                    </p>

                    <NamedLink name="YotiPage">Learn More</NamedLink>
                  </div>

                  <div className={css.whyContainer}>
                    <h2>Our Community</h2>

                    <p>
                      Find and meet like minded people in our pet community.
                      Find pet sitters, dog walkers, groomers and vets
                    </p>

                    <NamedLink name="SignupPage">Join Now</NamedLink>
                  </div>

                  <div className={css.whyContainer}>
                    <h2>Travel the World</h2>

                    <p>
                      Pet Sitters can travel the world looking after much loved
                      pets in the family home. Find your next great adventure...
                    </p>

                    <NamedLink name="PawSquadPage">Learn More</NamedLink>
                  </div>

                  <div className={css.whyContainer}>
                    <h2>The Personal Touch</h2>

                    <p>
                      Our team personally approve every verified Pet Sitter
                      prior to going live on Trust My Pet Sitter
                    </p>

                    <NamedLink name="SignupPage">Join Now</NamedLink>
                  </div>
                </div>
              </div>
            </li>

            <li className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <HomepageVideo />
              </div>
            </li>

            */}

          {/*
            <li className={css.section}>
              <div className={css.sectionContent}>
                <div className={css.howItWorksColors}>
                <h1 className={css.howtitle}>How it Works</h1>

                <Stepper2 />

                <div className={css.firstchistepper}>
                  <span className={css.step}>1</span>
                  <h2>Choose Pet Sitter</h2>
                  <p>
                    Trust My Pet Sitter introduces a wider choice of local,
                    national and international pet sitters.
                  </p>
                </div>

                <div className={css.mobileStepper}>
                  <span className={css.step}>2</span>
                  <h2>Book Pet Sitter</h2>
                  <p>
                    Book your Pet Sitter using our secure payment provider. All
                    bookings are covered by 24/7 Vet Advice and Emergency
                    Insurance
                  </p>
                </div>

                <div className={css.mobileStepper}>
                  <span className={css.step}>3</span>
                  <h2>Pets are Happy at Home</h2>
                  <p>
                    Your Pet stays home with our verified Pet Sitter, happy and
                    secure in their own familiar space.
                  </p>

                  <div className={css.mobbt}>
                    <NamedLink name="SignupPage">Start Now</NamedLink>
                  </div>
                </div>
              </div>
              </div>
            </li>

          */}

            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionLocations />
              </div>
            </li>

          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state)
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
