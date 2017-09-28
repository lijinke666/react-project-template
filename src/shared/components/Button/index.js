/*
 * @Author: jinke.li 
 * @Date: 2017-07-17 19:41:57 
 * @Last Modified by:   jinke.li 
 * @Last Modified time: 2017-07-17 19:41:57 
 */
import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import classNames from "classnames"
import "./styles.less"

export default class Button extends PureComponent {
    static defaultProps = {
        type: "default",
        htmlType: "button"
    }
    static PropTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'warning', 'success', 'error','info','orange','disbled'])
    }
    render() {
        const { children, type, className, htmlType,onClick,...attr } = this.props
        const Type = ( btnType )=>{
            return type.indexOf(btnType) != -1
        }
        return (
            <button
                {...attr}
                type={htmlType}
                onClick={onClick}
                className={
                    classNames(
                        'jinke-btn',
                        'btn',
                        { 'btn-primary': Type("primary") },
                        { 'btn-warning': Type("warning") },
                        { 'btn-success': Type("success") },
                        { 'btn-error': Type("error") },
                        { 'btn-default': Type("default") },
                        { 'btn-disbled': Type("disbled") },
                        { 'btn-info': Type("info") },
                        { 'btn-orange': Type("orange") },
                        { 'btn-block': Type("block")},
                        className
                    )
                }
            >
                <span>{children}</span>
            </button>
        )
    }
}