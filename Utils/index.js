import checkPropTypes from 'check-prop-types';
import { applyMiddleWare, createStore } from 'redux';
import rootReducer, { middlewares } from './../src/createStore';


export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleWare(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState)
}