# WASM Test

playing around with Web Assembly

## How create packets

1. `cargo generate --git https://github.com/rustwasm/wasm-pack-template`
    `Project Name: new`
2. `cd new`
3. code away
4. `wasm-pack build`
5. `cargo generate --git https://github.com/rustwasm/create-wasm-app`
    `Project Name: www`
6. `npm init wasm-app www`
7. `cd www`
8. add this line to `www/package.json`

    ```
    "dependencies": {
        "wasm-game-of-life": "file:../pkg"
    },
    ```

    right above `devDependencies: { ... }`

9. `npm install`
10. `npm run start`
11. enjoy
