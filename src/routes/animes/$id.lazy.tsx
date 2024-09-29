import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/animes/$id')({
  component: () => <div>Hello /animes/$id!</div>,
});
