function Person(props) {
    return (
      <div>
        <p>Learn some information about this person</p>
        <h2>{props.name.length > 8 ? props.name.substring(0, 6) : props.name}</h2>
        <p>Age: {props.age}</p>
        <h3>{props.age > 18 ? "please go vote!" : "you must be 18"}</h3>
        <ul>
          {props.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <Person 
          name="Jonathan" 
          age={28} 
          hobbies={["Reading", "Hiking", "Swimming"]}
        />
        <Person 
          name="Sara" 
          age={17} 
          hobbies={["Painting", "Biking"]}
        />
        <Person 
          name="Michael" 
          age={19} 
          hobbies={["Coding", "Music", "Gaming"]}
        />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  