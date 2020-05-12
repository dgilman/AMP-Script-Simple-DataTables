import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import builtins from 'rollup-plugin-node-builtins'
import resolve from 'rollup-plugin-node-resolve'
import buble from 'rollup-plugin-buble'
import {terser} from 'rollup-plugin-terser'

export default [
    {
        input: 'src/index.js',
        inlineDynamicImports: true,
        plugins: [
            resolve({browser: true}),
            commonjs(),
            builtins(),
            globals(),
            buble({
                transforms: {
                    asyncAwait: false,
                    forOf: false
                }
            }),
            terser()
        ],
        output: // SystemJS version, for older browsers
        {
            dir: "dist/nomodule",
            format: "iife",
            name: "datatables",
            sourcemap: false
        },
    }
]
