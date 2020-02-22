import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./search"
import Liste from './liste';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from "./model";
import Star from "./stars"

 class App extends React.Component {
 constructor(props){
super(props)
this.state={
  info:[
    {name:"freinds",
    year:"2000",
    image:"https://tse3.mm.bing.net/th?id=OIP.928DGZj05q_mkbUuy_m1VQAAAA&pid=Api&P=0&w=228&h=158",
    rate:5
  },
  {name:"Dark",
    year:"2019",
    image:"https://tse2.mm.bing.net/th?id=OIP.fjl-22t8C5HnUEnuj1rb7QHaHa&pid=Api&P=0&w=300&h=300",
    rate:3
  }
  ],
  r:0,
  keywords:""
}
 }
 addmovie=(movie)=>{
   this.setState({info:this.state.info.concat(movie)})
 }
 chercher=(x)=>{
   this.setState({
     keywords:x
   })
 }
 ratesearch=(y)=>{
   this.setState({
     r:y
   })
 }
 //el.rate >= this.state.r)
  render(){return (
    <div>
    < Search recherche={(x)=>this.chercher(x)} /> 
    <Star rates={this.state.r}  ratechercher={(y)=>this.ratesearch(y) } />   
     <Liste detail={this.state.info.filter(el =>   (el.name.toUpperCase().includes( this.state.keywords.toUpperCase().trim()))  && (el.rate >= this.state.r)) }/>
     <AddModal add={(movie)=>this.addmovie(movie)} />     
</div>
  );
}}

export default App;
