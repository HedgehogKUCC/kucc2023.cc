import { cp } from 'fs/promises';

try {
  await cp('./client/js/plugins', './dist/client/js/plugins',  { recursive: true });
  await cp('./client/css/dist', './dist/client/css', { recursive: true });
  await cp('./views', './dist/views', { recursive: true });
  await cp('./example.env', './dist/example.env', { recursive: true });
  await cp('./.gitignore', './dist/.gitignore', { recursive: true });
  await cp('./package.json', './dist/package.json', { recursive: true });
  await cp('./pnpm-lock.yaml', './dist/pnpm-lock.yaml', { recursive: true });
  console.log(`Copy Success`);
} catch (err) {
  console.log(`Copy Failed: ${err.message}`);
}