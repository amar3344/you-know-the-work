import React from 'react'
import { AiOutlineDesktop} from "react-icons/ai";
import { BiBriefcase,BiPencil } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import { HiOutlineLightBulb,HiOutlineMicrophone } from "react-icons/hi";
import { RxDotFilled } from "react-icons/rx";
import { SlNotebook } from "react-icons/sl";
import { TiDeviceLaptop } from "react-icons/ti";







import "./App.css"

const App = () => (
  <div className='react-app'>
    <div className='resume-container'>
        <div className='profile-container'>
          <div className='profile'>
            <div>
              <CiUser/>
            </div>
          <p className='profile-text'>PROFILE</p>
          </div>
          <div className='profile-discription-container'>
            <div className='profile-name-container'>
              <h1 className='name'>CAROLINE THOMPSON</h1>
              <p className='designation'>ART DIRECTIOR</p>
            </div>
            <div className='profile-address'>
              <p className='text'>Advertising campaigns are my forte. <br/> I have been in the industry for 6 years.</p>
              <div>
                <p className='text'>Adress : Los Angeles,California</p>
                <p className='text'>Phone : +(87) 834 2934 2344</p>
                <p className='text'>Website : carolinethompson.com</p>
              </div>
            </div>
          </div>
        </div>
        
{/* Adding Work Experiance */}
        <div className='profile-container'>
            <div className='profile'>
              <div>
                <BiBriefcase/>
              </div>
              <p className='profile-text'>WORK</p>
            </div>
            <ul className='unordered-list-container'>
              <li className='each-list'>
                <p style={{fontSize:"14px",padding:0,margin:0}}>2022-2023</p>
                <div style={{marginLeft:50}}>
                  <p className='work-description' style={{fontWeight:"bold"}}>Creative Minds Graphics Design Studio California * Senior Art Director</p>
                  <p className='work-description'>Generating and developing ideas to present to the client</p>
                </div>  
              </li>
              <li className='each-list'>
                <p style={{fontSize:"14px"}}>2021-2022</p>
                <div style={{marginRight:70}}>
                    <p className='work-description' style={{fontWeight:"bold"}}>Mega Giants Publishing and Studio * Junior Art Director </p>
                    <p className='work-description'>Working on design to produce an effective advertising campaign</p>
                </div>
              </li>
              <li className='each-list'>
                <p style={{fontSize:"14px"}}>2020-2021</p>
                <div style={{marginRight:80}}>
                  <p className='work-description' style={{fontWeight:"bold"}}>Big Ideas Inc * Assistant Art Director.</p>
                  <p className='work-description'>Commissioning specialists,such as artists,to work on projects.</p>
                </div>
              </li>
            </ul>
        </div>
{/* Adding Skills And Awards */}
        <div className='profile-container'>
          <div className='profile'>
            <div>
              <FaClipboardList/>
            </div>
            <p className='profile-text'>SKILLS & AWARDS</p>
          </div>
          <div className='border-bottom'>
          <ul className='border-right'>
            <li className='each-list'>
              <p>UI/UX</p>
              <div className='skill-score'>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              </div>              
            </li>
            <li className='each-list'>
              <p>Growth Marketing</p>
              <div className='skill-score'>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              </div>              
            </li>
            <li className='each-list'>
              <p>Typography</p>
              <div className='skill-score'>
              <RxDotFilled/>
              <RxDotFilled/>
              </div>              
            </li>
            <li className='each-list'>
              <p>Video Production</p>
              <div className='skill-score'>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              </div>              
            </li>
            <li className='each-list'>
              <p>Print Design</p>
              <div className='skill-score'>
              <RxDotFilled/>
              <RxDotFilled/>
              <RxDotFilled/>
              </div>              
            </li>
          </ul>
          <ul className='achievements-container'>
            <li className='each-list'>
              <p>2019</p>
              <div>
                <p className='text'>Suiton Design Awards</p>
                <p className='text'>10 Graphic Designer</p>
              </div>
            </li>
            <li className='each-list'>
              <p>2019</p>
              <div style={{marginRigth:20}}>
                <p className='text'>Graphic London Award</p>
                <p className='text'>Winning Entry: Poster design</p>
              </div>
            </li>
            <li className='each-list'>
              <p style={{marginRight:40}}>2019</p>
              <div >
                <p className='text'>LA Creatives Award</p>
                <p className='text'>Winning Entry: Ad campaign</p>
              </div>
            </li>
          </ul>
          </div>
        </div>
{/* Adding Interests */}
        <div className='profile-container'>
          <div  className='profile'>
            <div>
              <HiOutlineLightBulb/>
            </div>
            <p className='profile-text'>INTERESTS</p>
          </div>
          <ul className='unordered-list-container interests-container'>
            <li style={{flexDirection:"column"}} className='each-list each-logo'>
              <div className='logos-interests-container'>
                <AiOutlineDesktop className='logos'/>
              </div>
              <p>Internet</p>
            </li>
            <li style={{flexDirection:"column"}} className='each-list each-logo'>
              <div className='logos-interests-container'>
                <BiPencil className='logos'/>
              </div>
              <p>Sketching</p>
            </li>
            <li style={{flexDirection:"column"}} className='each-list each-logo'>
              <div className='logos-interests-container'>
                <TiDeviceLaptop className='logos'/>
              </div>
              <p>Movies</p>
            </li> 
            <li style={{flexDirection:"column"}} className='each-list each-logo'>
              <div className='logos-interests-container'>
                <HiOutlineMicrophone className='logos'/>
              </div>
              <p>Music</p>
            </li>
          </ul>
        </div>  
{/* Adding Education  */}
        <div className='profile-container'>
          <div className='profile'>
            <div>
              <SlNotebook/>
            </div>
            <p className='profile-text'>EDUCATION</p>
          </div>
          <ul className='unordered-list-container'>
            <li className='each-list'>
              <p style={{marginRight:35}}>2016-2020</p>
              <div>
              <p>Alabama College of Design and Technology * Cum Laude</p>
              <p>Bachelor of Fine Arts Major in Advertising</p>
              </div>
            </li>
            <li className='each-list'>
              <p>2013-2016</p>
              <div style={{marginRight:48}}>
              <p>Helena All Girls Senior High School * Valedictorian</p>
              <p>President of Art and Design Club</p>
              </div>  
            </li>
          </ul>
        </div>  
    </div>
  </div>
)

export default App