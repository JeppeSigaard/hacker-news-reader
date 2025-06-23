import express from 'express';
import ViteExpress from 'vite-express';
import cache from 'memory-cache';
import { config } from '../appConfig.js';
import { Story, User } from '../types.js';
const app = express();

app.get('/api/stories', async (_, res) => {
  const storiesCacheKey = 'storyIds';
  let storyIds: string[] | undefined = cache.get(storiesCacheKey);
  if (!storyIds) {
    const response = await fetch(
      `${config.apiUrl}/topstories.json?limitToFirst=20&orderBy="$priority"`
    );

    storyIds = (await response.json()) as string[];
    cache.put(storiesCacheKey, storyIds, config.cacheTimeout.stories);
  }
  const stories = await Promise.all(
    storyIds.map(async (storyId) => {
      const storyCacheKey = `story-${storyId}`;
      const cachedStory: Story | undefined = cache.get(storyCacheKey);
      if (!!cachedStory) {
        return cachedStory;
      }

      const response = await fetch(`${config.apiUrl}/item/${storyId}.json`);
      const story: Story = await response.json();
      cache.put(storyCacheKey, story, config.cacheTimeout.story);

      return story;
    })
  );

  const sortedStories = stories.sort((a, b) => b.score - a.score);
  res.setHeader('Content-Type', 'application/json');
  res.send(sortedStories);
});

app.get('/api/story/:storyId', async (req, res) => {
  const storyCacheKey = `story-${req.params.storyId}`;
  const cachedStory: Story | undefined = cache.get(storyCacheKey);
  if (!!cachedStory) {
    res.setHeader('Content-Type', 'application/json');
    res.send(cachedStory);
    return;
  }

  const response = await fetch(
    `${config.apiUrl}/item/${req.params.storyId}.json`
  );
  const story: Story = await response.json();
  cache.put(storyCacheKey, story, config.cacheTimeout.story);

  res.setHeader('Content-Type', 'application/json');
  res.send(story);
});

app.get('/api/user/:userSlug', async (req, res) => {
  const userCacheKey = `user-${req.params.userSlug}`;
  const cachedUser: User | undefined = cache.get(userCacheKey);
  if (cachedUser) {
    res.setHeader('Content-Type', 'application/json');
    res.send(cachedUser);
    return;
  }

  const response = await fetch(
    `${config.apiUrl}/user/${req.params.userSlug}.json`
  );
  const user: User = await response.json();
  cache.put(userCacheKey, user, config.cacheTimeout.user);
  res.setHeader('Content-Type', 'application/json');
  res.send(user);
});

ViteExpress.listen(app, 3000, () =>
  console.log('Server is listening on http://localhost:3000 🧠💨')
);
