import React from 'react';



const Model = (props) => {

  return (
    <article className="mt-3">
        <div className="d-flex">
            <span className="ml-4 pl-2">
              <i className={props.icon} />
            </span>
            <h5 className="ml-4 font-weight-bold">{props.title}</h5>
        </div>

        <div>
          { props.items.map( (dat, index) => 
          (
            <dl className="d-flex ml-3 pl-2 mt-3 row" key={index}>
              <dt>{dat.item}</dt>
              <dd className="text-justify col-11">{dat.content}</dd>
            </dl>
          ))}
        </div>
      <div className="line mx-auto my-4"></div>
    </article>
  )
}

export default Model;