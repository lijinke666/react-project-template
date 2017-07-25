/*
 * @Author: jinke.li 
 * @Date: 2017-07-17 19:41:27 
 * @Last Modified by:   jinke.li 
 * @Last Modified time: 2017-07-17 19:41:27 
 */
import React, { PropTypes } from "react"
import ReactDOM from "react-dom"
import classNames from "classnames"
import Button from "shared/components/Button"
import "./styles.less"

export default class Modal extends React.PureComponent {
    static defaultProps = {
        title: "标题",
        onOk: () => { },
        onCancel: () => { },
        footer: [],
        content:null
    }
    static PropTypes = {
        onCancel: PropTypes.func.isRequired,
        footer: PropTypes.oneOfType([                      //footer 不需要设置为 footer={null}
            PropTypes.array,
            PropTypes.bool,
            PropTypes.object
        ])
    }
    //TODO 完成 Modal.confirm()  Modal.info() 这种确认框   Modal.prompt() 这种输入框
    static confirm =()=>{
        const div = document.createElement('div')
        const _modal = ReactDOM.render(
            <Modal
                title="test"
                visible={true}
                onOk={()=>alert(1)}
                onCancel={()=>alert(2)}
                content={"1111"}
            />,
            div
        )
        console.log(_modal)
        console.log( document.querySelector('#root'))
        document.querySelector('.jk-message').appendChild(_modal)
    }
    render() {
        const { children,content, title, visible, onCancel, onOk, className, footer,...attr } = this.props

        return (
            <div key="jinke-modal-mask"
                {...attr}
                className={
                    classNames(
                        "jinke-modal-mask",
                        className,
                        { "modal-animate": visible }
                    )
                }
            >
                <div key="modal" className="jinke-modal">
                    <section key="modal-header" className="modal-header">
                        <h2 className="title">{title}</h2>
                        <span className="modal-close-btn" onClick={() => onCancel()}>
                            <i className="icon icon-guanbi1"></i>
                        </span>
                    </section>
                    <section key="modal-content" className="modal-content">
                        {content || children}
                    </section>
                    {
                        footer && footer.length >= 1
                            ? <section key="modal-footer" className="modal-footer">
                                {
                                    footer.map((btns) => btns)
                                }
                            </section>

                            : footer instanceof Array
                                ? <section key="modal-footer" className="modal-footer">
                                        <Button onClick={() => onCancel()}>取消</Button>,
                                        <Button type="info" onClick={() => onOk()}>确定</Button>
                                </section>
                                : undefined
                    }
                </div>
            </div>
        )
    }
}