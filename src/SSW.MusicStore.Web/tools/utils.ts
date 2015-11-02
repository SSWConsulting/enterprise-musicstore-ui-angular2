
export * from './utils/template-injectables';
export * from './utils/template-locals';
export * from './utils/tasks-tools';


export function tsProjectFn(plugins) {
  return plugins.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
  });
}
