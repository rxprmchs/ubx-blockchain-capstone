import { useState } from 'react';

import moment from 'moment';
//import controller or api

const bankAccounts = [
    {   
        "accountNumber": "000032123212",
        "accountType": "SA",
        "accountName": "Savings Account",
        "totalBalance": "20000",
        "currency": "PHP",
        "transactions": [
            {
                "date": moment().subtract(5, 'days').format('MMMM Do YYYY'),
                "description": "Deposit 3",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "10000",
                "runningBalance": "20000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(9, 'days').format('MMMM Do YYYY'),
                "description": "Deposit 2",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000.30",
                "runningBalance": "10000.30",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(12, 'days').format('MMMM Do YYYY'),
                "description": "Deposit 1",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "5000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(6, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(8, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "5000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(9, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "2500",
                "runningBalance": "2500",
                "currency": "PHP"
            },
        ],
    },
    {   
        "accountNumber": "000034562452",
        "accountType": "SA",
        "accountName": "Another Account",
        "totalBalance": "30000",
        "currency": "PHP",
        "transactions": [
            {
                "date": moment().subtract(3, 'days').format('MMMM Do YYYY'),
                "description": "Transfer 3",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "10000",
                "runningBalance": "30000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(4, 'days').format('MMMM Do YYYY'),
                "description": "Transfer 2",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "10000",
                "runningBalance": "20000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(7, 'days').format('MMMM Do YYYY'),
                "description": "Transfer 1",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "10000",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(6, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(8, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "5000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(9, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "2500",
                "runningBalance": "2500",
                "currency": "PHP"
            },
        ],
    },
    {   
        "accountNumber": "00505465144",
        "accountType": "SA",
        "accountName": "my1stAccount",
        "totalBalance": "10000",
        "currency": "PHP",
        "transactions": [
            {
                "date": moment().subtract(1, 'days').format('MMMM Do YYYY'),
                "description": "Payment EB",
                "branch":"Mandaluyong",
                "debitAmount": "5000",
                "creditAmount": "",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(2, 'days').format('MMMM Do YYYY'),
                "description": "Payment EB",
                "branch":"Mandaluyong",
                "debitAmount": "5000",
                "creditAmount": "",
                "runningBalance": "15000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(4, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "10000",
                "runningBalance": "20000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(6, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(8, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "5000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(9, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Mandaluyong",
                "debitAmount": "",
                "creditAmount": "2500",
                "runningBalance": "2500",
                "currency": "PHP"
            },
        ],
    },
    {   
        "accountNumber": "00123456789",
        "accountType": "SA",
        "accountName": "my2ndAccount",
        "totalBalance": "10000",
        "currency": "PHP",
        "transactions": [
            {
                "date": moment().subtract(1, 'days').format('MMMM Do YYYY'),
                "description": "Payment EB",
                "branch":"Makati",
                "debitAmount": "5000",
                "creditAmount": "",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(2, 'days').format('MMMM Do YYYY'),
                "description": "Payment EB",
                "branch":"Makati",
                "debitAmount": "5000",
                "creditAmount": "",
                "runningBalance": "15000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(4, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Makati",
                "debitAmount": "",
                "creditAmount": "10000",
                "runningBalance": "20000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(6, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Makati",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(8, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Makati",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "5000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(9, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Makati",
                "debitAmount": "",
                "creditAmount": "2500",
                "runningBalance": "2500",
                "currency": "PHP"
            },
        ],
    },
    {   
        "accountNumber": "00987654321",
        "accountType": "SA",
        "accountName": "my3rdAccount",
        "totalBalance": "10000",
        "currency": "PHP",
        "transactions": [
            {
                "date": moment().subtract(1, 'days').format('MMMM Do YYYY'),
                "description": "Payment EB",
                "branch":"Pasig",
                "debitAmount": "5000",
                "creditAmount": "",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(2, 'days').format('MMMM Do YYYY'),
                "description": "Payment EB",
                "branch":"Pasig",
                "debitAmount": "5000",
                "creditAmount": "",
                "runningBalance": "15000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(4, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Pasig",
                "debitAmount": "",
                "creditAmount": "10000",
                "runningBalance": "20000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(6, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Pasig",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "10000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(8, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Pasig",
                "debitAmount": "",
                "creditAmount": "5000",
                "runningBalance": "5000",
                "currency": "PHP"
            },
            {
                "date": moment().subtract(9, 'days').format('MMMM Do YYYY'),
                "description": "Top up",
                "branch":"Pasig",
                "debitAmount": "",
                "creditAmount": "2500",
                "runningBalance": "2500",
                "currency": "PHP"
            },
        ],
    },
    
];

const userAccounts = [
    {
        username: "Juancruz",
        password: "Pass.123",
        firstName: "Juan",
        middleName: "Dela",
        lastName: "Cruz",
        accountType: "Basic",
        policyNumber: "2175452342"
        // bankAccounts: bankAccounts

    },
    {
        username: "mjmadelo",
        password: "Pass.123",
        firstName: "MJ",
        middleName: "",
        lastName: "Mandelo",
        accountType: "Basic",
        policyNumber: "4275452342"

        // bankAccounts: bankAccounts

    },
    {
        username: "jacornes",
        password: "Pass.123",
        firstName: "James",
        middleName: "C",
        lastName: "Cornes",
        accountType: "Master",
        policyNumber: "42069426969"
        // bankAccounts: bankAccounts

    }
];
const useLoginAccount = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bankAccounts, setBankAccounts] = useState([]);
    const [currentAcc, setCurrentAcc] = useState([]);
    const [hasSelectedAcc, setHasSelectedAcc] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const validateLogin = (user, pass) => {
        if(user && pass){
            let acc = userAccounts.find(userAcc => 
                userAcc.username === user && userAcc.password === pass
            );
            
            if( acc ){
                setIsLoggedIn(true);
                return acc.firstName;
            }
        }
        return false;
    }

    const logOutUser = () => {
        // setBankAccounts([]);
        // setCurrentAcc([]);
        setHasSelectedAcc(false)
        setIsLoggedIn(false);
    }

    const setCurrentAccount = (acc) => {
        setCurrentAcc(acc);
    }

  

    


    return {
        validateLogin,
        isLoggedIn,
        logOutUser,
        setCurrentAccount,
        currentAcc,
        bankAccounts,
        hasSelectedAcc,
        username,
        setUsername,
        password,
        setPassword
    };
};

export default useLoginAccount;

