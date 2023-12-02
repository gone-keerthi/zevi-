import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import DB from './firebase';
import Button from '@mui/material/Button';
const Transaction = () => {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate wallet address
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!walletAddress.trim() || !addressRegex.test(walletAddress)) {
      setError('Invalid wallet address. Please enter a valid Ethereum address.');
      return;
    }

    // Validate amount
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
      setError('Invalid amount. Please enter a number between 0 and 10,000.');
      return;
    }

    // Clear any previous errors
    setError('');

    // try {
    //     const docRef = await DB.collection('wallets').add({
    //       walletAddress,
    //       amount: parseFloat(amount)
    //     });
  
    //     console.log('Document written with ID:', docRef.id);
  
    //     // You can also reset the form fields here if needed
    //     setWalletAddress('');
    //     setAmount('');
    //   } catch (error) {
    //     console.error('Error adding document:', error.message);
    // }

    // Handle form submission logic here (e.g., send data to backend)
    console.log('Wallet Address:', walletAddress);
    console.log('Amount:', amountValue);
    // navigate('/data')
  };
  const navigateToNextPage = () => {
    // Replace '/next-page' with the actual path you want to navigate to
    navigate('/data');
  };
  return (
    <div className='transaction-component' style={{background:'#b2ebf2', width:'100vw', height:'100vh', display:'flex',alignItems:'center', justifyContent: 'center' }}>
    <form onSubmit={handleSubmit} 
     style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent:'center', background:'#00695c', width:'60%', height:'40%', gap:'30px'}}
    >
      <div>
        <label htmlFor="walletAddress">Wallet Address:</label>
        <input
          type="text"
          id="walletAddress"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          style={{width:'200px' }}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          max="10000"
          style={{width:'200px'}}
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Button type="submit" variant='container' color='success'>Submit</Button>
      <Button id='data-page-btn' onClick={navigateToNextPage}
    variant='contained'
    color='success'
    >Next</Button>
    </form>
    </div>
  );
};

export default Transaction;
