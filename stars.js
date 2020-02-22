import React from "react"


class Star extends React.Component{
     constructor(props){
         super(props)
//this.state={ Stars:[]}
     } 


   
        
  
         //search=(i)=>{
            
            
        //     this.props.ratechercher({})
        // }


    render()
    {
        let Stars=[]
        for(let i = 0 ; i <= 4 ; i++){
        if(i < this.props.rates) Stars.push(<i class="far fa-star" onClick={()=>this.props.ratechercher(i+1)} >★</i>)
        else Stars.push(<i class="far fa-star" onClick={()=>this.props.ratechercher(i+1)}  >☆</i>)}

    return(<div>

{Stars}
</div>
)}}
    
export default Star