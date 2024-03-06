export const ScrollCategory = () => {
  window.scrollTo({
    top: 610,
    behavior: "smooth",
  });
};

export const ScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


export const OverFlowScroll = (status) => {
  if (status) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}