import data from '../games.json';
import { Link } from 'react-router-dom';


//Games tables

const TableBodySeptember = () =>{
    return data.game.september.map((game, i) =>{
        return(
            <tr key={i}>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.date}</Link></td>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.time}</Link></td>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.teams}</Link></td>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.location}</Link></td>
            </tr>
        )
    })
}



const TableHeadSeptember = ()=>{
    return(
    <thead>
        <tr>
            <th>SEPTEMBER</th>
            <th>Time</th>
            <th>Teams</th>
            <th>Location</th>
        </tr>
    </thead>
    )
}

const TableHeadOctober = ()=>{
    return(
    <thead>
        <tr>
            <th>OCTOBER</th>
            <th>Time</th>
            <th>Teams</th>
            <th>Location</th>
        </tr>
    </thead>
    )
}

const TableBodyOctober = () =>{
    return data.game.october.map((game, i) =>{
        return(
            <tr key={i}>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.date}</Link></td>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.time}</Link></td>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.teams}</Link></td>
                <td><Link to={`/schedule/${game.id}`} className='matchesLinks'>{game.location}</Link></td>
            </tr>
        )
    })
}


export {TableBodySeptember, TableHeadSeptember,TableBodyOctober, TableHeadOctober}