import { useState } from 'react';
import './team.css';

export default function Team () {
    const [team, setTeam] = useState(11)
    const hadnleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam);
        // setTeam(team + 1);
    }
    const handleRemove = () => {
        setTeam(team - 1);
    }
    return(
        <div className='team'>
            <h3>Players: {team}</h3>
            <button onClick={hadnleAdd}>Add</button>
            <button onClick={handleRemove} style={{marginLeft:'5px'}}>Remove</button>
        </div>
    )
} 