// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile/Profile'
import userData from './userData.json'
import FriendList from './components/FriendList/FriendList'
import friendsData from './friendsData.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './transactions.json'

export default function App() {
    return (
        <>
        <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
        />
        <FriendList friends={friendsData} />
        <TransactionHistory items={transactions} />
        
        </>
    )
};

