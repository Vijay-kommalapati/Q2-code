import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import axios from "axios";

function App(){
    const [usersArray,setUsersArray]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [totalPages,setTotalPages]=useState([1]);

    useEffect(()=>{
        axios.get(`https://reqres.in/api/users?page=${currentPage}`)
        .then(res=>{
            setUsersArray(res.data.data);
            setTotalPages(res.data.total_pages);
        })
        .catch((err)=>{
            console.log(err);
        })
        
    },[currentPage])


    function pageChangeFunc(e){
        setCurrentPage(e.target.value);
    }
    return <div>
        <Header />
        <div className="pages">
        <p>pages</p>
        {[...Array(totalPages)].map((item,index)=>{
            return <button key={index} 
            style={{backgroundColor: (index+1)==currentPage&&"gray"}}
            onClick={pageChangeFunc}
            value={index+1}
            
            >{index+1}</button>
        })}
       
        </div>
        
        <div className="usersbox">
    
            {usersArray.map((item)=>{
                return <Card 
                key={item.id}
                src={item.avatar}
                fn={item.first_name}
                ln={item.last_name}
                email={item.email}
                />
            })}
        </div>
        
       
    </div>
}

export default App;