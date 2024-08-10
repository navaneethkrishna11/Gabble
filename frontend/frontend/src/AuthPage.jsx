import axios from "axios";
import './auy.css'
const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("Auth Error", e));
  };

  return (
    <div className="background">
        <div className="row ">
      <form onSubmit={onSubmit} className="form-card">
      
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
      <div className="divider"></div>
        <div className="container01">
            <h1>Gabble : Connect. Converse. Create.</h1> 
            
             <p>
             Experience the next level of online communication with Gabble - your go-to platform for instant, seamless conversations.
    Built with cutting-edge technology, our website offers a user-friendly interface that gets you chatting in seconds.<br/>
    No complicated sign-ups or lengthy forms - just enter your username and dive into a world of connections.<br/>
    Our streamlined design, powered by React.js and Node.js, ensures a smooth, responsive experience across all devices.<br/>
    Gabble isn't just about text - share your world through pictures, adding color and context to your conversations.<br/>
    Our integration with the Chat Engine API provides a robust foundation for real-time messaging, ensuring your words and images reach their destination instantly.<br/>
    Whether you're catching up with old friends or making new ones, our platform adapts to your communication style.<br/>
    Security and simplicity go hand in hand here.<br/>
    While we've made it easy to start chatting, we've also implemented measures to keep your conversations private and secure.<br/>
    Connect with users from around the globe, or create private rooms for more intimate discussions.<br/>
    With Gabble, the power of global communication is at your fingertips.<br/>
    Join us today and rediscover the joy of online chat - where conversations flow as naturally as they do in person, and where every message opens the door to new possibilities.<br/>
    Welcome to Gabble - Where Words Connect Worlds.
  </p>


        </div>

      </div>
    </div>
    
  );
};

export default AuthPage;