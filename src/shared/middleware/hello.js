/*eslint-disable no-console*/
function createMyReduxMiddleware(extraArgument) {
  return store => next => action => {
    console.info("test my redux middleware", action);
    next(action);
  };
}

const myReduxMiddleware = createMyReduxMiddleware();

export default myReduxMiddleware;
