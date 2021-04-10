import React,{useState} from 'react'
import styles from '../styles'
import ListItem from './ListItem'



function InfixPostfix() {

    const [Postfix, setPostfix] = useState("");

    const [Prefix, setPrefix] = useState("");

    class stacker
    {
        constructor(size=100)
        {
            this.size = size;
            this.items = [];
            this.top = -1; // we can also is -> this.items.length
        }

        // Getters for stack below

        get lastIndex()
        {
            // this return the index of last item
            return this.top;
        }

        get stackLen()
        {
            return this.items.length;
        }

        get leftSize()
        {
            return this.size-this.stackLen;
        }

        get peek()
        {
            if(this.isEmpty() == true)
                {
                    return console.log("stack is empty");
                }
            else
                {
                    return console.log(this.items[this.top]), this.items[this.top];
                }
        }

    // Setters for stack below
        getItem(index)
        {
            if(index > this.top || index < 0)
                {
                    return console.log("Wrong Index")
                }
            else
                {
                    return this.items[index], console.log(this.items[index]);
                }
        }
        isFull()
        {
            if(this.top==this.size-1)
                {
                    return true;
                }
            else
            {
                return false;
            }
        }

        isEmpty()
        {
            if(this.top < 0)
                {
                    return true;
                }
            else
                {
                    return false;
                }
        }

        push(element)
        {
            if(this.isFull() == true)
                {
                    return console.log("Stack is Full Now");
                }
            else
                {
                    this.top++;
                    this.items[this.top] = element;
                    return true;
                }
            
        }

        pop()
        {
            var data;
            if(this.isEmpty() == true)
                {
                    return false;
                }
            else
                {
                    // data = this.items[this.top];
                    // this.items[this.top] = undefined;
                    // or we can use 
                    data = this.items.splice(this.top, 1); // this will return an array with single element more efficient
                    this.top--;
                    return data[0];
                }
        }

        traverse()
        {
            return this.items;
        }


    }

    // INFIX TO POSTFIX

    function precidencer(item)
    {
        /*
        precedence are :
                * > ^ > / > % > + > - > ) > ( > any operand
        */
        var operators = ['','(',')','-','+','%','/','*','^'];

        for(var j = 0; j < operators.length; j++)
            {
                if(item == operators[j])
                    {
                        return j;
                    }
            }
        
            return 0;
    }

    // Infix to postfix conversion
    function infixToPostfix(expression, tab = 0)
    {
        var postfixExpression = "", current;
        var table = {
            exp: [],
            stak: [],
            conexp: [],
        };
        // step 1: put a ')' at the end of expression
        expression += ')';

        // creating a stack
        var infixStack = new stacker();

        // step 2: push '(' to stack
        infixStack.push('(');

        // traversing whole expression now
        for(var i = 0; i < expression.length; i++ )
            {
                current = expression[i];
                if(precidencer(current) == 1)
                    {
                        infixStack.push('(');
                    }

                else if(precidencer(current) == 0) 
                    {
                        postfixExpression += current;
                    }

                else if(precidencer(current) == 2)
                    {
                        while(infixStack.peek != '(')
                            {
                                postfixExpression += infixStack.pop();
                            }
                        if(infixStack.peek == '(')
                            {
                                infixStack.pop();
                            }
                    }
                else if(precidencer(current) > 2)
                    {
                        if(precidencer(current) >= precidencer(infixStack.peek))
                            {
                                infixStack.push(current);
                                
                            }
                        else
                            {
                                while(infixStack.peek != '(')
                                    {
                                        postfixExpression += infixStack.pop();
                                    }
                                infixStack.push(current);
                                
                            }
                    }
                
                if(tab==1)
                    {
                        table.exp[i] = current;
                        table.stak[i] = infixStack.traverse().join("");
                        table.conexp[i] = postfixExpression;
                    }
            }
        
            return {postfixExpression:postfixExpression, table: table};
    }

    // reverser

    function reverser(expression)
    {
        var newExpression = expression.split("");
        
        for(var i = 0; i < expression.length; i++)
        {
            if(newExpression[i] == ')')
                {
                    newExpression[i] = '(';
                }
            else if(newExpression[i] == '(')
                {
                    newExpression[i] = ')';
                }
        }

        return newExpression.reverse().join("");
    }
    function infixToPrefix(expression, tab=0)
    {
        expression = infixToPostfix(reverser(expression), tab);
        return {prefixExpression:reverser(expression['postfixExpression']), table:expression['table']};
    }


    function checker(expression)
    {
        if(precidencer(expression[0]) > 2)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }





    const [infix, setInfix] = useState("");
    
    const handleOut=(e)=>{
        e.target.style.opacity=1;
    }

    const handleEnter=(e)=>{
        e.target.style.opacity=0.5;
    }

    const handleSubmit=()=>{
        setPostfix(infixToPostfix(infix).postfixExpression);
        setPrefix(infixToPrefix(infix).prefixExpression);
        setShowTable("flex");
        if(Radio==="option1"){setList(infixToPostfix(infix,1).table);}
        if(Radio==="option2"){setList(infixToPrefix(infix,1).table);}
    }

    const [list, setList] = useState({exp:[],stak:[],conexp:[]});

    const [ShowTable, setShowTable] = useState("none");

    const [Radio, setRadio] = useState("option1");

    const handleRadio =(e)=>{
        setRadio(e.target.value)
        if(e.target.value==="option1")
            setList(infixToPostfix(infix,1).table);
        if(e.target.value==="option2")
            setList(infixToPrefix(infix,1).table);
    }

    return (
        <>
            <div style={styles.formBox}>
                <div style={styles.text}>Infix Expression</div>
                <div style={{display:"flex",flexDirection:"row"}} >
                    <input style={styles.inputBox1} onChange={event=>setInfix(event.target.value)} placeholder="For example a+b/c" />
                    <button 
                    onMouseEnter={handleEnter} 
                    onMouseLeave={handleOut} 
                    type="submit" 
                    onClick={
                        handleSubmit
                        } style={styles.btn}>
                        Done
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

            <div style={styles.radio}>
            <label>
                <input
                type="radio"
                name="react-tips"
                value="option1"
                checked={true}
                onClick={handleRadio}
                className="form-check-input"
                />
                Postfix Table
            </label>
            <label>
                <input
                type="radio"
                name="react-tips"
                value="option2"
                onClick={handleRadio}
                className="form-check-input"
                />
                Prefix Table
            </label>
            </div>

            <div style={{
                 display:ShowTable,
                 flexDirection:"row",
                 maxWidth:"500px",
                 width:"90%",
                 marginBottom:"20px",
                 //backgroundColor:"#F5F5F5",
                 padding: "10px",
                 textAlign:"center",
                 //boxShadow: "0 5px 10px 0 rgba(0,0,0,0.2)",
            }}>

                <ol style={styles.Listelement} >
                <h3 style={styles.text}>Character</h3>
                {list.exp.map(article => (<ListItem>{article}</ListItem>))}
                </ol>
                <hr style={{borderTop: "3px solid #bbb"}}/>
                <ol style={styles.Listelement} >
                <h3 style={styles.text}>Stack</h3>
                {list.stak.map(article => (<ListItem>{article}</ListItem>))}
                </ol>
                <hr style={{borderTop: "3px solid #bbb"}}/>
                <ol style={styles.Listelement} >
                <h3 style={styles.text}>Postfix</h3>
                {list.conexp.map(article => (<ListItem>{article}</ListItem>))}
                </ol>

            </div>


        </>
    )
}

export default InfixPostfix
