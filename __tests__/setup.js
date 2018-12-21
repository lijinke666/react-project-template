
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const ReactDOM = require('react-dom')

global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function _raf(cb) {
    return setTimeout(cb, 0);
  };

global.requestAnimationFrame = function (cb) {
  return setTimeout(cb, 0);
};

global.cancelAnimationFrame = function (cb) {
  return clearTimeout(cb, 0);
};
ReactDOM.createPortal = node => node

Element.prototype.getContext = () => {
  return {}
};

Element.prototype.getBoundingClientRect = jest.fn(() => ({
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}))


Enzyme.configure({ adapter: new Adapter() });
