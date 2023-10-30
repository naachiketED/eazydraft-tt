import React from 'react';
import Button from '@mui/material/Button';


function TextItem({names , ages , updateDetails}){

    return (
      <div>
        <p>
          Name: {names}
        </p>
        <p>
          Age: {ages}
        </p>
        <Button onClick={()=>updateDetails(names, ages)}>Reset Details</Button>
      </div>
    )
  }

  export default TextItem;