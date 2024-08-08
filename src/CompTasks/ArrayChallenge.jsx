import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p><b>{person.name}:</b>{' ' + person.profession + ' '}known for{person.accomplishment}</p>
    </li>);

  const chemistList = people.filter(e => e === "chemist").map(item =>
    <li key={item.id}>
      <img src={getImageUrl(item)} alt={item.name} />
      <p><b>{item.name}</b>:{item.profession} known for {item.accomplishment}</p>
    </li>);


  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
      <h1>Only Chemist</h1>
      <ul>{chemistList}</ul>
    </article>
  );
}
