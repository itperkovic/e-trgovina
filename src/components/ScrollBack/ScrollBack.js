import React from 'react';
import styles from './ScrollBack.module.css';


class ScrollBack extends React.Component {
    state = {
         intervalId: 0,
         thePosition: false
     }; 
    componentDidMount() { 
       document.addEventListener("scroll", () => { 
           if (window.scrollY > 170) { 
                this.setState({ thePosition: true }) 
           } else { 
               this.setState({ thePosition: false }) 
           } 
        }); 
        window.scrollTo(0, 0); 
     } 
    onScrollStep = () => { 
        if (window.pageYOffset === 0){ 
            clearInterval(this.state.intervalId); 
        } 
       window.scroll(0, window.pageYOffset - this.props.scrollStepInPx); 
    } 
    scrollToTop = () => { 
       let intervalId = setInterval(this.onScrollStep, this.props.delayInMs); 
       this.setState({ intervalId: intervalId }); 
    } 
    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div className={styles.goTop} onClick={this.scrollToTop}>
                    Go Top
                </div>
            )
        }
    }
     render(){ 
        return ( <div> {this.renderGoTopIcon()} </div>)
     } 
}
export default ScrollBack;