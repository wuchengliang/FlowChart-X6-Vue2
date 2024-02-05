export const $ = (name) => document.querySelector(name);

export const getContainerSize = (dom) => ({
  width: dom.getBoundingClientRect().width,
  height: dom.getBoundingClientRect().height,
});

export const getImg = (name) => require(`@/assets/${name}`);
export const getSongImg = (name) => require(`@/assets/songyang/${name}`);
