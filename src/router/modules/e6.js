

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
    ...generateRoutes('E6/G1', 'E6G1',8),
    ...generateRoutes('E6/G2', 'E6G2', 8),
  ];