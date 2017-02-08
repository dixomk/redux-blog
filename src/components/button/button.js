import React, { PropTypes, Component } from 'react';
import $ from 'jquery';
import tooltip from 'jquery-ui/ui/widgets/tooltip';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/tooltip.css';
import 'jquery-ui/themes/base/theme.css';
import styles from './button.css';

class Button extends Component{
    static get propTypes(){
        return{
            id: PropTypes.string.isRequired,
            btnTitle: PropTypes.string,
            tooltipText: PropTypes.string,
            onClick: PropTypes.func
        };
    }
    constructor(props){
        super(props);
    }
    componentDidMount(){
        tooltip({}, $(this.DOMbutton));
    }

    componentWillUnmount(){
        $(this.DOMbutton).tooltip('destroy');
    }

    render(){
        const { id, btnTitle, tooltipText, onClick } = this.props;
        return (
            <button
                className={styles.btnSend}
                data-value={id}
                onClick={onClick}
                title={tooltipText}
                ref={(element)=>{ this.DOMbutton = element }}
            >
                    {btnTitle}
            </button>);
    }
}

export default Button;
