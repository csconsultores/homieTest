import Header from './containers/Header/Header.tsx';
import Content from './containers/Content/Content.tsx';
import Footer from './containers/Footer/Footer.tsx';
import {AppContainer} from './App_Style.ts';

function App() {
  return (
    <AppContainer >
      <Header />
      <Content />
      <Footer />
    </AppContainer>
  );
}

export default App;
