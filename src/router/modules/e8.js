

const generateRoutes = (basePath, prefix, groupSize) => {
    return Array.from({length: groupSize}, (_, i) => {
      const index = i + 1;
      return {
        path: `/${prefix}_${index}`,
        name: `${prefix}_${index}`,
        component: () => import(`@/views/${basePath}/${prefix}_${index}.vue`)
      };
    });
  };

export default [
    ...generateRoutes('E8/G1', 'E8G1',11),
    ...generateRoutes('E8/G2', 'E8G2', 11),
    ...generateRoutes('E8/G3', 'E8G3', 11),
  ];