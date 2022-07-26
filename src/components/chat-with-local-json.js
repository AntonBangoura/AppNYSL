//-----------------------------------Chat with the JSON----------------------------------------------------//

// const MessagesToEachGame = ()=>{
//     const [chatRoom, setChatRoom] = useState({});
//     const {id} = useParams()
//     const game =`game_${id}`;
    
//     useEffect(()=>{
//         function state(){
//             setChatRoom(chatData.messages[game]);
//         }
//         state()
//     })

//     return(
//         Object.keys(chatRoom).map(x => 
//         <div className='container mt-4'>
//             <div className='card mx-auto' style={{'maxWith':"400px"}}>
//                 <div className='card-header bg-transparent'>
//                     <div className=''>
//                         <ul className='navbar-nav me-auto '>
//                             <div className='d-flex justify-content-between'>
//                                 <li className='nav-item'><a href='#' className='nav-link'>{chatRoom[x].author}</a></li>
//                                 <li className='nav-item'><a href='#' id='text-color' className='nav-link'>{chatRoom[x].text}</a></li>
//                             </div>
//                             <li className='nav-item'><a href='#' className='nav-link'>{chatRoom[x].timestamp}</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//     ))
// }



// const Input = () =>{
//     return(
//     <div className='container mt-4'>
//             <div className='card mx-auto' style={{'maxWith':"400px", 'position':'relative'}}>
//                 <input type="text" style={{'outline':'none'}}></input>
//                 <button type="submit" id='send-button'>Send</button>
//             </div>
//         </div>
//     )
// }