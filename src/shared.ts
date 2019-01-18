console.log('🌲 shared.ts loaded!');

/**
 * This is a module that is shared between index.ts and lazy loaded module split1.ts. It should only be included and imported once.
 * @param x 
 */
export const identity = <T>(x: T) => x;
