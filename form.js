import React,{Component} from 'react';
import AllowOnlyNumber from './number';

 const initialState ={
       username : '',
       mail : '',
       password : '',
       conpassword : '',
       mailError : '',
       passwordError : '',
       conpasswordError : '',
       nameError: '',
       sameError: '',
       checkError: '',
       checked: false,
       hint: '',
       hintError : ''
 }


 class Form extends Component{ 
    constructor(props){
       super(props)
       this.state = initialState;
   }
    handleusernamechange = (event) => {
      this.setState({
        username : event.target.value
      })
    } 

    handlemail = (event) => {
      this.setState ({
        mail : event.target.value
      })
    }

    handlepasswordchange = (event) => {
      this.setState({
        password : event.target.value
      })
    } 
    handleconpasswordchange = (event) => {
      this.setState({
        conpassword : event.target.value
      })
    } 

    handleHint = (event) => {
      this.setState ({
        hint : event.target.value
      })
    }

    handleCheck=(event) =>
    {
      this.setState({
        checked : true
      })
    }
  
    validate = () => {
      let nameError="";
      let passwordError ="";
      let mailError ="";
      let conpasswordError ="";
      let sameError =  "";
      let checkError =  "";
      let hintError = "";

      if(!this.state.mail.includes('@') || !this.state.mail.includes('.') ) 
      {
        mailError ="Invalid E-mail";
      }
   
      if(!this.state.username || !this.state.username.includes(' ')) 
      {
        nameError ="Name cant be Blank";
      }

      if(!this.state.username.includes(' ')) 
      {
        nameError ="Name must have 2 word and start with a capital";
      }

      if(!this.state.password || this.state.password.includes(' ')) 
      {
        passwordError ="Password cant be Blank";
      }
   
      if(!this.state.conpassword || this.state.conpassword.includes(' '))
      {
        conpasswordError ="Password cant be Blank";
      }

      if(!(this.state.password==this.state.conpassword))
      {
        sameError="Both passwords are Different"
      }

      if((this.state.password==this.state.hint))
      {
        hintError="Password and Hint must be Different"
      }

      if(!this.state.checked) 
      {
        checkError ="check the box";
      }

      if(mailError)
      {
        this.setState({mailError});
        return false;
      }
   
      if(passwordError)
      {
        this.setState({passwordError });
        return false;
      }
   
      if(conpasswordError)
      {
        this.setState({conpasswordError });
        return false;
      }

      if(sameError)
      {
        this.setState({sameError});
        return false;
      }
     
      if(hintError)
      {
        this.setState({hintError});
        return false;
      }

      if(nameError)
      {
        this.setState({nameError });
        return false;
      }

      if(!this.state.checked )
      {
        this.setState({checkError });
        return false
      }
      return true;

    };


    handlesubmit=(event) =>{
      event.preventDefault();
      const isValid= this.validate();
      if(isValid)
      {
        this.setState(initialState);
      }

    }

 render()
 {
   return (
     <form onSubmit={this.handlesubmit} id="form">
        <div id="sheet">
      
          <div>
          <br/>

            <label> USERNAME </label>
            <input type='text' value={this.state.username} onChange={this.handleusernamechange} class="box1" placeholder='FirstName     SecondName'/>
         
          </div>
      

          <div class = "error">{this.state.nameError} </div>

      
          <div>
          <br/>
         
           <label> E-MAIL </label>
            <input type='text' value={this.state.mail} onChange={this.handlemail} class="box2" placeholder="   @ . "/>
      
           <div class = "error">{this.state.mailError} </div>

          </div>

          <br/>
       

          <div>
          <br/>
          
            <label> PASSWORD </label>
            <input type='password' value={this.state.password} onChange={this.handlepasswordchange} minLength={6} class="box4" placeholder="Minimum 6 Characters" />
          
            <div class = "error">{this.state.passwordError} </div>

          
          </div>
    
          <div>
          <br/>
          <label id="pass"> CONFIRM <br/>PASSWORD </label>
          <input type='password' value={this.state.conpassword} onChange={this.handleconpasswordchange} minlength={6} class="box5" placeholder="Minimum 6 Characters"/>
          <br/>
          <div class = "error">{this.state.conpasswordError} </div>
          
         </div>
         <br/>
          <div class = "error">{this.state.sameError} </div>

          <div>
  
            <label> Password Hint </label>
            <input type='text' value={this.state.hint} onChange={this.handleHint} class="box6" placeholder='Password Hint'/>

            <div class = "error">{this.state.hintError} </div>

          </div>

         <br/>
         <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/><span>Click this to accept the terms and conditions</span>
         <br/>
         <div class = "error">{this.state.checkError} </div>

         
  </div>
    
      <br/>
    
    <div id="button">
    
        <button type='submit' id="sub" 
        disabled={!this.state.username || !this.state.password || !this.state.mail  ||!this.state.conpassword } > 
        SUBMIT</button>
    
    </div>

 </form>

   )
 }
 }
 export default Form
