import 'react-native-gesture-handler';
import * as React from 'react';
// import Navigator from './routes/tab'
// import Navigator from './routes/testBottonTab'
// import Navigator from './routes/testTobTab'
import Navigator from './routes/testStack'
const App: () => React$Node = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
