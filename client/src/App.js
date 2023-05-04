import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';

import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    setShowButton(false);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {showButton ? (
            <div className="start-page">
              <h1 className="start-page-title">Modulate</h1>
              <button className="start-page-button" onClick={handleClick}>
                Enter
              </button>
            </div>
          ) : (
            <StoreProvider>
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/success" element={<Success />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                <Route path="/products/:id" element={<Detail />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </StoreProvider>
          )}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
