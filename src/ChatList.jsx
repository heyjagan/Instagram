import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';

function ChatList() {

const navigate = useNavigate();
const {username}=useParams();

const users=[
{ id : 1,name : "john_doe"},
{ id :2 , name : "priya_travels"}
];

return (


       <div>
      <h3>Chat with {username}</h3>

    <div>
        <h2>Message</h2>
        {users.map(user =>(
            <div key={user.id}
            onClick={()=> navigate(`/message/${user.name}`)}
            style={{cursor:"pointer",padding:"10px"}}
            
             >

            {user.name}
             </div>
             
        ))}
    </div>
    </div>
  );
}

export default ChatList
