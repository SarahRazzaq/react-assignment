import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
 
function Form() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");


  
    return (
        <div className="container">
            <h1 className="form-h1">Fill in your information and we'll get back to you</h1>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <label className="form-label">Enter your name:</label><br/>
                <input className="form-inputs" {...register("name", { required: true, maxLength: 20 })}placeholder="Name" /><br/>
                <label className="form-label">Enter your email:</label><br/>
                <input className="form-inputs" {...register("lastName", { pattern: /^[A-Za-z]+$/i })}placeholder="Email" /><br/>
                <label className="form-label">Enter your message:</label><br/>
                <textarea className="form-inputs" {...register("aboutYou",{ required: true, minLength: 10 })} placeholder="Message"  /><br/>
                <input className="form-input-btn" type="submit" />
                <div className="message-box">
                <p>{data}</p>
                </div>
            </form>
        </div>
    );
  }
  
  export default Form;