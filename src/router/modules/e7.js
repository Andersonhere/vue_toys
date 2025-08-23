

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
    ...generateRoutes('E7/G1', 'E7G1',3),
    ...generateRoutes('E7/G2', 'E7G2', 1),
    ...generateRoutes('E7/G3', 'E7G3', 1),
  ];