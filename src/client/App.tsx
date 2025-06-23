import { Route, Routes } from 'react-router';
import { Layout } from '@/components';
import { Home, Story } from '@/pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/story/:storyId" element={<Story />} />
      </Route>
    </Routes>
  );
}

export default App;
