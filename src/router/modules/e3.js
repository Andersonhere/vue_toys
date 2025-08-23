

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

    ...generateRoutes('E3/G1', 'E3G1C1',3),
    ...generateRoutes('E3/G1', 'E3G1C2',3),
    ...generateRoutes('E3/G2', 'E3G2S1', 3),
    ...generateRoutes('E3/G2', 'E3G2S2', 3),
  ];