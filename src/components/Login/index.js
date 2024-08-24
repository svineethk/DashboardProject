import {Component} from  'react'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {  FormContainer, Header, InputContainer, LoginContainer,CheckboxContainer,InputPasswordContainer, LabelElement, Container, ButtonContainer, ErrorMessage,ParagraphElement, SpanElement, ParagraphElementOther } from './StyledComponent'

class Login extends Component{
    state={username:'',password:'',showSubmitError:false,errorMsg:"",showPassword:false}

    onChangeUsername = event => {
        this.setState({username: event.target.value})
      }


    onToggleShowPassword = (event) => {
        this.setState({showPassword:event.target.checked})
    }

    onChangePasswordField = (event) => {
        this.setState({password:event.target.value})
    }



    renderUsernameField = () => {
        const {username} = this.state

        return(
            <>
            <InputContainer type="text" placeholder="Email" value = {username} onChange={this.onChangeUsername}/>
            </>
        )
    }

    
    renderPasswordField = () => {
        const {showPassword,password} = this.state

        return(
            <InputPasswordContainer type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={this.onChangePasswordField}/>
        )
    }

    

    renderShowPasswordField = () => {
        return(
            <Container>
                <CheckboxContainer type="checkbox" onChange={this.onToggleShowPassword} id="showPassword"/>
                <LabelElement htmlFor='showPassword'>Show Password</LabelElement>
            </Container>
        )
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const {username,password} = this.state

        if(username === ""  && password === ""){
            this.setState({showSubmitError:true,errorMsg:'Username and Password Can\'t be Empty'})
        }

        else if(username === ""){
            this.setState({showSubmitError:true,errorMsg:'Username Can\'t be Empty'})
        }
        else if(password === ""){
            this.setState({showSubmitError:true,errorMsg:'Password Can\'t be Empty'})
        }
        else{
            this.setState({showSubmitError:false,errorMsg:''})

            if(username !== "" && password !== ""){
                Cookies.set('jwtToken','LoginAccess2024')
            }
        }


    }

    render(){
        const {showSubmitError,errorMsg} = this.state
        const jwtToken = Cookies.get('jwtToken')

        if(jwtToken !== undefined){
            return <Navigate to="/"/>
        }
        return(
           <LoginContainer>
            <FormContainer onSubmit={this.onSubmitForm}>
            <Header>Login</Header>
            {this.renderUsernameField()}
            {this.renderPasswordField()}
            {this.renderShowPasswordField()}
            <ButtonContainer type="submit">Login</ButtonContainer>
            {showSubmitError ? <ErrorMessage>{errorMsg}</ErrorMessage> : ""}
            <ParagraphElement>Forgot <SpanElement>Password</SpanElement>?</ParagraphElement>
            <ParagraphElementOther>Don't have an account? <SpanElement>Sign up</SpanElement></ParagraphElementOther>
            </FormContainer>
            
           </LoginContainer>
        )
    }
}


export default Login