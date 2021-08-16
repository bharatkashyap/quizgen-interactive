import './App.css';
import Header from './components/Header';
import QuizGallery from './components/QuizGallery';
import { QuestionContextProvider } from './questionContext';

function App() {  
  
  
  return (
    <div className="layout">
      <QuestionContextProvider>
        <Header />
        <QuizGallery  />
      </QuestionContextProvider>
    </div>
  );
}

export default App;
