import { Route, Routes } from 'react-router';
import { StoryProvider } from './StoryProvider';
import { Layout } from '@/components';
import { HomePage, StoryPage } from '@/pages';

function App() {
  return (
    <StoryProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
        </Route>
      </Routes>
    </StoryProvider>
  );
}

export default App;
