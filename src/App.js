import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext()

function App() {
  console.log("Render App")
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
     <div>
      Counter
      <Counter initialCount={0} />
      </div>
      
      <div>
      Counter Hooks
      <CounterHooks initialCount={0} />
      </div>

      <div>
      Toggle Theme Buttom
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
     




