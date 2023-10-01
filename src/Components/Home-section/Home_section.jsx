import './Home_section.css'
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Home_section = () => {
  
  const diver= [
    {
      name: 'Primary',
      color: '#4e73df'
    },
    {
      name: 'Success',
      color: '#1cc88a'
    },
    {
      name: 'Info',
      color: '#36b9cc'
    },
    {
      name: 'Warning',
      color: '#f6c23e'
    },
    {
      name: 'Danger',
      color: '#e74a3b'
    },
    {
      name: 'Secondary',
      color: '#858796'
    },
    {
      name: 'Light',
      color: '#f8f9fc'
    },
    {
      name: 'Dark',
      color: '#5a5c69'
    },
  ]

  const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  

  const data = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 0,
      amt: 2400,
    },
    {
      uv: 4000,
      pv: 10000,
      amt: 2400,
    },
    {
      name: 'Mar',
      uv: 3000,
      pv: 5000,
      amt: 2210,
    },
    {
      uv: 4000,
      pv: 15000,
      amt: 2400,
    },
    {
      name: 'May',
      uv: 2000,
      pv: 10000,
      amt: 2290,
    },
    {
      uv: 4000,
      pv: 20000,
      amt: 2400,
    },
    {
      name: 'Jul',
      uv: 2780,
      pv: 15000,
      amt: 2000,
    },
    {
      uv: 4000,
      pv: 25000,
      amt: 2400,
    },
    {
      name: 'Sep',
      uv: 1890,
      pv: 20000,
      amt: 2181,
    },
    {
      uv: 4000,
      pv: 30000,
      amt: 2400,
    },
    {
      name: 'Nov',
      uv: 2390,
      pv: 25000,
      amt: 2500,
    },
    {
      uv: 3490,
      pv: 40000,
      amt: 2100,
    },
  ];


  return (
    <div>
      <section className='HomeSection'>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '35px', paddingRight: '35px'}}>
            <h1>Dashboard</h1>
            <button style={{backgroundColor: '#4E73DF',width: '130px', height: '40px', border: 'none', color: 'white'}}>Generate Report</button>
        </div>
        <div style={{display: 'flex', paddingLeft: '15px', paddingRight: '15px', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', paddingRight: '15px', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '20px', borderLeft: '5px solid #4E73DF', display: 'flex', backgroundColor: '#FFFFFF', width: '330px', textAlign: 'start', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}>
            <div>
              <p style={{color: '#4E73DF', margin: '0'}}>EARNINGS (MONTHLY)</p>
              <p style={{fontSize: '20px', margin: '0'}}>$40,000</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDDFEB" class="bi bi-calendar-fill" viewBox="0 0 16 16">
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderLeft: '5px solid #1CC88A', display: 'flex', backgroundColor: '#FFFFFF', width: '330px', textAlign: 'start', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}>
            <div>
              <p style={{color: '#1CC88A', margin: '0'}}>EARNINGS (ANNUAL)</p>
              <p style={{fontSize: '20px', margin: '0'}}>$215,000</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDDFEB" class="bi bi-currency-dollar" viewBox="0 0 16 16">
              <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
            </svg>
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderLeft: '5px solid #36B9CC', display: 'flex', backgroundColor: '#FFFFFF', width: '330px', height: '90px', textAlign: 'start', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}>
            <div>
              <p style={{color: '#36B9CC', margin: '0'}}>TASKS</p>
              <p style={{fontSize: '20px', margin: '0'}}>50%</p>
            </div>
            <div style={{display: 'flex', marginLeft: '10px', marginTop: '30px'}}>
              <div style={{backgroundColor: '#36B9CC', height: '7px', width: '100px', borderTopLeftRadius: '25px', borderBottomLeftRadius: '25px'}}></div>
              <div style={{backgroundColor: '#EAECF4', height: '7px', width: '100px', borderTopRightRadius: '25px', borderBottomRightRadius: '25px'}}></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDDFEB" class="bi bi-clipboard2-fill" viewBox="0 0 16 16">
              <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
              <path d="M3.5 1h.585A1.498 1.498 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5c0-.175-.03-.344-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1Z"/>
            </svg>
         </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px', paddingLeft: '20px', borderLeft: '5px solid #F6C23E', display: 'flex', backgroundColor: '#FFFFFF', width: '330px', textAlign: 'start', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}>
            <div>
              <p style={{color: '#F6C23E', margin: '0'}}>PENDING REQUESTS</p>
              <p style={{fontSize: '20px', margin: '0'}}>18</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#DDDFEB" class="bi bi-chat-fill" viewBox="0 0 16 16">
              <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
            </svg>
         </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', margin: '30px'}}>
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', fontSize: '12px', color: '#4B70DC', width: '1000px', backgroundColor: '#F8F9FC', height: '10px'}}>
              <h1>Earnings Overview</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path className='keter' d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
            </div>
            <div style={{width: "1035px", height:"35vh", marginTop: '5px', backgroundColor: 'white'}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', width: '480px', fontSize: '12px', color: '#4B70DC', backgroundColor: '#F8F9FC', height: '10px'}}>
              <h1>Revenue Sources</h1>
              <svg className='keter' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path className='keter' d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
              </svg>
            </div>
            <div style={{width: '520px', marginTop: '5px', height: '35vh', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <PieChart width={250} height={400}>
                <Pie
                  data={data2}
                  cx={120}
                  cy={200}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>
        

        <div style={{display: 'flex'}}>
          <div style={{width: '800px',  backgroundColor: 'white', height: '450px',  margin: '30px'}}>
            <div style={{backgroundColor: '#F8F9FC', padding: '15px', textAlign: 'start', borderBottom: '1px solid #E3E6F0', color:'#2D54C6'}}>Projects</div>
            <div style={{padding: '15px', }}>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Server Migration</p> <p>20%</p></div>
                <div style={{display: 'flex'}}>
                  <div style={{width: '20%', height: '12px', backgroundColor: '#E74A3B', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}></div>
                  <div style={{width: '80%', height: '12px', backgroundColor: '#EAECF4', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}></div>
                </div>
              </div>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Sales Tracking</p> <p>40%</p></div>
                <div style={{display: 'flex'}}>
                  <div style={{width: '40%', height: '12px', backgroundColor: '#F6C23E', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}></div>
                  <div style={{width: '60%', height: '12px', backgroundColor: '#EAECF4', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}></div>
                </div>
              </div>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Customer Database</p> <p>60%</p></div>
                <div style={{display: 'flex'}}>
                  <div style={{width: '60%', height: '12px', backgroundColor: '#4E73DF', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}></div>
                  <div style={{width: '40%', height: '12px', backgroundColor: '#EAECF4', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}></div>
                </div>
              </div>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Payout Details</p> <p>80%</p></div>
                <div style={{display: 'flex'}}>
                  <div style={{width: '80%', height: '12px', backgroundColor: '#36B9CC', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px'}}></div>
                  <div style={{width: '20%', height: '12px', backgroundColor: '#EAECF4', borderTopRightRadius: '5px', borderBottomRightRadius: '5px'}}></div>
                </div>
              </div>
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}><p>Account Setup</p> <p>Complete!</p></div>
                <div style={{display: 'flex'}}>
                  <div style={{width: '100%', height: '12px', backgroundColor: '#1CC88A', borderRadius: '5px'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{width: '800px', height: '500px',  backgroundColor: 'white',  margin: '30px'}}>
            <div style={{backgroundColor: '#F8F9FC', padding: '15px', textAlign: 'start', borderBottom: '1px solid #E3E6F0', color: '#2D54C6'}}>Illustrations</div>
            <div style={{padding: '15px'}}>
              <img style={{width: '400px', marginTop: '15px'}} src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="" />
              <p style={{textAlign: 'start'}}>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
              <p id='Browse'>Browse illustrations on unDraw 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
              </p>
            </div>
          </div>

                 


        </div>
        <div style={{display: 'flex'}}>         
          <div style={{width: '770px', margin: '30px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '-35px'}}>
              {diver.map((elem, index)=>(
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '47%', height: '80px', backgroundColor: elem.color, color: index==6 ? 'grey': 'white', textAlign: 'start', paddingLeft: '15px', marginBottom: '15px'}}>
                  <b style={{margin: '0px'}}>{elem.name}</b>
                  <p style={{margin: '0px'}}>{elem.color}</p>
                </div>
              ))}
              </div>
              
              <div style={{width: '770px', marginLeft: '27px'}}>
                <div style={{backgroundColor: '#F8F9FC', padding: '15px', textAlign: 'start', borderBottom: '1px solid #E3E6F0', color: '#2D54C6'}}>Development Approach </div>
                <div style={{textAlign: 'start', padding: '15px', backgroundColor: 'white', color: 'grey'}}>
                  <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                  <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
                </div>
              </div>
               
        </div>   
      </section>
    </div>
  )
}

export default Home_section