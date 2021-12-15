import { useState } from 'react';
import './App.css';
import GreetingCard from './components/GreetingCard';
import GreetingCardForm from './components/GreetingCardForm';

function App() {
    const [cardType, setCardType] = useState('christmas');
    const [form, setForm] = useState({
        email: '',
        greetings: 'Dear Mom,',
        message: 'Try to not be stingy for christmas!',
        closing: 'Love, your beautiful daughter Darla',
    });
    const [errors, setErrors] = useState({
        email: '',
        greetings: '',
        message: '',
        closing: '',
    });
    const [viewCard, setViewCard] = useState(true);

    return (
        <div className="border vh-100 d-flex align-items-center justify-content-center">
            {viewCard ? (
                <GreetingCard
                    form={form}
                    setViewCard={setViewCard}
                    cardType={cardType}
                />
            ) : (
                <GreetingCardForm
                    errors={errors}
                    setErrors={setErrors}
                    form={form}
                    setForm={setForm}
                    cardType={cardType}
                    setCardType={setCardType}
                    setViewCard={setViewCard}
                />
            )}
        </div>
    );
}

export default App;

// import g_card from '../images/g_card.webp';
// import images 
// import './App.css';
// GreetingCard from './Components/GreetingCard';

// function GreetingCard({ greeting, body, closing }) {
//   return (
//     <div className="App">
//       // <header className="App-header">
//       //   <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button>
//           Reshare this G card
//         </button>
//       </header>
//     </div>
//   );
// }

// export default GreetingCard;
