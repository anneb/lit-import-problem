// Import rollup plugins
import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import resolve from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    html({
      input: ['index.html'],
    }),
    // Resolve bare module specifiers to relative paths
    resolve({
      exportConditions: ['development']
    })
  ],
  output: {
    dir: 'build',
  },
  preserveEntrySignatures: 'strict',
};