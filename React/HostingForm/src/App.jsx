import { resolveConfig } from 'vite'
import './App.css'
import { useForm } from "react-hook-form"


function App() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()


  const delay = ()=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    // await delay(4)
    let r = await fetch("http://localhost:3000/", {method: "POST", body: JSON.stringify(data)})
    let res = await r.text()
    console.log(data, res)
    // if(data.username!== "shubham"){
    //   setError("blocked", {message: "sorry this is user is blocked "} )

    // }
    // if(data.username === "rohan"){

    // }
  }

  return (
    <>
    {isSubmitting &&  <div>Loading... </div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='username'{...register("username", {required: true, minLength: {value: 3, message: "Min lenght 3"}, maxLength: {value: 8, message: "Max lenght 8"}})} type="text"  />
            <br />
          {errors.username && <div className='red'>{errors.username.message}</div>}

            <input placeholder='password'{...register("password")} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
            <br />
           <input disabled={isSubmitting} type="submit" value="submit"/>
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}

        </form>
      </div>
    </>
  )
}

export default App
// https://react-hook-form.com

