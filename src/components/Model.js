import React from 'react';



const Model = (props) => {

  return (
    <article className="mt-3 ml-3 mr-0">
      <section className="d-flex align-items-end ">
        <span className="ml-2">
          <i className={props.icon} />
        </span>
        <h5 className="ml-4 font-weight-bold bd-highlight my-0 py-0">{props.title}</h5>
      </section>

      <section className="">
        {props.items.map((dat, index) =>
          (
            <dl className="d-flex ml-3 pl-2 mt-3 row" key={index}>
              {
                props.i? <i className={dat.item}></i>
              : <dt>{dat.item}</dt>
              }
              <dd className="text-justify col-11 col-lg-10 pl-2 pr-3">{dat.content}</dd>
            </dl>
          ))}
      </section>
      {!props.hidden && <div className="line mx-auto my-4"></div>}

    </article>
  )
}

export default Model;