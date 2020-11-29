import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Locked from '../cards/Locked';
import Unlocked from '../cards/Unlocked';
import Header from '../Header';

const Benevits = () => {    
    const [ wallet, setWallet ] = useState([]);
    const [ locked, setLocked ] = useState([]);
    const [ unlocked, setUnlocked ] = useState([]);    

    let token = localStorage.jwt;
            
    useEffect(() => {        
        const URL = "https://staging.api.socioinfonavit.io/api/v1/member/landing_benevits";
        axios.get(URL, {
            headers: {
                'Authorization': token
            }
        }).then((res) => {            
            setLocked(res.data.locked);
            setUnlocked(res.data.unlocked);
        })
        .catch((error) => {
            console.log(error);
        })
        
    })



    useEffect(() => {        
        const URLWALLETS = "https://staging.api.socioinfonavit.io/api/v1/member/wallets";
        axios.get(URLWALLETS)
        .then(res => {
            setWallet(res.data);
        })             
    }, [])
            

    

    const logout = () => {
        localStorage.removeItem('jwt');
    }


    // Para mostrar los elementos locked por tipo de cartera
    
    const lockedFilter = wallet.map(item => 
        locked.filter(locked => locked.wallet.id === item.id)        
    );
    
    const walletLocked = lockedFilter.map(data => 
        data.map(item => 
            <Locked key={item.id} primary_color={item.wallet.primary_color} image={item.vector_full_path} wallet = {item.wallet.name}/>
        )
        );        
    
    const unlockedFilter = wallet.map(item => 
        unlocked.filter(unlocked => unlocked.wallet.id === item.id)        
        );
        
    // Para mostrar los elementos unlocked por tipo de cartera
    const walletUnlocked = unlockedFilter.map(data => 
        data.map(item => 
            <Unlocked key={item.id} description={item.description} image={item.ally.mini_logo_full_path} primary_color={item.wallet.primary_color} wallet = {item.wallet.name} location={item.territories} expiration={item.expiration_date}/>
        )
    );        
    
    

    return (
        <div>
            <Header logout={logout} />
            <div className="container">
                <div className="row justify-content-center">                                                                                        
                    { walletUnlocked }                
                    { walletLocked }                
                </div>
            </div>
        </div>
    );

    

}
 
export default Benevits;

