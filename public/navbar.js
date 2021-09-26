const useContext  = React.useContext;

function NavBar(){
  const userContext = useContext(UserContext);

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/transfer/">Transfer</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">AllData</a>
          </li>     
        </ul>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            {
              (userContext.user != null) ? (
                <div> 
                  <span class="navbar-text">
                    {userContext.user.email} | 
                  </span>
                  <button type="button" class="btn btn-outline-primary" onClick={() => userContext.setUser(null)}>
                       Logout
                  </button>
                </div>
              ) : (
                <div/>
              )
            }     
        </ul>
      </div>
    </nav>

  );
}

// <nav class="navbar navbar-expand-md navbar-light bg-light">
//   <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
//       <ul class="navbar-nav mr-auto">
//           <li className="nav-item">
//             <a className="nav-link" href="#/CreateAccount/">Create Account</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/login/">Login</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/deposit/">Deposit</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/withdraw/">Withdraw</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/balance/">Balance</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#/alldata/">AllData</a>
//           </li>
//       </ul>
//   </div>
//   <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
//       <ul class="navbar-nav ml-auto">
//           {
//             (userContext.user != null) ? (
//                 <span class="navbar-text">
//                   {userContext.user.name}
//                 </span>
//             ) : (
//               <div/>
//             )
//           }     
//       </ul>
//   </div>
// </nav>