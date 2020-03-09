import React, { useContext, useState } from "react";
import TodoList from "./components/TodoList";

import ThemeSwitcher from "./components/ThemeSwitcher";

import * as themes from "./themes";
import { ThemeContext } from "./themes/context";

function App() {
  const theme = useContext(ThemeContext);
  const [themeS, setThemeS] = useState(themes.dark);
  function toggleTheme() {
    if (themeS === themes.dark) {
      setThemeS(themes.light);
    } else {
      setThemeS(themes.dark);
    }
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={themeS}>
        <TodoList theme={themeS} />
        <ThemeSwitcher onClick={toggleTheme} />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
