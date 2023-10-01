import React, { useState } from 'react'
import '../Header-components/Header.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import { GrDocumentText } from 'react-icons/gr';
import { BsCoin } from 'react-icons/bs';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import Home_section from '../Home-section/Home_section';

const Top = () => {
    const[value, setValue]=useState(false)
    function active_inactive(){
        setValue(false)
    }

    const[open, setOpen]=useState(false)
    function block_none(){
        setOpen(!open)
    }

    const[envelope, setEnvelope]=useState(false)
    function open_envelope(){
        setEnvelope(!envelope)
    }

    const[name, setName]=useState(false)
    function Douglas(){
        setName(!name)
    }

  return (
    <div onClick={(event)=>{
        if (event.target.className!='active' && event.target.className!='inactive'){
            setValue(true)
            console.log(event.target.id)
        }
        if(event.target.id!='not' && event.target.id!='not3' && event.target.id!='notification'){
            setOpen(false)
        }

        if(event.target.id!='envelope' && event.target.id!='envelopediv' && event.target.id!='envelopepath'){
            setEnvelope(false)
        }

        if(event.target.id!='Douglas' && event.target.id!='Douglasimg'){
            setName(false)
        }
        
    }} >
        <div>
            <div className='top'>
                <div><input onClick={active_inactive} className={value ? 'active': 'inactive'} type="search" placeholder='Search...'/> <div className='search'><BiSearchAlt2/></div></div>
                <div>
                    <svg id='notification' onClick={block_none} style={{color: '#D1D3E2', cursor: 'pointer'}}   xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path onClick={block_none} id='not' d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                    <div onClick={block_none} id='not3' style={{backgroundColor: '#E85547', width: '15px', height: '15px', color: 'white', fontSize: '9px', borderRadius: '4px', marginTop: '-15px', marginRight: '8px', marginLeft: '-10px', cursor: 'pointer'}}> 
                        3+</div>
                    
                    <svg id='envelope' onClick={open_envelope} style={{color: '#D1D3E2', cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path onClick={open_envelope} id='envelopepath' d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                    </svg>
                    <div onClick={open_envelope} id='envelopediv'  style={{backgroundColor: '#E85547', width: '15px', height: '15px', color: 'white', fontSize: '9px', borderRadius: '4px', marginTop: '-15px', marginLeft: '-5px', cursor: 'pointer'}}>7</div>
                    
                    <hr/>
                    <p id='Douglas' onClick={Douglas} style={{fontSize: '13px', color: '#9092BD', cursor: 'pointer'}}>Douglas McGee</p>
                    <img id='Douglasimg' onClick={Douglas} style={{width: '30px', height: '30px', marginLeft: '5px', cursor: 'pointer'}} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" alt="" />
                </div>
            </div>
        </div>
        {open ? (
            <div className="alerts" id='alert'>
                <div style={{backgroundColor: '#4E73DF', color: 'white', fontSize: '13px', height: '35px', paddingLeft: '15px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>ALERTS CENTER</div>
                <div>
                    <div className='alert-div' style={{backgroundColor: '#4E73DF'}}>
                        <GrDocumentText/>
                    </div>
                    <div style={{textAlign: 'left'}}>
                        <p>December 12, 2019</p>
                        <b>A new monthly report is ready to <br />download!</b>
                    </div>
                </div>
                <div>
                    <div className='alert-div' style={{backgroundColor: '#1CC88A'}} >
                        <BsCoin/>
                    </div>
                    <div style={{textAlign: 'left'}}>
                        <p>December 7, 2019</p>
                        <b>$290.29 has been deposited into <br />your account!</b>
                    </div>
                </div>
                <div>
                    <div className='alert-div' style={{backgroundColor: '#F6C23E'}}>
                        <TbAlertTriangleFilled/>
                    </div>
                    <div style={{textAlign: 'left'}}>
                        <p>December 2, 2019</p>
                        <b>Spending Alert: We've noticed <br /> unusually high spending for your <br /> account</b>
                    </div>
                </div>
                <div id='showalerts'>Show All Alerts</div>
            </div>
        ): ''}
        
        {envelope ? (
        <div className="messages" id='alert'>
                <div style={{backgroundColor: '#4E73DF', color: 'white', fontSize: '13px', height: '35px', paddingLeft: '15px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>MESSAGES CENTER</div>
                <div>
                        <img className='alert-div' src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg" alt="" />
                    <div style={{textAlign: 'left'}}>
                        <b>Hi there! I am wondering if you ...</b>
                        <p className='greyP'>Emily Fowler . 58</p>
                    </div>
                </div>
                <div>
                    <img className='alert-div' src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_2.svg" alt="" />
                    <div style={{textAlign: 'left'}}>
                        <p>I have the photos that you ordere...</p>
                        <p className='greyP'>Jae Chun . 1d</p>
                    </div>
                </div>
                <div>
                    <img className='alert-div' src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_3.svg" alt="" />
                    <div style={{textAlign: 'left'}}>
                        <p>Last month's report looks great, I ...</p>
                        <p className='greyP'>Morgan Alvarez . 2d</p>
                    </div>
                </div>
                <div>
                    <img className='alert-div' src="	https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="" />
                    <div style={{textAlign: 'left'}}>
                        <p>Am I a good boy? The reason I as ...</p>
                        <p className='greyP'>Chicken the Dog . 2w</p>
                    </div>
                </div>
                <div id='showalerts'>Read More Messages</div>
            </div>
           ): ''}

    {name ? (
        <div className="settings">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    <p>Profile</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                    <p>Settings</p>
                </div>
                <div style={{borderBottom: '1px solid #E3E6F0'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <p>Activity Log</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    <p>Logout</p>
                </div>
            </div>
           ): ''}
    </div>
  )
}

export default Top