import React from 'react'
import './header.style.scss'
import { connect } from 'react-redux'
import { 
    Link, 
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { AppStateType } from '../../redux/redux-store'

type HeaderType = {
    total: number
}

const Header = ({total}: HeaderType) => {
    return (
        <header>
            <div className="gen-page">
                <Link to='/' className='link'><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>
            <div className='cartPage'>
                <span><b>Total: {total}$</b></span>
                <Link to='/cart' className="link">CART</Link>
            </div>
        </header>
    )
}


const mapStateToProps = (state: AppStateType) => {
    return {
        total: state.cartReducer.total
    }
}

export default connect(mapStateToProps)(Header)