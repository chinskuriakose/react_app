import React from 'react'
import Person from './Person'

function NameList () {
  const persons = [
    {
      id: 1,
      name: 'Chins',
      age: 26,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Chintu',
      age: 31,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Ruby',
      age: 29,
      skill: 'Vue'
    }
  ]

  const personList = persons.map(person => (
    <Person key={person.id} person={person}></Person>
  ))
  //   const names = ['Chins', 'Chintu', 'Ruby']
  //   const nameList = names.map(name => <h2>{name}</h2>)
  return <div>{personList}</div>
}

export default NameList
