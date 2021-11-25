import { useState } from 'react';
import Contact from './components/Contact';
import ReactDOM from "react-dom";
import './App.css';

const contacts = [{
    firstName: "Барней ",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін ",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний ",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія ",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен ",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор ",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];
function App() {
    const [ value, setValue] = useState('');
    const filteredContacts = contacts.filter( contact => {
        return contact.lastName.toLowerCase().includes(value.toLowerCase())
         
    })
    
    return ( <div className= "wrapper">
        <form>
            <input
               type = "text" 
               placeholder = "Search Surname"
               onChange = {(e) => setValue(e.target.value)}
               >
                
            </input>
        </form>
    
    <div className = "content">
        {
            filteredContacts.map((contacts) => <Contact contact={contacts}/>
            )
        } )
        }
    </div>
    </div>
        )
  }
  
ReactDOM.render(<App/>, document.getElementById('root'));

export default App;