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

## tsconfig.[ client | server ].json

區分的原因是因為 `Node` ( server ) 需要用 module: commonjs 去編譯，瀏覽器看不懂 `require` 但看得懂 `import`

所以 client & server 會需要不同的 `target` & `module`

---

## Dev

***open three terminal***

```
$ pnpm dev
```

```
$ pnpm run tsc:watch
```

```
$ pnpm run tailwindcss:watch
```

---

## Build

```
$ pnpm run build
```
