import * as React from 'react';
import { people } from './data.js';
import { getImageUrl } from './utils.js';
// const list=[
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];

//   const list = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];

export default function RenderingList()
{

    //   const listItems = list.map(list => <li>{list}</li>);
    //   return <ul>{listItems}</ul>;

      const FilterChemists = people.filter(x => x.profession === 'chemist' )

      const listItems = FilterChemists.map(x => 
        <li key={x.id}>
        <img
          src={getImageUrl(x)}
          alt={x.name}
        />
         <p>
          <b>{x.name}:</b>
          {' ' + x.profession + ' '}
          known for {x.accomplishment}
        </p>
        </li>
      )

      return <ul>{listItems}</ul>;

}