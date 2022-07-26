//title
const MainTitle = () =>{
    return(
        <h1 className="text-3xl font-bold underline">Northside Youth Soccer League</h1>
    )
  };


// upcoming events page
const UpcomingEventsTitle = () =>{
    return(
        <h3>UpcomingEvents</h3>
    )
}
const UpcomingEvents = ({date, event}) =>{
    return(
        <div className="scheduleExtensionText">
            <p>{date}<br />{event}</p>
        </div>
    )
}

const RenderingUpcomingEvents =() =>{
    return(
    <div className='box1'>
        <UpcomingEventsTitle />
        <UpcomingEvents
            date = {'August 4th'}
            event = {'NYSL Fundraiser'}
         />
        <UpcomingEvents
            date = {'August 16th'}
            event = {'Season Kick-off: Meet the teams'}
         />
        <UpcomingEvents
            date = {'September 1st'}
            event = {'First Game of the Season (Check Game Schedule for details)'}
         />
    </div>
    )
}


export { MainTitle, RenderingUpcomingEvents, };
