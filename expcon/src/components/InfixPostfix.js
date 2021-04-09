import React,{useState} from 'react'
import styles from '../styles'



function InfixPostfix() {

    const [Postfix, setPostfix] = useState("");

    const [Prefix, setPrefix] = useState("");

    class Stack {  
        constructor() 
        { 
            this.items = []; 
        } 
        push(element){
            this.items.push(element); 
        } 
        pop(){
            if (this.items.length == 0) 
                return "Underflow"; 
            return this.items.pop();
        } 
        peek(){
            return this.items[this.items.length - 1]; 
        }
        isEmpty(){
            return this.items.length == 0; 
        }
        printStack(){
            var str = ""; 
            for (var i = 0; i < this.items.length; i++) 
                str += this.items[i] + " "; 
            return str;  
        }
    }
    class conversion{
        constructor(){
            this.infix="";
            this.postfix="";
            this.prefix="";
            this.returner="";
        }
        setDataPost(data){
            this.infix=data+")";
        }
        setDataPre(data){
            this.infix=")"+data;
            this.infix=this.infix.split("").reverse().join("");
            console.log(this.infix);
        }
        toPostfix(){
            var stack =new Stack();
            stack.push("(");
            for(var i=0;i<this.infix.length;i++){
                var a="";
                var op=0;
                a=this.infix[i];
                if(!(/[^a-z\d]/i.test(a))){
                    op=1;
                }
                else if(a=="("){
                    op=2;
                }
                else if(a==")"){
                    op=3;
                }
                else{
                    op=4;
                }
                switch(op){
                    case 1:
                        this.postfix+=a;
                        break;
                    case 2:
                        stack.push(a);
                        break;
                    case 3:
                        do{
                            this.postfix+=stack.peek();
                            stack.pop();
                        }while(stack.peek()!="(")
                        stack.pop();
                        break;
                    case 4:
                        var flag=1;
                        while(flag==1){
                            if(this.precedence(a)<=this.precedence(stack.peek()) && this.associativity(a)==0){
                                this.postfix+=stack.peek();
                                stack.pop();
                            }
                            else{
                                flag=0;
                            }
                        }
                        stack.push(a);
                        break;
                }
            }
            this.returner=this.postfix;
            this.postfix="";
            this.infix="";
            return this.returner;
        }
        toPrefix(){
            var stack =new Stack();
            stack.push("(");
            for(var i=0;i<this.infix.length;i++){
                var a="";
                var op=0;
                a=this.infix[i];
                if(!(/[^a-z\d]/i.test(a))){
                    op=1;
                }
                else if(a=="("){
                    op=2;
                }
                else if(a==")"){
                    op=3;
                }
                else{
                    op=4;
                }
                switch(op){
                    case 1:
                        this.postfix+=a;
                        break;
                    case 2:
                        stack.push(a);
                        break;
                    case 3:
                        do{
                            this.postfix+=stack.peek();
                            stack.pop();
                        }while(stack.peek()!="(")
                        stack.pop();
                        break;
                    case 4:
                        var flag=1;
                        while(flag==1){
                            if(this.precedence(a)<this.precedence(stack.peek()) && this.associativity(a)==0){
                                this.postfix+=stack.peek();
                                stack.pop();
                            }
                            else if(this.precedence(a)==this.precedence(stack.peek()) && this.associativity(a)==1){
                                this.postfix+=stack.peek();
                                stack.pop();
                            }
                            else{
                                flag=0;
                            }
                        }
                        stack.push(a);
                        break;
                }
            }
            this.prefix=this.postfix.split("").reverse().join("");
            this.returner=this.prefix;
            this.postfix="";
            this.infix="";
            this.prefix="";
            return this.returner;
        }
        precedence(data){
            if(data=="+" || data=="-"){
                return 1;
            }
            if(data=="*" || data=="/"){
                return 2;
            }
            if(data=="^"){
                return 3;
            }
            if(data=="("){
                return 0;
            }
            return 9;
        }
        associativity(data){
            if(data=="^"){
                return 1;
            }
            return 0;
        }
    }  
    function submit(inputData){
            var c=new conversion(inputData);
            //var inputData=document.getElementById("expression").value;
            c.setDataPost(inputData);
            setPostfix(c.toPostfix());
            // document.getElementById("Postfix").innerHTML="Postfix:  "+postfix;
            c.setDataPre(inputData);
            setPrefix(c.toPrefix());
            //document.getElementById("Prefix").innerHTML="Prefix:  "+prefix;
            console.log(Postfix);
            console.log(Prefix);
    }



    const [infix, setInfix] = useState("");
    
    const handleOut=(e)=>{
        e.target.style.opacity=1;
    }

    const handleEnter=(e)=>{
        e.target.style.opacity=0.5;
    }

    return (
        <>
            <div style={styles.formBox}>
                <div style={styles.text}>Infix Expression</div>
                <div style={{display:"flex",flexDirection:"row"}} >
                    <input style={styles.inputBox1} onChange={event=>setInfix(event.target.value)} placeholder="For example a+b/c" />
                    <button onMouseEnter={handleEnter} onMouseLeave={handleOut} type="submit" onClick={event=>submit(infix)} style={styles.btn}>
                        Submit
                    </button>    
                </div>
            </div>

            <div style={styles.formBox}>
                <div style={styles.text}>Postfix Expression</div>
                <div style={styles.inputBox2}>
                    {Postfix}
                </div>
            </div>

            <div style={styles.formBox}>
                <div style={styles.text}>Prefix Expression</div>
                <div style={styles.inputBox2}>
                {Prefix}
                </div>
            </div>

        </>
    )
}

export default InfixPostfix
