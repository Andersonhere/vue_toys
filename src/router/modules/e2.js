

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

    ...generateRoutes('E2/G1', 'E2G1',8),
    ...generateRoutes('E2/G2', 'E2G2', 8),
  ];