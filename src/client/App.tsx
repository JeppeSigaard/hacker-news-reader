import { Route, Routes } from 'react-router';
import { Layout } from '@/components';
import { HomePage, StoryPage } from '@/pages';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/story/:storyId" element={<StoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
