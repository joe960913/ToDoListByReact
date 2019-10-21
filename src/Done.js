import React ,{useState}from 'react'
import {connect} from 'react-redux'
function mapStateToProps(state){
    return {done:state.done}
}
function Done(props) {
    const {done,dispatch} = props
    const [display,setDisplay] = useState('none')
    return (
        <div>
            <ul>
                {
                    done.map((item,index)=>{
                       return  <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={()=>{dispatch({type:'CLEAR'})}} style={{display:{display}}}>clear</button>
        </div>
    )
}

export default connect(mapStateToProps)(Done)