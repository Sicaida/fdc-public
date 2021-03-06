import React, { Component } from "react";
import NavBar2 from '../NavBar2/NavBar2';
import Footer from '../footer/footer';
import Journey1 from '../Home/Journeys1.png';
import PopularShape from '../Home/PopularShape.png';
import ChevronRight from '../Home/chevron-right.svg';
import Img1 from './1.png';
import Img2 from './2.png';
import Img3 from './3.png';
import leftShape from './leftShape.svg';
import Shapes1 from './shapes1.png';


let tags = [
  {text: "Becoming an approved provider"},
  {text: "Applying to become an approved provider"},
  {text: "Provider and service eligibility"},
  {text: "Exempt services"},
]
class NewProvider extends Component {
  render() {
    return (
      <div className="new-provider">
        <NavBar2/> 
          <img alt="" style={{right: 50, top: 790, left: 'unset'}} src={Shapes1} className="shapes-1 mobile-hidden-1700"/>
          <div className="banner container" style={{alignItems: 'center', backgroundColor: '#b9c7f6'}}>
        <div style={{    width: 700 + 'px',    height: 700 + 'px',    position: 'absolute',    background: 'white',    borderRadius: 100 + '%',    opacity: 0.2,    top: -130+'%',    left: -200+'px'}}></div>
            <div className="inner" style={{zIndex: 1, flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <div style={{width: '100%'}}>
                <h1 style={{color: '#202E77', margin: 0}}> I am a new provider </h1>
              </div>
              <p style={{width: 400}}> 
                Learn about family day care and how to become an approved provider. Set your service up for success!
              </p>
            </div>
          </div>

          <div className="container" style={{paddingBottom: 10, alignItems: 'center', flexWrap: 'wrap', marginTop: 20}}>
            <div className="inner collapsible" style={{marginTop: -70, flexWrap: 'wrap'}}>

              <div className="fdc-box" style={{backgroundImage: `url(${Img1})`}}>
                <h2 > What is family day care?</h2>
              </div>


              <div className="fdc-box" style={{backgroundImage: `url(${Img2})`}}>
                <h2 > What does a good family day care provider look like?</h2>
              </div>


              <div className="fdc-box" style={{backgroundImage: `url(${Img3})`}}>
                <h2 >Key contacts</h2>
              </div>

            </div>
          </div>

          <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 0, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <h2> Related Topics</h2>
            </div>
          </div>
          <div className="resources topics container flex-row">
            <div className="inner flex-row" style={{flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start'}}>

                  <a href="/content/?=0" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Becoming an approved provider</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          The responsibilities of a child care provider and the key business requirements that are part of being a provider
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=1" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Applying to be an approved provider</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Applying for approval for the first time, seeking to add or remove a service from the provider approval, and registration of personnel.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=2" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Provider and service eligibility</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Eligibility requirements that providers and services must meet to be eligible for approval under Family Assistance Law.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=3" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a> Exempt services</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          Types of services that are not covered by the National Law and provides information on the requirements exempt services must meet.
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>


                  <a href="/content/?=10" className="flex-row border" style={{justifyContent: 'space-between'}}>
                    <div className="search-results" style={{width: '85%', paddingBottom: 0}}>
                      <div className="search-result" style={{width: '85%'}}>
                        <a > Support for providers</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          The Inclusion Support Program and the Community Child Care Fund (including Connected Beginnings) and how each program is delivered
                        </p>
                      </div>
                    </div>
                    <img style={{cursor: 'pointer'}} src={ChevronRight} alt="more"/>
                   </a>

             </div>
           </div>

            <div id="popular-section" className="resources container flex-row popular-section" style={{backgroundColor: '#1F2D76', flexWrap: 'wrap', paddingTop: 50, paddingBottom: 70, marginTop: 100}}>
                <div className="inner" style={{width: '100%', maxWidth: 'none'}}>
                      <div className="flex-row" style={{justifyContent: 'space-between', width: '100%', maxWidth: 1020}}>
                        <img src={PopularShape} style={{position: 'absolute', marginLeft: -81, marginTop: -53}}/>
                        <h1 style={{color: '#FFF', zIndex: 2}}>Relevant Resources</h1>
                        <h3 style={{cursor: 'pointer', color: '#FFF'}}> View All</h3>
                      </div>
                </div>
                
         
            <div className="container flex-row">
            <div className="inner flex-row" style={{marginTop: 0, justifyContent: 'space-between', alignItems: 'flex-start'}}>
              <div className="search-results flex-row" style={{width: '100%', flexWrap: 'wrap'}}>
                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/1+Approach+to+compliance.pdf" className="flex-row border">
                    <div className="flex-row tags" >
                                    <div className="tag"> Poster </div> 
                                    <div className="tag"> Compliance </div> 
                                    <div className="tag"> For Providers </div> 
                      </div>
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>
                      
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  Approach to compliance</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A poster on how the department actively monitors compliance
                        </p>
                      </div>
                    </div>

                    <img alt="view" src={ChevronRight} />
                  </a>



                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/3+What+does+good+compliance+look+like+for+an+FDC+provider.pdf" className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>

                      <div className="flex-row tags" >
                        <div className="tag"> Checklist </div> 
                        <div className="tag"> Compliance </div> 
                        <div className="tag"> For Providers </div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  What does good compliance look like for an FDC provider</a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A self-assessment checklist for FDC providers on good compliance practices
                        </p>
                      </div>
                    </div>

                        <img alt="view" src={ChevronRight} />
                  </a>



                  <a href="https://fdc-prototype.s3.us-east-2.amazonaws.com/pdfs/6+Caring+for+a+relative+.pdf"  className="flex-row border">
                    <div className="search-results" style={{width: '90%', paddingBottom: 0}}>
                      <div className="flex-row tags" >
                        <div className="tag"> Fact sheet </div> 
                        <div className="tag"> Relatives </div> 
                        <div className="tag"> For Providers </div> 
                        <div className="tag"> For Educators</div> 
                      </div>
                      <div className="search-result" style={{width: '90%'}}>
                        <a href="/">  Caring for a relative </a>
                        <p style={{maxHeight: 150, overflow: 'hidden', lineHeight: 1.5}} >
                          A fact sheet on the rules around caring for relatives as an FDC educator
                        </p>
                      </div>
                    </div>

                        <img alt="view" src={ChevronRight} />
                   </a>

                 


              </div>
            </div>
          </div>

          
          </div>
            

        <Footer/>
      </div>
    )
  }
}

export default NewProvider;
