/*
 * @Author: jinke.li 
 * @Date: 2017-05-12 13:54:48 
 * @Last Modified by: jinke.li
 * @Last Modified time: 2017-05-12 14:19:52
 */
import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import classNames from "classnames"
import "./styles.less"

export default class Message extends PureComponent {
    state = {
        remove: false
    }
    _container;         //包裹message 的div容器
    _dom;               //message dom节点
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        defaultDuration: 2,
        defaultContent: "提示"
    }
    componentWillUnMount() {
        console.log('移除');
    }
    componentDidMount() {
        const { duration, onClose } = this.props
        setTimeout(() => {
            this.removeNode()
            onClose && onClose instanceof Function && onClose()
        }, duration * 1000)
    }
    //移除节点
    removeNode = () => {
        ReactDOM.unmountComponentAtNode(this._container)
        this._dom.remove()
    }
    /**
     * static 静态方法  不会被继承 可以直接被类调用
     * 所以可以实现 Mesage.info() 这种
     */
    static renderElement = (type, content = "提示", duration = 2, onClose) => {
        let div = document.createElement('div')
        let _message = ReactDOM.render(
            <Message
                type={type}
                content={content}
                duration={duration}
                onClose={onClose}
            />,
            div
        )
        let dom = document.querySelector(".jk-message").appendChild(div)
        _message._container = div
        _message._dom = dom
    }
    static error(content, duration, onClose) {
        this.renderElement("error", content, duration, onClose)
    }
    static info(content, duration, onClose) {
        this.renderElement("info", content, duration, onClose)
    }
    static success(content, duration, onClose) {
        this.renderElement("success", content, duration, onClose)
    }
    static warning(content, duration, onClose) {
        this.renderElement("warning", content, duration, onClose)
    }
    static loading(content, duration, onClose) {
        this.renderElement("loading", content, duration, onClose)
    }

    render() {
        const {
             type,
            content,
            duration
         } = this.props
        const { remove } = this.state;

        const typeConfig = {
            info: "info",
            success: "success",
            error: "error",
            warning: "warning",
            loading: "loading"
        }

        const isShowClassName = type === typeConfig

        return (
            <div key="message" className="jk-message-notice-content">
                <div
                    className={
                        classNames(
                            'jk-message-custom-content',
                            `message-${typeConfig[type]}`
                        )
                    }

                >
                    <p className="icon">
                        <i className={
                            classNames(
                                "icon",
                                { "icon-laba": type === typeConfig['info'] },
                                { "icon-true": type === typeConfig['success'] },
                                { "icon-guanbi": type === typeConfig['error'] },
                                { "icon-gantanhao": type === typeConfig['warning'] },
                                { "icon-jiazai loading-animate": type === typeConfig['loading'] }
                            )
                        }
                            key="message-icon">
                        </i>
                    </p>
                    <p className="text">
                        {content}
                    </p>
                </div>
            </div>
        )
    }
}

