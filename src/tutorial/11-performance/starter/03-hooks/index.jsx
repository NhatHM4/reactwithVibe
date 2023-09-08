import { useCallback, useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import Count from './Count';
const LowerState = () => {
  const [people, setPeople] = useState(data);
  
  const removePerson = useCallback((id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  },[people])
  return (
    <section>
      <Count/>
      <List people={people} removePerson={removePerson}/>
    </section>
  );
};
export default LowerState;
