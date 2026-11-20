import React from 'react'

const Profile = () => {

  const name = "Kajarin Kaewmalai"
  const birthday ="05 September 2548"
  const age = 21
  const email = "kkhcarinthr@gmail.com"
  const phone = "061-334-8220"
  const department = "digital technology"
  const salary = 10000

  return (
    <>
      <h1>Profile: {name}</h1>
      <p>birthday: {birthday}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Department: {department}</p>
      <p>Salary: {salary.toLocaleString()} THB</p>
      
    </>
  )
}

export default Profile
