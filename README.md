Two types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import 

export const Component;
import {Component} from "path";

#React Hooks
(Normal JS utility fuctions)
-useState() - used to generate super powerful state variable in react
-useEffect() - useEffect(callback function, dependancy array[]); 
             - if you want to do something after rendering the component you put that inside the useEffect.(like API call/fetching data) 

# two types of routing 
- Client Side Routing
- Server Side Routing


# unmounting in useEffect
useEffect(() => {
    const timer = setInterval(() => {
        console.log("Hello");
    }, 1000);
    console.log("useEffect);

    // this return will be called when the component is unmounted from the page 
      this is like componentWillMount() of class components
    return () => {
        clearInterval(timer);
        console.log("useEffect return");
    };
}, []);

# Chunking
# Code splitting
# Dynamic Bundling
# Lazy Loading
# On demand Loading
# Dynamic import
Splitting code into different js bundles based on functionality to reduce the size of bundles.