

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
    ...generateRoutes('E4/G1', 'E4G1',4),
    ...generateRoutes('E4/G2', 'E4G2', 4),
  ];