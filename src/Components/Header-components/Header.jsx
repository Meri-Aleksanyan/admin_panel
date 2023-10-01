import React, { useState } from 'react'
import './Header.css'
import { BiSolidWinkSmile } from 'react-icons/bi';
import { AiFillDashboard } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { HiMiniWrench } from 'react-icons/hi2';
import { AiOutlineRight } from 'react-icons/ai';
import { AiFillFolder } from 'react-icons/ai';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { FaTable } from 'react-icons/fa';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdNotifications } from 'react-icons/io';
import { FaEnvelope } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import { BsCoin } from 'react-icons/bs';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import Home_section from '../Home-section/Home_section';



const Header = () => {

  return (
    <div>
        <div className='left'>
            <h1>
                <BiSolidWinkSmile className='smile'/>
                SB ADMIN <sup>2</sup>
            </h1>
            <hr />
            <p style={{color: '#90A7EB', fontSize: '12px', marginLeft: '-150px'}}>INTARFACE</p>
            <b style={{color: 'white'}}>
                <AiFillDashboard style={{marginRight: '10px'}}/> Dashboard
            </b> <br />
            <hr /> <br />
            <b>
                <FiSettings style={{marginRight: '10px'}}/> Components <AiOutlineRight style={{marginLeft: '85px'}}/>
            </b> <br />
            <b>
                <HiMiniWrench style={{marginRight: '10px'}}/> Utilities <AiOutlineRight style={{marginLeft: '117px'}}/>
            </b> <br />
            <hr />
            <p style={{color: '#90A7EB', fontSize: '12px', marginLeft: '-150px'}}>ADDONS</p>
            <b> <AiFillFolder style={{marginRight: '10px'}}/> Pages <AiOutlineRight  style={{marginLeft: '129px'}}/></b> <br />
            <b> <BiSolidBarChartSquare style={{marginRight: '10px'}}/> Charts</b> <br />
            <b> <FaTable style={{marginRight: '10px'}}/> Tables</b> <br />
            <hr />
            <div><BsArrowLeftCircleFill className='leftline'/></div>
                
        </div>

        
        
        

    </div>
  )
}

export default Header