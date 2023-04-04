import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';
import Import from './pages/Import';
import Intro from './pages/Intro';
import Password from './pages/Password';
import Confirm from './pages/Password/Confirm';
import Profile from './pages/Profile';
import Details from './pages/Profile/Details';
import Transaction from './pages/Transaction';
import Wallet from './pages/Wallet';

import Send from './pages/Wallet/Send';
import Swap from './pages/Wallet/Swap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/create" element={<Create />} />
      <Route path="/import" element={<Import />} />
      <Route path="/password">
        <Route index element={<Password />} />
        <Route path="confirm" element={<Confirm />} />
      </Route>
      <Route path="/profile">
        <Route index element={<Profile />} />
        <Route path="details" element={<Details />} />
      </Route>
      <Route path="/transaction">
        <Route index element={<Transaction />} />
        {/* <Route path="details" element={<></>} /> */}
      </Route>
      <Route path="/wallet">
        <Route index element={<Wallet />} />
        <Route path="send" element={<Send />} />
        <Route path="swap" element={<Swap />} />
      </Route>
      <Route path="*" element={<></>} />
    </Routes>

  );
}

export default App;
