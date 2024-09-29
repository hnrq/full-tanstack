import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/mangas/')({
  component: () => <div>Hello /mangas/!</div>,
});
