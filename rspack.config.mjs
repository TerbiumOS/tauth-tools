import { defineConfig } from "@rspack/cli";
import path from "path";

export default defineConfig([
    {
        entry: {
            tauth: "./src/index.ts",
        },
        target: "web",
        output: {
            path: path.resolve(process.cwd(), "dist"),
            filename: "tauth.js",
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: "builtin:swc-loader",
                        },
                    ],
                    exclude: [/node_modules/, /src\/buttons/],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".js"],
        },
    },
    {
        entry: {
            buttons: "./src/buttons/signin.tsx",
        },
        experiments: {
            outputModule: true,
        },
        output: {
            path: path.resolve(process.cwd(), "dist"),
            filename: "buttons.js",
            library: {
                type: "module",
            },
            module: true,
        },
        target: "web",
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [
                        {
                            loader: "builtin:swc-loader",
                            options: {
                                jsc: {
                                    parser: {
                                        syntax: "typescript",
                                        tsx: true,
                                    },
                                    transform: {
                                        react: {
                                            runtime: "automatic",
                                        },
                                    },
                                },
                            },
                        },
                    ],
                    exclude: [/node_modules/],
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        externals: {
            react: "react",
            "react-dom": "react-dom",
        },
    },
]);