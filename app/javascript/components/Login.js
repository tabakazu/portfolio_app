import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  handleSubmit(e) {
    const target = e.target
    e.preventDefault()

    const user = {
      user: {
        email: target.email.value.trim(),
        password: target.password.value.trim()
      }
    }

    console.log(user)

    axios.post(`/api/v1/auth/token`, user)
      .then(res => {
        const token = res.data.token
        localStorage.setItem('token', token)
        console.log(token)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="email" type="email" placeholder="Email ..." /> <br />
          <input name="password" type="password" placeholder="Password ..." /> <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Login






// class Login extends React.Component {
//   handleSubmit(event) {
//     const user = {
//       user: {
//         email: this.target.email,
//         password: this.target.password
//       }
//     }
//
//     axios.post(`/api/v1/auth/token`, user)
//       .then(res => {
//         const token = res.data.token
//         alert(token)
//         localStorage.setItem('token', token)
//       })
//       .catch(function (error) {
//         alert(error)
//         console.log(error)
//       })
//   }
//
//   render () {
//     return (
//       <div>
//         <p>{localStorage.getItem('token')}</p>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Email:
//             <input name="email" type="email" />
//           </label>
//
//           <label>
//             Password:
//             <input name="password" type="password" />
//           </label>
//
//           <input type="submit" value="Submit" />
//         </form>
//
//         <div>This is the Login page</div>
//       </div>
//     )
//   }
// }
//
// export default Login
