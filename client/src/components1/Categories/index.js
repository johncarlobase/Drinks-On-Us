import React from './node_modules/react';

import './node_modules/bootstrap/dist/css/bootstrap.min.css';


export default function Categories(props) {

  return (props.categories.map(category => {

    return <button key={category.strCategory}
      onClick={() => props.showInfo(category.strCategory)}
      id={category.strCategory}>

      {category.strCategory}
    </button>
  }))
}