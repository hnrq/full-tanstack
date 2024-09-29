import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/mangas/$id')({
  component: () => <div>Hello /mangas/$id!</div>,
});
