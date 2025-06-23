import { Story, User } from '@/types';

const getStory = async (id: string): Promise<Story | null> => {
  try {
    const response = await fetch(`/api/story/${id}`);
    const story = await response.json();

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
    const response = await fetch(`/api/user/${slug}`);
    const user = await response.json();
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
    const response = await fetch('/api/stories');
    const stories = await response.json();
    return stories;
  } catch (err) {
    return [];
  }
};

export const useStories = () => {
  return { getStories, getStory, getUser };
};
