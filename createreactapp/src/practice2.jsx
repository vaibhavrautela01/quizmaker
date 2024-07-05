import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './p.css';

function Practice1() {
  const [animal, setAnimal] = useState("Select Questions");
  const [count, setCount] = useState(30);
  const [buttonColor, setButtonColor] = useState({});

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);


  
  const handleSubmit = (questionNumber) => {
    setButtonColor(() => ({
      [questionNumber]: 'green'
    }));
  };

  const Bb = () => {
    if (animal === "1") {
      return (
        <div>
          <h2>What is your favorite animal?</h2>
          <input type="radio" name="animal" value="dog" /> Dog<br/>
          <input type="radio" name="animal" value="cat" /> Cat<br/>
          <input type="radio" name="animal" value="Parrot" /> Bird<br/>
          <input type="radio" name="animal" value="rabbit" /> Rabbit<br/><br/>
          <input  type="submit" onClick={() => handleSubmit("1")}value="Submit" className="c" ></input>
        </div>
      );
    } 
    
    else if (animal === "2") {
      return (
        <div>
          <h2>What is your favorite color?</h2>
          <input type="radio" name="color" value="red" /> Red<br/>
          <input type="radio" name="color" value="blue" /> Blue<br/>
          <input type="radio" name="color" value="green" /> Green<br/>
          <input type="radio" name="color" value="black" /> Black<br/><br/>
          <input type="submit" onClick={() => handleSubmit("2")} value="Submit" className="c" ></input>
        </div>
      );


    } else if (animal === "3") {
      return (
        <div>
          <h2>What is your favorite food?</h2>
          <input type="radio" name="food" value="pizza" /> Pizza<br/>
          <input type="radio" name="food" value="burger" /> Burger<br/>
          <input type="radio" name="food" value="pasta" /> Pasta<br/>
          <input type="radio" name="food" value="momos" /> Momos<br/><br/>
          <input type="submit" onClick={() => handleSubmit("3")} value="Submit" className="c" ></input>
        </div>
      );


    } else if (animal === "4") {
      return (
        <div>
          <h2>Who is our PM?</h2>
          <input type="radio" name="pm" value="Amit" /> Amit <br/>
          <input type="radio" name="pm" value="Modi" /> Modi<br/>
          <input type="radio" name="pm" value="Rahul" /> Rahul<br/>
          <input type="radio" name="pm" value="Ravi" /> Ravi<br/><br/>
          <input type="submit" onClick={() => handleSubmit("4")} value="Submit" className="c" ></input>
        </div>
      );
    }

    else if (animal === "5") {
      return (
        <div>
          <h2>Who is your favo flower?</h2>
          <input type="radio" name="flower" value="rose" /> Rose <br/>
          <input type="radio" name="flower" value="sunflower" /> Sunflower<br/>
          <input type="radio" name="flower" value="lily" /> Lily<br/>
          <input type="radio" name="flower" value="aaa" /> aaa<br/><br/>
          <input type="submit" onClick={() => handleSubmit("5")} value="Submit" className="c"></input>
        </div>
      );
    }


    else if (animal === "6") {
      return (
        <div>
          <h2>Who is your favo name?</h2>
          <input type="radio" name="name" value="ram" /> Ram <br/>
          <input type="radio" name="name" value="ravi" /> Ravi<br/>
          <input type="radio" name="name" value="laxman" /> Laxman<br/>
          <input type="radio" name="name" value="lakshay" /> Lakshay<br/><br/>
          <input type="submit" onClick={() => handleSubmit("6")} value="Submit" className="c"></input>
        </div>
      );
    }

    else if (animal === "7") {
      return (
        <div>
          <h2>Who is your favo food?</h2>
          <input type="radio" name="food" value="Chinise" /> Chinise <br/>
          <input type="radio" name="food" value="Italian" /> Italian<br/>
          <input type="radio" name="food" value="South" /> South<br/>
          <input type="radio" name="food" value="North" /> North<br/><br/>
          <input type="submit" onClick={() => handleSubmit("7")} value="Submit" className="c" ></input>
        </div>
      );
    }

    else if (animal === "8") {
      return (
        <div>
          <h2>Who is your favo collage?</h2>
          <input type="radio" name="collage" value="garphic" />Graphic Era  <br/>
          <input type="radio" name="collage" value="uttaranchal" /> Uttaranchal University<br/>
          <input type="radio" name="collage" value="mit" /> mit<br/>
          <input type="radio" name="collage" value="nit" /> nit<br/><br/>
          <input type="submit" onClick={() => handleSubmit("8")} value="Submit" className="c" ></input>
        </div>
      );
    }
    else if (animal === "9") {
      return (
        <div>
          <h2>Who is your favo place in Dehradun?</h2>
          <input type="radio" name="place" value="dehradun" /> Dehradun <br/>
          <input type="radio" name="place" value="clementown"/> clemen town<br/>
          <input type="radio" name="place" value="vikasnagar"/> vikasnagar<br/>
          <input type="radio" name="place" value="clocktower"/> cloctower<br/><br/>
          <input type="submit" onClick={() => handleSubmit("9")} value="Submit" className="c"></input>
        </div>
      );
    }
    else if (animal === "10") {
      return (
        <div>
          <h2>Who is your favo subject?</h2>
          <input type="radio" name="subject" value="maths" /> Maths <br/>
          <input type="radio" name="subject" value="science" /> Science<br/>
          <input type="radio" name="subject" value="sst" /> Social Science<br/>
          <input type="radio" name="subject" value="english" /> English<br/><br/>
          <input type="submit" onClick={() => handleSubmit("10")} value="Submit" className="c"></input>
        </div>
      );
    }
    
    else {
      return <h2>Please select a question number</h2>;
    }
  };


  return (
    <>
      <h1 style={{ color: "white", borderRadius: "5px", backgroundColor: "red", padding: "9px", float: "right", margin: "90px" }}>{count} sec</h1>
      <center><h1>CLASS TEST - Section-B</h1></center>
      <div style={{ border: "10px solid black" }}>
        <button type="button" style={{ backgroundColor: buttonColor["1"] }} onClick={() => setAnimal("1")}>1</button>
        <button type="button" style={{ backgroundColor: buttonColor["2"] }} onClick={() => setAnimal("2")}>2</button>
        <button type="button" style={{ backgroundColor: buttonColor["3"] }} onClick={() => setAnimal("3")}>3</button>
        <button type="button" style={{ backgroundColor: buttonColor["4"] }} onClick={() => setAnimal("4")}>4</button>
        <button type="button" style={{ backgroundColor: buttonColor["5"] }} onClick={() => setAnimal("5")}>5</button>
        <button type="button" style={{ backgroundColor: buttonColor["6"] }} onClick={() => setAnimal("6")}>6</button>
        <button type="button" style={{ backgroundColor: buttonColor["7"] }} onClick={() => setAnimal("7")}>7</button>
        <button type="button" style={{ backgroundColor: buttonColor["8"] }} onClick={() => setAnimal("8")}>8</button>
        <button type="button" style={{ backgroundColor: buttonColor["9"] }} onClick={() => setAnimal("9")}>9</button>
        <button type="button" style={{ backgroundColor: buttonColor["10"] }} onClick={() => setAnimal("10")}>10</button>
      </div>
      <h1>Question number: {animal}</h1>
      {Bb()}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Practice1 />);

export default Practice1;
