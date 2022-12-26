import React from 'react';

const Signup = () => {
    return (
        <div className='my-12'>
        <div className="login bg-slate-500 w-[400px] mx-auto py-10 px-4 rounded shadow-xl">
      <h2 className='text-3xl text-center mb-2'>Register Now</h2>
      <hr />

      <form className='text-center my-5'>
      <input type="text" placeholder="Email Adress" className="input input-bordered input-info w-full max-w-xs my-3" />
      <input type="text" placeholder="Email Adress" className="input input-bordered input-info w-full max-w-xs my-3"  />
      <input type="text" placeholder="Email Adress" className="input input-bordered input-info w-full max-w-xs my-3" />
      <p className='my-1'>Upload profile Picture</p>
      <input type="file" placeholder="Email Adress" className="file-input file-input-bg-base-100  input-info w-full max-w-xs my-3"  />
     
      <button className='btn w-full max-w-xs my-3 shadow-lg' type="submit" name='submit'>Sign Up</button>
      
      </form>

        </div>
      </div>
    );
};

export default Signup;