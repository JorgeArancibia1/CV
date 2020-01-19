import React from 'react'


function Model(props) {
  //console.log("Esto es Model")
  //console.log(props.personalData.info[0])

  const { icon, title, item, content, item2, content2, item3, content3 } = props;

  // console.log("Esto es")
  // console.log(props.personalData)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <i className={icon} />
            </td>
            <td>{title}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item}</td>
            <td>{content}</td>
          </tr>
          <tr>
            <td>{item2}</td>
            <td>{content2}</td>
          </tr>
          <tr>
            <td>{item3}</td>
            <td>{content3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Model;