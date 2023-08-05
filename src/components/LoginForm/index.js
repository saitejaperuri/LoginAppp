import {Component} from 'react'

import Cookies from 'js-cookie'
import './index.css'



const employeList = [
  {
      id:"2645",
      name:"sai",
      designation:"Developer"
  },
  {
      id:"1545",
      name:"Teja",
      designation:"TeamLeader"
  },
  {
      id:"3030",
      name:"Charan",
      designation:"Manager"
  },
]

class LoginForm extends Component {
  state = {
    password: '',
    showSubmitError: false,
    showSubmitSuccess:false,
    activeId:employeList[0].id,
    showFileSuccess:false,
    showFileError:false,
   
  }

  onChangeDesg = event => {  
    this.setState({activeId: event.target.value})  
  }

  getPassWord = () => {
    const {activeId} = this.state
    const newList = employeList.find(
      each => each.id === activeId,
    )
    return newList.id
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {password,activeId} = this.state
    const pass = this.getPassWord(activeId)
    
    if (password === pass){
      this.setState({showSubmitSuccess:true})
      this.setState({showSubmitError:false})
    }else{
      this.setState({showSubmitError:true})
      this.setState({showSubmitSuccess:false})
    }
      
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {activeId} = this.state
    return (
      <>
         <select onChange={this.onChangeDesg} value={activeId}>
                {employeList.map(each => (
                <option key={each.id} value={each.id}>
                {each.designation}
                </option>
               ))}
               </select>
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="user-input"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  onGoto = () => {
    const {activeId,password}=this.state
    if (activeId === employeList[2].id && password === "3030"){
        const {history} = this.props
       
        Cookies.set('jwt_token', "3030", {
          expires: 30,
          path: '/files',
        })
        history.replace('/files')
        

      this.setState({showFileSuccess:true})
      this.setState({showFileError:false})
    }
    else{
      this.setState({showFileError:true})
      this.setState({showFileSuccess:false})
    }
   
  }

  render() {
    const {showSubmitError,showSubmitSuccess,showFileSuccess,showFileError} = this.state
    
    return (
      <div className="app-container">
        <div className="card-container">
          
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPassword()}</div>
            <button className="login-button" type="submit">
              Login
            </button>           
            {showSubmitError && <p className="error-msg">invalidDetails</p>}
            {showSubmitSuccess && <p className="success-msg">Logged in successfully </p>}
          </form>
          <button className="login-button" onClick={this.onGoto} >
              Go to Files
            </button>
            {showFileError && <p className="error-msg">Access denied</p>}
            {showFileSuccess && <p className="success-msg">Access Available </p>}
        </div>
        
      </div>
    )
  }
}

export default LoginForm


