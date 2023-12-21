const SignIn = () => {
    return ( 
        <div className="signin">
        <form>
        <label> Name : </label>
        <input type="text"></input>

        <label> E-mail :  </label>
        <input type="email"></input>

        <label> password : </label>
        <input type="password"></input>
       
    </form>
     <button >Sign up</button>
     </div>
     );
}
 
export default SignIn;