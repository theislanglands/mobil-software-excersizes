import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { useEffect, useState } from "react";
import { render } from "react-dom";


export default function CoolComponent(props){
    /* 
    useEffect(()=> {
        console.log("I'm in use")

        return function () {
            console.log("no longer in use")
        };
    }); */

    const [text, setText] = useState(props.input);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("#123");

    // listening and acting when text is changing
    useEffect( () => {
        console.log("text changed");
        setColor("#999");
    }, [text]);

    function onClick(){
      console.log("on click function");
      setCount(count +10);
      setColor("#589234");
      if (count >= 100) {
        setCount(0);        
        console.log("you've reached 100");
        setText(props.input);
      }

      if (text === "new text") {
        console.log("new text if");
        setText(props.input);
      }
     

    }

    return(
        <View>
            <Text style={styles.container}>text and count: {text} {count}</Text>
            <Button color={color} title="press me for new text and update count" onPress={() => [setCount(count+1), setText("new text")]}></Button>
            <Button title="press me on (I'm a funny function onClick" onPress={onClick}></Button>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 

/* 

USE EFFECT INFO!

// Every rerender
useEffect(() => {
	console.log("I run everytime this component rerenders")
});

// onMount
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);

// Condition based 
useEffect(() => {
	console.log("I run everytime my condition is changed")
}, [condition]);   // eg props is changing

// Condition based with "clean up"
useEffect(() => {
	console.log("I run everytime my condition is changed")
	
	return () => {
    	console.log("Use this return as a 'clean up tool' (this runs before the actual code)")
    }
}, [condition]);
 */