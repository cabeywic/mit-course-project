const useContext  = React.useContext;

function Transfer(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="secondary"
      header="Transfer"
      status={status}
      body={show ? 
        <TransferForm setShow={setShow} setStatus={setStatus}/> :
        <TransferMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function TransferMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Transfer again
    </button>
  </>);
} 

function TransferForm(props){
  const userContext = useContext(UserContext);
  let defaultEmail = '';

  if (userContext.user != null){
    defaultEmail = userContext.user.email;
  }

  const [email1, setEmail1]   = React.useState(defaultEmail);
  const [email2, setEmail2]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle(){
    fetch(`/account/update/${email1}/${email2}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Transfer failed')
            console.log('err:', text);
        }
    });
  }

  return(<>

    From(Email)<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email1} onChange={e => setEmail1(e.currentTarget.value)}/><br/>
    To(Email)<br/>
    <input type="input" 
    className="form-control" 
    placeholder="Enter email" 
    value={email2} onChange={e => setEmail2(e.currentTarget.value)}/><br/>
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Transfer</button>

  </>);
}