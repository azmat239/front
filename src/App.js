
import './App.css';
import bg from './images/bg.jpg';
import front from './images/front.png';
import flip from './images/flip.png';
import amaz from './images/amaz.png';

function App(){
  return( 

    <div>
      <nav>
        <div>
          <a href='https:///www.google.com'> <img src={bg}  alt='no output' className='logo' /></a>
        </div>
        <ul>
          <li className='active'><a href='https://www.google.com' >Home</a></li>
          <li ><a href='https://www.google.com'>Location</a></li>
          <li><a href='https://www.google.com'>About</a></li>
          <li><a href='https://www.google.com'>Contact</a></li>
        </ul>
        <button type='button'>Login</button> 
      <hr/>
      </nav>

      <div className='main'>
          <div className='left'>
              <h1>Your Feet Deserves The Best</h1>
              <p>Your Feet Deserves The BestYour Feet Deserves The BestYour Feet Deserves The BestYour Feet Deserves The BestYour Feet Deserves The BestYour Feet Deserves The Best
              </p>

              <div className='btn'>
                <button className='red1'>Shop Now</button>
                <button className='no-color'>Category</button>   
              </div>

              <div>Also Available On</div>

              <div className='img1'>
                <img src={flip} alt='no' className='f'/>
                <img src={amaz} alt='no' className='a' />
              </div>
          </div>



          <div className='right'>
            <img src={front} alt='Nothing' />
          </div>
      </div>
      </div>
    
  );
  }

  export default App;
