import React,{useState,useEffect} from 'react'; 
import '../App.css'

function CountTimer() {
    const [count, setCount] = useState(false);

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSecounds] = useState(0);
    const [value, setValue] = useState();

    const [displayMinute, setDisplayMinute] = useState(0);
    const [displaySecounds, setDisplaySecounds] = useState(0);
    
    const handleOnChange = (event) => {
        setValue(event.target.value)
        setMinutes(Math.floor(parseInt(event.target.value)/60))
        setSecounds(Math.floor(parseInt(event.target.value)%60))
    }

    const handleUpdate= () => {
        setDisplayMinute(minutes)
        setDisplaySecounds(seconds)
        setValue('')
    }

    useEffect(()=>{
        let timerData = setInterval(()=>{
            if(count){
                if(displaySecounds>0) {
                    setDisplaySecounds(displaySecounds-1)
                    console.log(displaySecounds)
                }
                if(displaySecounds===0){
                    if(displayMinute>0) {
                        setDisplayMinute(displayMinute-1)
                        setDisplaySecounds(59)
                    }
                }
            }
            else{
                setCount(false)
            }
        },1000);
        console.log("timerData",timerData)
        return ()=> {
            clearInterval(timerData)
        }
    })

    const handleStart = () => {
        setCount(true);
    }
    const handlePause = () => {
        setCount(false);
    }
    const handleReset = () => {
        setDisplayMinute(0)
        setDisplaySecounds(0)
        setCount(false);
    }

    return (
        <div className='totalData'>
                <div className='Title'>Timer</div>
                <input className='text'type='input' value={value} onChange={(e)=> {handleOnChange(e)}}/>
                <button className='btnAdd'type='button' onClick={handleUpdate}>Add Timer</button>
                <div className='displayTimer'>{displayMinute}:{displaySecounds<10 ? '0'+displaySecounds : displaySecounds}</div>
                <button className='startBtn' type='button' onClick={handleStart}>Start</button>
                <button className='resetBtn' type='button' onClick={handleReset}>Reset</button>
                <button className='pauseBtn' type='button' onClick={handlePause}>Pause</button>
        </div>
        
    )
}

export default CountTimer