function Tweet(props) {
    return (
      <div className="tweet">
        <h3>{props.name} <span className="username">@{props.username}</span></h3>
        <p>{props.message}</p>
        <p>{props.date}</p>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <Tweet 
          username="user1" 
          name="User One" 
          date="2023-08-13" 
          message="This is the first tweet!"
        />
        <Tweet 
          username="user2" 
          name="User Two" 
          date="2023-08-12" 
          message="Another tweet from user two."
        />
        <Tweet 
          username="user3" 
          name="User Three" 
          date="2023-08-11" 
          message="User three's tweet is here."
        />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  