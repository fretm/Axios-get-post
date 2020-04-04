import React from 'react';
import axios from 'axios'

class PostForm extends React.Component {
   state ={
    userid:'',
    title :"",
    body :"",

  
   }
   changehandler=(event)=>{
this.setState({[event.target.name]:event.target.value})
   } 
   submithandler=(event)=>{
    event.preventDefault();
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(res=>console.log(res)).catch(err=>console.log(err))
   }
    render() { 
        const {userid,title,body} = this.state
        return (   <div> 
            <form onSubmit={this.submithandler}>
                <div>
                <input  type="text" name="userid" value={userid} onChange={this.changehandler}/>
                </div>
                <div>
                <input  type="text" name="title" value={title} onChange={this.changehandler}/>
                </div>
                 <div> 
                <input  type="text" name="body" value={body} onChange={this.changehandler}/>
                </div>
 
 <button type="submit"> submit</button>
            </form>
        </div> );
    }
}
 
export default PostForm ;