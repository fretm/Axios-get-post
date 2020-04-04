import React from 'react';
import axios from 'axios';


class Postlist extends React.Component{
   state ={
     posts:[],
     errormsg: "something went wrong "
   }

componentDidMount(){

    axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response =>{
             console.log(response)
               this.setState((prevstate,props) =>{
                   return {
                    posts:response.data
                   }
               })
         })
      .catch(erroe=>{
     console.log("erroe")
     this.setState({erroe: 'errore retriving data'})
})
}
  render(){
      const {posts ,errormsg}= this.state
    return(
        <div className='APP '> 
         List of post
         {
             posts.length ? posts.map(item=> <div key={item.id}> {item.title}</div>):null
         }
         {
             errormsg?<div>{errormsg}</div>:null
         }
        </div>
    )
    }
}
export default Postlist;