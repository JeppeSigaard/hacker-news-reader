import { Story, User } from '@/types';

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

export const useStories = () => {
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
  return { getStories, getStory, getUser };
};
