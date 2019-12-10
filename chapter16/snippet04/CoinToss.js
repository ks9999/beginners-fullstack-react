import React from 'react'
import {connect} from 'react-redux'
import {tossCoin} from './actions'

class CoinToss extends React.Component {
    constructor (props) {
        super(props)
        this.tossCoin = this.tossCoin.bind(this)
    }

    componentDidMount() {
        const canvas = this.refs.canvasRef
        console.log(canvas)
       
        const ctx = canvas.getContext("2d")
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const radius = 302
  
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = 'yellow'
        ctx.fill()
        ctx.lineWidth = 1
        ctx.strokeStyle = '#003300'
        ctx.stroke()    
 
    }

    tossCoin() {

        setInterval( () => {
            const toss = {
                x: Math.round((Math.random()*604)),
                y: Math.round((Math.random()*604))
            }
    
            const canvas = this.refs.canvasRef
            const ctx = canvas.getContext("2d")
            const pointX = toss.x
            const pointY = toss.y
            const radius = 2  

            const x0 = pointX - 302
            const y0 = 302 - pointY

            const distFromCenter = Math.sqrt(x0*x0 + y0*y0)
            let insideCircle = (distFromCenter <= 302) ? 1 : 0

            ctx.beginPath()
            ctx.arc(pointX, pointY, radius, 0, 2 * Math.PI, false)
            ctx.fillStyle = insideCircle === 1 ? 'green' : 'red'
            ctx.strokeStyle = ctx.fillStyle
            ctx.fill()
            ctx.stroke()             

            this.props.tossCoin({hit: insideCircle})  
        }, 10)      
  
    }

    render() {
        const PI = this.props.total === 0 ? 4 : 4.0*(this.props.hits/this.props.total)
        return (
        <div>
            <canvas ref="canvasRef" width={604} height={604} style={{border: "1px solid #000000", backgroundColor: "lightgray"}}>
            </canvas>
            <br/>
            <button onClick={this.tossCoin}>Start Coin Tosses</button>
             <div>
                 <p>Total tosses: {this.props.total}, Hits: {this.props.hits}</p>
                <p>PI = {PI}</p>
            </div>  
        </div>
        )
    }
}

export default connect(
    state => ({
        hits: state.hits,
        total: state.total
    }),
    {
        tossCoin
    }
)(CoinToss)
