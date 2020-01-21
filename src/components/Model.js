import React from 'react';


const Model = (props) => {
// const Model = ({ icon, title, item, content, item2, content2, item3, content3, item4, content4 }) => {
  //console.log("Esto es Model")
  //console.log(props.personalData.info[0])

  //const { icon, title, item, content, item2, content2, item3, content3, item4, content4 } = props;

  // console.log("Esto es props")
  // console.log(props)

  // console.log("Esto es props.data")
  // console.log(props.data)

  // console.log("Esto es props.data.info[0]")
  // console.log(props.data.info[0])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <i className={props.icon} />
            </td>
            <td>{props.title}</td>
          </tr>
        </thead>
        <tbody>
          { props.items.map( (dat, index) => 
          (
            <tr key={index}>
              <td>{dat.item}</td>
              <td>{dat.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Model;