import Button from '@mui/material/Button';

// Functional component for displaying Person info
export default function TextItem({ name, age, index, updateDetails }) {
  return (
    <div>
      <p>
        Name: {name}
      </p>
      <p>
        Age: {age}
      </p>
      <Button onClick={()=>updateDetails(index)}>Reset Details</Button>
    </div>
  )
}