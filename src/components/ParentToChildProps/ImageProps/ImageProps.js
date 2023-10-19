import * as React from 'react';
import { getImageUrl } from './utils.js';
function Avatar({size,person})
{
    return (
        <img
          className="avatar"
          src={getImageUrl(person)}
          alt={person.name}
          width={size}
          height={size}
        />
      );
}

export default function ImageProps()
{
    return(
        <div>
            <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
        </div>
    );
}