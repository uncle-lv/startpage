import React from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';


const createRootEle = (id) => {
    const rootEle = document.createElement('div');
    rootEle.setAttribute('id', id);
    return rootEle;
}

const addRootEle = (rootEle) => {
    document.body.insertBefore(
        rootEle,
        document.body.lastElementChild.nextElementSibling,
    )
}

const usePortal = (id) => {
    const rootEleRef = useRef(null);

    useEffect(() => {
        const parent = document.querySelector(`#${id}`);
        const parentEle = parent || createRootEle(id);

        if (!parent) {
            addRootEle(parentEle);
        }

        parentEle.appendChild(rootEleRef.current);

        return function() {
            rootEleRef.current.remove();
            if (!parentEle.childElementCount) {
                parentEle.remove()
            }
        }
    }, [id]);

    const getRootEle = () => {
        if (!rootEleRef.current) {
            rootEleRef.current = document.createElement('div');
        }
        return rootEleRef.current;
    }
    return getRootEle();
}

const Portal = function(props) {
    const { id, children } = props;
    const target = usePortal(id);

    return createPortal(children, target);
}

export { Portal };