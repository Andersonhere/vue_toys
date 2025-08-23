

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
    ...generateRoutes('E1/G1', 'E1G1', 3),
    ...generateRoutes('E1/G2', 'E1G2', 3),
  ];