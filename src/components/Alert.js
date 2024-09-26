import React from 'react'

export default function Alert
(props) {
    const capitalize =(str) => {
        if (!str || typeof str !== 'string') {
          return '' ;// Handle the case where str is undefined or not a string
        }
        return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);
      }
      
  return (
  
    <div style={{height:'40px'}}>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
  <strong> {capitalize (props.alert.type)}</strong>  {props.alert.msg}
</div>
</div>
  )
}
