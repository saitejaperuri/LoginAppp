import "./index.css"


const Files = (prop) => {  

    const onClickLogout = () => {
        const {history} = prop
        history.replace('/login')
      }
    

        return (
            <div>
            <div className="bg-container">
                
                <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
                <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
                <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
                <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
            </div>
            <div className="bg-container">
                
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
        </div>
        <div className="bg-container">
                
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
            <img src="https://res.cloudinary.com/ddqrzz4nx/image/upload/v1691161796/sxmjknqhkdb7l8mmqibq.jpg" alt="file" className="image" />
        </div>
        <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
        
            
    
        )
    }
    


export default Files