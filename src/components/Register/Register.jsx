import React from "react";

const Register = () => {
    const handlesubmit = (e) => {
       e.preventDefault()
       console.log('dbzvjbvd')
    }
  return (
    <div className="w-[50%] mx-auto">
      <form className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your First Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter Your Last Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Create a new Password"
            className="input input-bordered"
            required
          />
         
        </div>

        <div className="form-control mt-6">
          <button onClick={handlesubmit} className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
