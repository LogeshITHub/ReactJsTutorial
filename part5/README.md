1.React Routing
npm install react-router-dom

2.UseParams
ethu property url erukkara value read panna use pannuvanga
 
![Sample ScreenShot](image-1.png)

2.UseNavigate
redirect panrathukku use pantranga in functions la

Link erukkula athu html tag redirect set panniye erukkum

3.UseEffect

useEffect(()=>{
    
}) without dependecy always call each render changess

useEffect(()=>{
    
},[]) only one time to load this page initial time


useEffect(()=>{
    
},[constvaribale]) if this const varibale any change automatically trigger


4.bootstrap include

npm install react-bootstrap bootstrap

add this line in (App.jsx)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

