// write your custom hook here to control your checkout form
import {useState} from 'react'

export const useForm = (initialValue) => {
  
  const [values, setValues] = useState(initialValue)

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

//   const handleSubmit = e => {
//     e.preventDefault();
//     cb();
    
//   };

//   const clearForm = e => {
//     e.preventDefault();
//     setValues(initialValue);
//   };

  return [values, handleChanges];
};
