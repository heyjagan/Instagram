import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err));

    fetch('http://localhost:5000/suggestions')
      .then(res => res.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err));
  }, []);

  const handleFollow =async (id,username)=>{
    axios.post('http://localhost:5000/followers',{"id":id, "username":username})
    .then(alert('Following'))
    .catch(err =>console.log(err))

  }

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ? (
          <div className="d-flex align-items-center">
            <img
              className="dp rounded-circle"
              src={profile.profile_pic}
              alt="Profile Pic"
            />
            <h5 className="ms-2">{profile.username}</h5>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <div className="d-flex align-items-center mt-3">
          <p className="mb-0">Suggested for you</p>
          <b className="ms-auto ">See All</b>
        </div>

        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((suggestion) => (
              <div className="my-1" key={suggestion.id}>
                <div className="d-flex align-items-center">
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profile_pic}
                    alt="Profile Pic"
                  />
                  <h5 className="ms-2">{suggestion.username}</h5>
                  <a className="ms-auto text-primary mb-0"onClick={()=>{handleFollow(suggestion.id,suggestion.username)}} >Follow</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
      