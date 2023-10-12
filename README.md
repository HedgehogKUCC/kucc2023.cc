# kucc2023.cc

## Nvm version

`1.1.7`

## Node version

`17.9.1`

## Npm version

`7.20.1`

## Pnpm version

`6.11.0`

---

## pnpm scripts

Use `Git Bash` when `pnpm run copy` or `pnpm run dev`

Because Windows platform do not understand `cp`

---

## tsconfig.[ client | server ].json

區分的原因是因為 `Node` ( server ) 需要用 module: commonjs 去編譯，瀏覽器看不懂 `require` 但看得懂 `import`

所以 client & server 會需要不同的 `target` & `module`
