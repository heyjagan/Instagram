import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

  const [profile, setProfile] = useState(null)
  const [followers, setFollowers] = useState([])
  const [unfollowed, setUnfollowed] = useState(false)

  useEffect(() => {

    axios.get('http://localhost:5000/profile')
      .then(response => {
        setProfile(response.data)
      })
      .catch(error => console.log(error))

    axios.get('http://localhost:5000/followers')
      .then(response => {
        setFollowers(response.data)
      })
      .catch(error => console.log(error))

  }, [unfollowed])   // re-fetch when unfollow changes

  const handleOnChange = (e) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleUpdate = () => {
    axios.put('http://localhost:5000/profile', profile)
      .then(() => console.log("Updated Successfully"))
      .catch(error => console.log(error))
  }

  const handleUnFollow = (id) => {
    axios.delete(`http://localhost:5000/followers/${id}`)
      .then(() => {
        alert("Unfollowed")
        setUnfollowed(prev => !prev)  // toggle to trigger useEffect
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='m-5'>

      {profile ? (
        <div>
          <img
            src={profile.profile_pic}
            alt="profile"
            className='profile rounded-circle'
            width="120"
          />

          <h5 className='mt-3'>{profile.username}</h5>

          <input
            type='text'
            name='username'
            value={profile.username}
            className='form-control mt-3'
            onChange={handleOnChange}
          />

          <input
            type='text'
            name='profile_pic'
            value={profile.profile_pic}
            className='form-control my-3'
            onChange={handleOnChange}
          />

          <button
            className='btn btn-primary'
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      ) : (
        <div>Loading Profile...</div>
      )}

      <div className='mt-5'>
        {followers.length > 0 ? (
          followers.map(follower => (
            <div key={follower.id} className='d-flex my-2'>
              {follower.username}
              <button
                className='btn btn-secondary ms-auto'
                onClick={() => handleUnFollow(follower.id)}
              >
                Unfollow
              </button>
            </div>
          ))
        ) : (
          <div>Loading Followers...</div>
        )}
      </div>

    </div>
  )
}

export default Profile
