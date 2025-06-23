import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
} from 'react';
import { Story, User } from '../types';

const StoryContext = createContext<{
  getStories: () => Promise<Story[]>;
  getStory: (id: string) => Promise<Story | null>;
  getUser: (id: string) => Promise<User | null>;
}>({
  getStories: () => new Promise(() => []),
  getStory: () => new Promise(() => null),
  getUser: () => new Promise(() => null),
});

export const useStories = () => useContext(StoryContext);

export const StoryProvider: FunctionComponent<PropsWithChildren> = (props) => {
  const fetchStories = async () => {
    const response = await fetch('/api/stories');
    const stories = await response.json();
    return stories;
  };

  const fetchStory = async (storyId: string): Promise<Story> => {
    const response = await fetch(`/api/story/${storyId}`);
    const story = await response.json();
    return story;
  };

  const fetchUser = async (userSlug: string): Promise<User> => {
    const response = await fetch(`/api/user/${userSlug}`);
    const user = await response.json();
    return user;
  };

  const getStory = async (id: string): Promise<Story | null> => {
    try {
      const story = await fetchStory(id);

      if (!story) {
        return null;
      }

      return story;
    } catch (err) {
      return null;
    }
  };

  const getUser = async (slug: string): Promise<User | null> => {
    try {
      const user = await fetchUser(slug);
      if (!user) {
        return null;
      }

      return user;
    } catch (err) {
      return null;
    }
  };

  const getStories = async (): Promise<Story[]> => {
    try {
      const stories = await fetchStories();
      return stories;
    } catch (err) {
      return [];
    }
  };

  return (
    <StoryContext.Provider value={{ getStories, getStory, getUser }}>
      {props.children}
    </StoryContext.Provider>
  );
};
