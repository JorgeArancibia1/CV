import React from 'react'

const CertificationsModel = (props) => {
  return (
    <article className="d-flex flex-wrap">
      <section className="d-flex flex-wrap sombra pb-2">
        <span className="ml-4 pl-2">
          <i className={props.icon} />
        </span>
        {
          !props.space? <h5 className="ml-4 font-weight-bold">{props.title}</h5>
          : <h5 className=" ml-4 mt-4">{props.title}</h5>
        }
      </section>

      <section className="flex-wrap d-flex min articleBox mt-4">
        {props.items.map((dat, index) =>
          (
            <dl className="d-flex ml-3 pl-2 mt-3 row box" key={index}>
              <dt>{dat.item}</dt>
              <dd className="col-11 pl-2 pr-3">{dat.content}</dd>
            </dl>
          ))}
      </section>
    </article>
  )
}


export default CertificationsModel;