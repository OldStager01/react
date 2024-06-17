
function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.append(domElement);
}

reactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children:"Click me to visit google"
};
reactContainer=document.getElementById("root");

customRender(reactElement,reactContainer);